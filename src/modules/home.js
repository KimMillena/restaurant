export const home = () => {
    const pageContent = document.querySelector("#content");

    const homeContainer = document.createElement("div");
    homeContainer.classList.add("home-container");

    homeContainer.appendChild(heroSection);

    pageContent.appendChild(homeContainer);
   
}
