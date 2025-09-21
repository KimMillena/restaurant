export const about = () => {
    const pageContent = document.querySelector("#content");

    const aboutTitle = document.createElement("h1");
    aboutTitle.classList.add("about-title");
    aboutTitle.textContent = "About Us";
    pageContent.appendChild(aboutTitle);

    const aboutDesc= document.createElement("p");
    aboutDesc.classList.add("about-desc");
    aboutDesc.textContent = "Description...";
    pageContent.appendChild(aboutDesc);
}