import AnimaNumeros from "./anima-numeros.js";

export default function fetchAnimais(url, target) {
  // cria a div contendo informações com o tatal de animais
  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");
    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }

  // preenche cada animal no DOM
  const numeroGrid = document.querySelector(target);
  function preencherAnimais(animal) {
    const divAnimal = createAnimal(animal);
    numeroGrid.appendChild(divAnimal);
  }

  // anima os números de cada animal
  function animaAnimaisNumeros() {
    const animaNumeros = new AnimaNumeros("[data-numero]", ".numeros", "ativo");
    animaNumeros.init();
  }

  // puxa os animais através de um arquivo JSON
  // e cria cada animal utilizado createAnimal
  async function criarAnimais() {
    try {
      // fetch, espera resposta e transforma a resposta em JSON
      const animaisResponse = await fetch(url);
      const animaisJSON = await animaisResponse.json();

      // após a tranformação de json ativa as funções para preencher e animar os números
      animaisJSON.forEach((item) => preencherAnimais(item));
      animaAnimaisNumeros();
    } catch (erro) {
      console.log(erro);
    }
  }
  return criarAnimais();
}
