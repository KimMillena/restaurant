import sushiHero from "../assets/img/sushi-hero.jpg";

console.log("Webpack resolved image to:", sushiHero);

const createImage = () => {
    const heroImage = document.createElement("img");
    heroImage.classList.add("hero-img");
    heroImage.src = sushiHero;

    return heroImage;
};

const createTitle = () => {
    const heroTitle = document.createElement("h1");
    heroTitle.classList.add("hero-title");
    heroTitle.textContent = "Restaurant";

    return heroTitle;
};

const createDesc = () => {
    const heroDesc = document.createElement("p");
    heroDesc.classList.add("hero-desc");
    heroDesc.textContent = "Restaurant Description...";

    return heroDesc;
};

const createBtn = () => {
    const menuBtn = document.createElement("button");
    menuBtn.classList.add("menu-btn");
    menuBtn.textContent = "Our Menu";

    return menuBtn;
};

const heroSection = () => {
    const heroSection = document.createElement("div");
    heroSection.classList.add("hero-section");

    const rightSection = document.createElement("div");
    rightSection.classList.add("right-section");

    const heroImage = createImage();
    const heroTitle = createTitle();
    const heroDesc = createDesc();
    const menuBtn = createBtn();

    heroSection.appendChild(heroImage);
    rightSection.appendChild(heroTitle);
    rightSection.appendChild(heroDesc);
    rightSection.appendChild(menuBtn);
    heroSection.appendChild(rightSection);

    return heroSection;
};

export const home = () => {
    const pageContent = document.querySelector("#content");

    const homeContainer = document.createElement("div");
    homeContainer.classList.add("home-container");

    homeContainer.appendChild(heroSection());
    pageContent.appendChild(homeContainer);
};