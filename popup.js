// Dummy games data (no API needed)
const games = [
  { name: "Fortnite", genre: "Battle Royale", platform: "PC" },
  { name: "Valorant", genre: "Shooter", platform: "PC" },
  { name: "League of Legends", genre: "MOBA", platform: "PC" },
  { name: "Apex Legends", genre: "Battle Royale", platform: "PC" },
  { name: "Genshin Impact", genre: "RPG", platform: "PC" },
  { name: "Counter-Strike 2", genre: "Shooter", platform: "PC" },
  { name: "Dota 2", genre: "MOBA", platform: "PC" },
  { name: "Warframe", genre: "Action", platform: "PC" },
  { name: "Path of Exile", genre: "RPG", platform: "PC" },
  { name: "Rocket League", genre: "Sports", platform: "PC" }
];

// Create a game card
function createGameCard(game) {
  const card = document.createElement("div");
  card.className = "game-card";
  
  card.innerHTML = `
    <h3>${game.name}</h3>
    <p>Genre: ${game.genre}</p>
    <p>Platform: ${game.platform}</p>
    <span class="free-tag">FREE</span>
  `;
  
  return card;
}

// Display all games
function displayGames(gameList) {
  const container = document.getElementById("gameList");
  container.innerHTML = "";
  
  if (gameList.length === 0) {
    container.innerHTML = "<p>No games found</p>";
    return;
  }
  
  gameList.forEach(game => {
    container.appendChild(createGameCard(game));
  });
}

// Search function
function searchGames(query) {
  const filtered = games.filter(game => 
    game.name.toLowerCase().includes(query.toLowerCase())
  );
  displayGames(filtered);
}

// Initialize when page loads
document.addEventListener("DOMContentLoaded", function() {
  // Show all games
  displayGames(games);
  
  // Add search functionality
  document.getElementById("searchBox").addEventListener("input", function(e) {
    searchGames(e.target.value);
  });
});