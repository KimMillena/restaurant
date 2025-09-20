export const about = () => {
    const pageContent = document.querySelector("#content");

    const aboutTitle = document.createElement("h1");
    aboutTitle.classList.add("menu-title");

    aboutTitle.textContent = "About Us";
    pageContent.appendChild(aboutTitle);
}