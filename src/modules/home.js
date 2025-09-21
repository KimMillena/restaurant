import { menu } from "./menu.js";
import sushiHero from "../assets/img/sushi-hero.jpg";

console.log("Webpack resolved image to:", sushiHero);

const pageContent = document.querySelector("#content");

const createImage = () => {
    const heroImage = document.createElement("img");
    heroImage.classList.add("hero-img");
    heroImage.src = sushiHero;

    return heroImage;
};

const createTitle = () => {
    const heroHeading = document.createElement("div");
    heroHeading.classList.add("hero-heading");

    const heroTitle = document.createElement("h1");
    heroTitle.classList.add("hero-title");
    heroTitle.textContent = "おいしい寿司";

    const heroSubtitle = document.createElement("span");
    heroSubtitle.classList.add("hero-subtitle");
    heroSubtitle.textContent = "(Delicious Sushi)";

    heroHeading.appendChild(heroTitle);
    heroHeading.appendChild(heroSubtitle);

    return heroHeading;
};

const createDesc = () => {
    const heroDesc = document.createElement("p");
    heroDesc.classList.add("hero-desc");
    heroDesc.textContent = "Restaurant Description...";

    return heroDesc;
};

const createBtn = () => {
    const menuBtn = document.createElement("button");
    menuBtn.classList.add("hero-btn");
    menuBtn.textContent = "Our Menu";

    menuBtn.addEventListener("click", () => { 
        pageContent.innerHTML = ""; 
        menu() 
    });

    return menuBtn;
};

const heroSection = () => {
    const heroSection = document.createElement("div");
    heroSection.classList.add("hero-section");

    const rightSection = document.createElement("div");
    rightSection.classList.add("right-section");

    const heroImage = createImage();
    const heroHeading = createTitle();
    const heroDesc = createDesc();
    const menuBtn = createBtn();

    heroSection.appendChild(heroImage);
    rightSection.appendChild(heroHeading);
    rightSection.appendChild(heroDesc);
    rightSection.appendChild(menuBtn);
    heroSection.appendChild(rightSection);

    return heroSection;
};

export const home = () => {
    const homeContainer = document.createElement("div");
    homeContainer.classList.add("home-container");

    homeContainer.appendChild(heroSection());
    pageContent.appendChild(homeContainer);
};