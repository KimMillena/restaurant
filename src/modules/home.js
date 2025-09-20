export const home = () => {
    const pageContent = document.querySelector("#content");

    const homeContainer = document.createElement("div");
    homeContainer.classList.add("home-container");

    const heroSection = document.createElement("div");
    heroSection.classList.add("hero-section");

     // placeholder image
    const heroImage = document.createElement("div");
    heroImage.classList.add("hero-img");

    heroSection.appendChild(heroImage);

    homeContainer.appendChild(heroSection);

    pageContent.appendChild(homeContainer);
   
}
