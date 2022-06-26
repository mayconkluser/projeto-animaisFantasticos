import ScrollSuave from "./modules/scroll-suave.js";
import Accordion from "./modules/accordion.js";
import initTabNav from "./modules/tab-nav.js";
import initModal from "./modules/modal.js";
import initTooltip from "./modules/tooltip.js";
import initDropDownMenu from "./modules/dropdown-menu.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initFuncionamento from "./modules/funcionamento.js";
import initFetchAnimais from "./modules/fetch-animais.js";
import initFetchBitcoin from "./modules/fetch-bitcoin.js";
import initAnimacaoScroll from "./modules/scroll-animate.js";

// --------------------------------------------
import * as test from "./modules/teste.js";
// test.testando1();
// test.testando2();
// --------------------------------------------

const scrollSuave = new ScrollSuave('[data-menu = "suave"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

initTabNav();
initModal();
initTooltip();
initDropDownMenu();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBitcoin();
initAnimacaoScroll();

// import $ from "jquery";
// import _ from "lodash";

// $("nav").hide();
// const diferenca = _.difference(["banana", "uva"], ["banana", "morango"]);
