import sushiImg from "../assets/img/sushi-hero.jpg";

const pageContent = document.querySelector("#content");

const createTitle = () => {
    const menuTitle = document.createElement("h1");
    menuTitle.classList.add("menu-title");
    menuTitle.textContent = "Popular Dishes";

    return menuTitle;
}



const menuSection = () => {
    const menuSection = document.createElement("div");
    menuSection.classList.add("menu-section");

    return menuSection;
};

export const menu = () => {

    const menuTitle = createTitle();

    pageContent.appendChild(menuSection());
    pageContent.appendChild(menuTitle);
};