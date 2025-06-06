const musicas = [
    "https://open.spotify.com/embed/track/6usohdchdzW9oML7VC4Uhk?utm_source=generator",
    "https://open.spotify.com/embed/track/1bguAEOqZ6UU6Cnljrgn0t?utm_source=generator",
    "https://open.spotify.com/embed/track/4t6qMeHgbxWod2SLokiSQp?utm_source=generator",
    "https://open.spotify.com/embed/track/5IgjP7X4th6nMNDh4akUHb?utm_source=generator"
];
let index = 0;
function trocarMusica(delta) {
    index = (index + delta + musicas.length) % musicas.length;
    document.getElementById("spotify-player").src = musicas[index];
}
function atualizarContador() {
    const inicio = new Date("2024-06-14T00:00:00");
    const agora = new Date();
    const diff = agora - inicio;
    const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diff / (1000 * 60)) % 60);
    document.getElementById("contador-texto").textContent = `Estamos juntos há ${dias} dias, ${horas} horas e ${minutos} minutos.`;
}
setInterval(atualizarContador, 60000);
atualizarContador();

const fasesLua = ["🌑", "🌓", "🌕", "🌗"];
const datas = [
    { data: "2024-06-14", titulo: "Início do namoro", lua: "🌕" },
    { data: "2024-08-10", titulo: "Primeiro encontro", lua: "🌓" },
    { data: "2024-08-11", titulo: "Primeira foto", lua: "🌗" },
    { data: "2024-11-14", titulo: "Aniversário dela", lua: "🌑" },
    { data: "2024-11-20", titulo: "Meu aniversário", lua: "🌕" },
    { data: "2024-12-25", titulo: "Começamos a morar juntos", lua: "🌓" },
    { data: "2025-06-14", titulo: "1 ano juntos", lua: "🌕" }
];

const datasEl = document.getElementById("datas");
datas.forEach(item => {
    const p = document.createElement("p");
    p.textContent = `${item.titulo} - ${item.data} ${item.lua}`;
    datasEl.appendChild(p);
});

const galeria = document.querySelector(".roleta");
for (let i = 1; i <= 6; i++) {
    if (i !== 7) {
        const img = document.createElement("img");
        img.src = `imagem${i}.jpg`;
        galeria.appendChild(img);
    }
}