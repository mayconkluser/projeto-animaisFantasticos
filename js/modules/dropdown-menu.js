import outsideClick from "./outside-click.js";
export default function initDropDownMenu() {
  const dropdownMenus = document.querySelectorAll("[data-dropdown]");

  function handleClick(event) {
    event.preventDefault();
    this.classList.add("active");
    outsideClick(this, ["click"], () => {
      //"touchstart", serve para click em dispositivos moveis
      this.classList.remove("active");
    });
  }

  dropdownMenus.forEach((menu) => {
    ["click"].forEach((userEvent) => {
      //"touchstart", serve para click em dispositivos moveis
      menu.addEventListener(userEvent, handleClick);
    });
  });
}
