const generoBtn = document.querySelector(".estats_btn--genero");
const ondeBtn = document.querySelector(".estats_btn--onde");
const tipoBtn = document.querySelector(".estats_btn--tipo");
const obitoBtn = document.querySelector(".estats_btn--obito");
const acidentesBtn = document.querySelector(".estats_btn--acidentes");
const faixaBtn = document.querySelector(".estats_btn--faixa");
const grafico = document.querySelector(".app__image");
const botoes = document.querySelectorAll(".geral_btn");
const video = document.querySelector(".Video_cena");

generoBtn.addEventListener("click", () => {
  video.classList.remove("active");
  alterarContexto("genero");
  generoBtn.classList.add("active");
});
ondeBtn.addEventListener("click", () => {
  video.classList.remove("active");
  alterarContexto("onde");
  ondeBtn.classList.add("active");
});
tipoBtn.addEventListener("click", () => {
  video.classList.remove("active");
  alterarContexto("tipo");
  tipoBtn.classList.add("active");
});
obitoBtn.addEventListener("click", () => {
  video.classList.remove("active");
  alterarContexto("obito");
  obitoBtn.classList.add("active");
});
acidentesBtn.addEventListener("click", () => {
  video.classList.add("active");
  alterarContexto("acidentes");
  acidentesBtn.classList.add("active");
});
faixaBtn.addEventListener("click", () => {
  video.classList.remove("active");
  alterarContexto("faixa");
  faixaBtn.classList.add("active");
});

function alterarContexto(contexto) {
  botoes.forEach(function (w) {
    w.classList.remove("active");
  });
  grafico.setAttribute("src", `img/${contexto}.png`);
}

//EPIS SECTION

const textobtn = document.querySelector(".apresentacao-btn");
const videosDescBtn = document.querySelector(".videos_desc-btn");
const videosEpiBtn = document.querySelector(".videos_epi-btn");
const botoesEpi = document.querySelectorAll(".geral_btn-epi");
const textoCont = document.querySelectorAll(".conteudo_apresentacao");

textobtn.addEventListener("click", () => {
  alterarConteudoEpi();
  textobtn.classList.add("active");
  textoCont[0].classList.add("active");
  textoCont[1].classList.remove("active");
  textoCont[2].classList.remove("active");
});
videosDescBtn.addEventListener("click", () => {
  alterarConteudoEpi();
  videosDescBtn.classList.add("active");
  textoCont[1].classList.add("active");
  textoCont[2].classList.remove("active");
  textoCont[0].classList.remove("active");
});
videosEpiBtn.addEventListener("click", () => {
  alterarConteudoEpi();
  videosEpiBtn.classList.add("active");
  textoCont[2].classList.add("active");
  textoCont[0].classList.remove("active");
  textoCont[1].classList.remove("active");
});

function alterarConteudoEpi() {
  botoesEpi.forEach(function (k) {
    k.classList.remove("active");
  });
  textoCont.forEach(function (k) {
    k.classList.remove("active");
  });
}
//prevencao SECTION

const flierBtn = document.querySelector(".apresenta-btn");
const videosBtn = document.querySelector(".explica-btn");
const botoesPrev = document.querySelectorAll(".geral_btn-prev");
const prevConteudo = document.querySelectorAll(".prevencao_conteudo");

flierBtn.addEventListener("click", () => {
  alterarConteudo();
  flierBtn.classList.add("active");
  prevConteudo[0].classList.add("active");
});
videosBtn.addEventListener("click", () => {
  alterarConteudo();
  videosBtn.classList.add("active");
  prevConteudo[1].classList.add("active");
});

function alterarConteudo(x) {
  botoesPrev.forEach(function (x) {
    x.classList.remove("active");
  });
  prevConteudo.forEach(function (x) {
    x.classList.remove("active");
  });
}
