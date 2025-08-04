function abrirPopup() {
  document.getElementById("popup").style.display = "block";
}

function fecharPopup() {
  document.getElementById("popup").style.display = "none";
}
const carrossel = document.getElementById("carrossel");
const indicadores = document.getElementById("indicadores");
const cards = document.querySelectorAll(".card");
const totalPaginas = Math.ceil(cards.length / 4); // 4 cards por página

for (let i = 0; i < totalPaginas; i++) {
  const ponto = document.createElement("span");
  ponto.addEventListener("click", () => {
    carrossel.scrollTo({
      left: i * (cards[0].offsetWidth + 16) * 4,
      behavior: "smooth",
    });
  });
  indicadores.appendChild(ponto);
}

function atualizarIndicadores() {
  const scrollLeft = carrossel.scrollLeft;
  const larguraCard = cards[0].offsetWidth + 16;
  const index = Math.round(scrollLeft / (larguraCard * 2));
  const pontos = indicadores.querySelectorAll("span");
  pontos.forEach(p => p.classList.remove("active"));
  if (pontos[index]) pontos[index].classList.add("active");
}

carrossel.addEventListener("scroll", atualizarIndicadores);
window.addEventListener("load", atualizarIndicadores);


