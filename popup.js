// Real free-to-play games with working links
const games = [
  // Shooters
  { name: "Valorant", genre: "Shooter", platform: "PC", url: "https://playvalorant.com/" },
  { name: "Counter-Strike 2", genre: "Shooter", platform: "PC", url: "https://store.steampowered.com/app/730/CounterStrike_2/" },
  { name: "Apex Legends", genre: "Shooter", platform: "PC / Console", url: "https://www.ea.com/games/apex-legends" },
  { name: "Overwatch 2", genre: "Shooter", platform: "PC / Console", url: "https://overwatch.blizzard.com/" },
  { name: "Team Fortress 2", genre: "Shooter", platform: "PC", url: "https://store.steampowered.com/app/440/Team_Fortress_2/" },
  { name: "Destiny 2", genre: "Shooter", platform: "PC / Console", url: "https://store.steampowered.com/app/1085660/Destiny_2/" },
  { name: "Warface", genre: "Shooter", platform: "PC", url: "https://store.steampowered.com/app/291480/Warface/" },
  { name: "Enlisted", genre: "Shooter", platform: "PC / Console", url: "https://store.steampowered.com/app/1167160/Enlisted/" },

  // Battle Royale
  { name: "Fortnite", genre: "Battle Royale", platform: "PC / Console / Mobile", url: "https://www.fortnite.com/" },
  { name: "PUBG: Battlegrounds", genre: "Battle Royale", platform: "PC / Console", url: "https://store.steampowered.com/app/578080/PUBG_BATTLEGROUNDS/" },
  { name: "Fall Guys", genre: "Battle Royale", platform: "PC / Console", url: "https://store.epicgames.com/en-US/p/fall-guys" },
  { name: "Naraka: Bladepoint", genre: "Battle Royale", platform: "PC / Console", url: "https://store.steampowered.com/app/1203220/NARAKA_BLADEPOINT/" },

  // MOBA
  { name: "League of Legends", genre: "MOBA", platform: "PC", url: "https://www.leagueoflegends.com/" },
  { name: "Dota 2", genre: "MOBA", platform: "PC", url: "https://store.steampowered.com/app/570/Dota_2/" },
  { name: "Smite", genre: "MOBA", platform: "PC / Console", url: "https://store.steampowered.com/app/386360/SMITE/" },
  { name: "Pokémon UNITE", genre: "MOBA", platform: "Console / Mobile", url: "https://unite.pokemon.com/" },

  // RPG
  { name: "Genshin Impact", genre: "RPG", platform: "PC / Console / Mobile", url: "https://genshin.hoyoverse.com/" },
  { name: "Path of Exile", genre: "RPG", platform: "PC / Console", url: "https://store.steampowered.com/app/238960/Path_of_Exile/" },
  { name: "Warframe", genre: "RPG", platform: "PC / Console", url: "https://store.steampowered.com/app/230410/Warframe/" },
  { name: "Lost Ark", genre: "RPG", platform: "PC", url: "https://store.steampowered.com/app/1599340/Lost_Ark/" },
  { name: "Tower of Fantasy", genre: "RPG", platform: "PC / Mobile", url: "https://store.steampowered.com/app/2064650/Tower_of_Fantasy/" },
  { name: "Honkai: Star Rail", genre: "RPG", platform: "PC / Mobile", url: "https://hsr.hoyoverse.com/" },
  { name: "Star Wars: The Old Republic", genre: "RPG", platform: "PC", url: "https://store.steampowered.com/app/1286830/STAR_WARS_The_Old_Republic/" },
  { name: "Guild Wars 2", genre: "RPG", platform: "PC", url: "https://store.steampowered.com/app/1284210/Guild_Wars_2/" },

  // Card / Strategy
  { name: "Hearthstone", genre: "Card Game", platform: "PC / Mobile", url: "https://hearthstone.blizzard.com/" },
  { name: "Yu-Gi-Oh! Master Duel", genre: "Card Game", platform: "PC / Console / Mobile", url: "https://store.steampowered.com/app/1449850/YuGiOh_Master_Duel/" },
  { name: "Legends of Runeterra", genre: "Card Game", platform: "PC / Mobile", url: "https://playruneterra.com/" },
  { name: "Marvel Snap", genre: "Card Game", platform: "PC / Mobile", url: "https://store.steampowered.com/app/1997040/MARVEL_SNAP/" },

  // Racing / Sports
  { name: "Rocket League", genre: "Sports", platform: "PC / Console", url: "https://store.epicgames.com/en-US/p/rocket-league" },
  { name: "eFootball", genre: "Sports", platform: "PC / Console / Mobile", url: "https://store.steampowered.com/app/1665460/eFootball_2024/" },
  { name: "MultiVersus", genre: "Fighting", platform: "PC / Console", url: "https://store.steampowered.com/app/1818750/MultiVersus/" },

  // Survival
  { name: "Unturned", genre: "Survival", platform: "PC", url: "https://store.steampowered.com/app/304930/Unturned/" },
  { name: "War Thunder", genre: "Simulation", platform: "PC / Console", url: "https://store.steampowered.com/app/236390/War_Thunder/" },
  { name: "World of Tanks", genre: "Simulation", platform: "PC", url: "https://worldoftanks.com/" },
  { name: "World of Warships", genre: "Simulation", platform: "PC", url: "https://store.steampowered.com/app/552990/World_of_Warships/" },

  // Social / Other
  { name: "VRChat", genre: "Social", platform: "PC", url: "https://store.steampowered.com/app/438100/VRChat/" },
  { name: "Rec Room", genre: "Social", platform: "PC / Console / Mobile", url: "https://store.steampowered.com/app/471710/Rec_Room/" },
  { name: "Among Us", genre: "Social", platform: "PC / Console / Mobile", url: "https://store.steampowered.com/app/945360/Among_Us/" }
];

// Genre → emoji map
const genreEmoji = {
  "All": "🌐",
  "Shooter": "🔫",
  "Battle Royale": "🪂",
  "MOBA": "⚔️",
  "RPG": "🗡️",
  "Card Game": "🃏",
  "Sports": "⚽",
  "Fighting": "🥊",
  "Survival": "🏕️",
  "Simulation": "🎖️",
  "Social": "💬",
};

let activeGenre = "All";

// Unique genres
function getGenres() {
  const genres = [...new Set(games.map(g => g.genre))];
  return ["All", ...genres.sort()];
}

// Build filter pills with emojis
function buildFilters() {
  const container = document.getElementById("filters");
  container.innerHTML = "";
  getGenres().forEach(genre => {
    const btn = document.createElement("button");
    btn.className = "filter-btn" + (genre === activeGenre ? " active" : "");
    btn.innerHTML = `<span class="emoji">${genreEmoji[genre] || "🎮"}</span> ${genre}`;
    btn.addEventListener("click", () => {
      activeGenre = genre;
      applyFilters();
      buildFilters();
    });
    container.appendChild(btn);
  });
}

// Create a game card with genre colour + emoji + stagger index
function createGameCard(game, index) {
  const card = document.createElement("div");
  card.className = "game-card";
  card.setAttribute("data-genre", game.genre);
  card.style.animationDelay = (index * 0.04) + "s";

  const emoji = genreEmoji[game.genre] || "🎮";

  card.innerHTML = `
    <div class="card-emoji">${emoji}</div>
    <div class="card-body">
      <h3>${game.name}</h3>
      <div class="card-meta">
        <span class="genre-tag">${game.genre}</span>
        <span class="platform-tag">${game.platform}</span>
      </div>
    </div>
    <a href="${game.url}" target="_blank" rel="noopener" class="play-btn">Play ▸</a>
  `;
  return card;
}

// Filter logic
function applyFilters() {
  const query = document.getElementById("searchBox").value.toLowerCase();
  const filtered = games.filter(g => {
    const matchesSearch = g.name.toLowerCase().includes(query) || g.genre.toLowerCase().includes(query);
    const matchesGenre = activeGenre === "All" || g.genre === activeGenre;
    return matchesSearch && matchesGenre;
  });
  displayGames(filtered);
}

// Render games
function displayGames(list) {
  const container = document.getElementById("gameList");
  const countEl = document.getElementById("gameCount");
  container.innerHTML = "";
  countEl.textContent = list.length + " free game" + (list.length !== 1 ? "s" : "");

  if (list.length === 0) {
    container.innerHTML = '<div class="empty"><span class="empty-icon">😕</span>No games found</div>';
    return;
  }
  list.forEach((game, i) => container.appendChild(createGameCard(game, i)));
}

// Init
document.addEventListener("DOMContentLoaded", () => {
  buildFilters();
  applyFilters();
  document.getElementById("searchBox").addEventListener("input", applyFilters);
});