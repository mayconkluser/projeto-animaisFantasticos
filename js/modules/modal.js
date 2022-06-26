export default class Modal {
  constructor(botaoAbrir, botaoFechar, containerModal) {
    this.botaoAbrir = document.querySelector(botaoAbrir);
    this.botaoFechar = document.querySelector(botaoFechar);
    this.containerModal = document.querySelector(containerModal);

    // bind this ao callback para fazer referência ao objeto da classe
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.clickForaModal = this.clickForaModal.bind(this);
  }

  // abre ou fecha o madal
  toggleModal() {
    this.containerModal.classList.toggle("ativo");
  }

  // adiciona o evento de toggle no modal
  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  // fecha ao clicar do lado de fora
  clickForaModal(event) {
    if (this.containerModal === event.target) this.toggleModal();
  }

  // adiciona os evento aos elemento do modal
  addModalEvent() {
    this.botaoAbrir.addEventListener("click", this.eventToggleModal);
    this.botaoFechar.addEventListener("click", this.eventToggleModal);
    this.containerModal.addEventListener("click", this.clickForaModal);
  }

  init() {
    if (this.botaoAbrir && this.botaoFechar && this.containerModal) {
      this.addModalEvent();
    }
    return this;
  }
}
