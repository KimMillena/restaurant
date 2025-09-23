import { heroSection } from "./hero.js";
import { philosophySection } from "./philosophy.js";

const pageContent = document.querySelector("#content");

export const home = () => {
  const homeContainer = document.createElement("div");
  homeContainer.classList.add("home-container");

  homeContainer.appendChild(heroSection());
  homeContainer.appendChild(philosophySection());

  pageContent.appendChild(homeContainer);
};
