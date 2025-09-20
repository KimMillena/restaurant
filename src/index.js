import "./styles.css";
import { home } from "./modules/home.js";
import { menu } from "./modules/menu.js";
import { about } from "./modules/about";

const pageContent = document.querySelector("#content");
const homeBtn = document.querySelector(".home-btn");
const menuBtn = document.querySelector(".menu-btn");
const aboutBtn = document.querySelector(".about-btn");

home();

homeBtn.addEventListener("click", (e) => { setActivePage(e) });
menuBtn.addEventListener("click", (e) => { setActivePage(e) });
aboutBtn.addEventListener("click", (e) => { setActivePage(e) });


