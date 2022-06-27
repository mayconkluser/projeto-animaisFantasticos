import outsideClick from "./outside-click.js";

export default class DropDownMenu {
  constructor(dropdownMenus, events) {
    this.dropdownMenus = document.querySelectorAll(dropdownMenus);

    // define click como argumento padrao de events caso o usuario n defina
    if (events === undefined) {
      this.events = ["click"];
    } else {
      this.events = events;
    }
    this.activeCLass = "active";
    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
  }

  // ativa o dropdownmenu e adiciona a função que observa o click fora dele
  activeDropdownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.add(this.activeCLass);
    outsideClick(element, this.events, () => {
      //"touchstart", serve para click em dispositivos moveis
      element.classList.remove("active");
    });
  }

  // adiciona os eventos ao dropdownMenu
  addDropdownMenuEvent() {
    this.dropdownMenus.forEach((menu) => {
      this.events.forEach((userEvent) => {
        //"touchstart", serve para click em dispositivos moveis
        menu.addEventListener(userEvent, this.activeDropdownMenu);
      });
    });
  }

  init() {
    if (this.dropdownMenus.length) {
      this.addDropdownMenuEvent();
    }
    return this;
  }
}
