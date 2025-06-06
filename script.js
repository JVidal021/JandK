// Atualização do contador de tempo
const startDate = new Date("2024-06-14T00:00:00");
const updateCounter = () => {
  const now = new Date();
  const diff = now - startDate;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  document.getElementById('days').textContent = days;
  document.getElementById('hours').textContent = String(hours).padStart(2, '0');
  document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
  document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
};
setInterval(updateCounter, 1000);
updateCounter();

// Spotify player com troca automática
const tracks = [
  "6usohdchdzW9oML7VC4Uhk",
  "1bguAEOqZ6UU6Cnljrgn0t",
  "4t6qMeHgbxWod2SLokiSQp",
  "5IgjP7X4th6nMNDh4akUHb"
];
let currentTrack = 0;
const spotifyFrame = document.getElementById("spotifyEmbed");

function updateTrack() {
  spotifyFrame.src = `https://open.spotify.com/embed/track/${tracks[currentTrack]}?utm_source=generator`;
}

document.getElementById("nextBtn").onclick = () => {
  currentTrack = (currentTrack + 1) % tracks.length;
  updateTrack();
};

document.getElementById("prevBtn").onclick = () => {
  currentTrack = (currentTrack - 1 + tracks.length) % tracks.length;
  updateTrack();
};

updateTrack();

// Momentos marcantes
function showEvent(date, text, moonEmoji) {
  document.getElementById("eventDescription").innerHTML =
    `<strong>${date}</strong><br>${text}<br><em>A lua nos marcou com essa fase neste momento:</em> ${moonEmoji}`;
}
