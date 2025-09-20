export const home = () => {
    const pageContent = document.querySelector("#content");

    const homeContainer = document.createElement("div");
    homeContainer.classList.add("home-container");

    const heroSection = document.createElement("div");
    heroSection.classList.add("hero-section");

     // placeholder image
    const heroImage = document.createElement("div");
    heroImage.classList.add("hero-img");

    const rightSection = document.createElement("div");
    rightSection.classList.add("right-section");

    const heroTitle = document.createElement("h1");
    heroTitle.classList.add("hero-title");
    heroTitle.textContent = "Restaurant";

    const heroDesc = document.createElement("p");
    heroDesc.classList.add("hero-desc");
    heroDesc.textContent = "Restaurant Description...";

    heroSection.appendChild(heroImage);
    rightSection.appendChild(heroTitle);
    rightSection.appendChild(heroDesc);
    heroSection.appendChild(rightSection);

    homeContainer.appendChild(heroSection);

    pageContent.appendChild(homeContainer);
   
}
