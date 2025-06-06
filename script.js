const spotifyLinks = [
  "https://open.spotify.com/embed/track/6usohdchdzW9oML7VC4Uhk?utm_source=generator",
  "https://open.spotify.com/embed/track/1bguAEOqZ6UU6Cnljrgn0t?utm_source=generator",
  "https://open.spotify.com/embed/track/4t6qMeHgbxWod2SLokiSQp?utm_source=generator",
  "https://open.spotify.com/embed/track/5IgjP7X4th6nMNDh4akUHb?utm_source=generator"
];

let currentTrack = 0;

document.getElementById("nextTrack").addEventListener("click", () => {
  currentTrack = (currentTrack + 1) % spotifyLinks.length;
  document.getElementById("spotifyPlayer").src = spotifyLinks[currentTrack];
});

function showDateInfo(date, text) {
  document.getElementById("dateInfo").innerText = `${date}: ${text}`;
}
