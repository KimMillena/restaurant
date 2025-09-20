export const menu = () => {
    const pageContent = document.querySelector("#content");

    const menuTitle = document.createElement("h1");
    menuTitle.classList.add("menu-title");

    menuTitle.textContent = "Our Menu";
    pageContent.appendChild(menuTitle);
};