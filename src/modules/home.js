import { menu } from "./menu.js";
import sushiHero from "../assets/img/sushi-hero.jpg";

const pageContent = document.querySelector("#content");

const createPhiloHeader = () => {
  const philosophyHeader = document.createElement("h1");
  philosophyHeader.classList.add("philosophy-header");
  philosophyHeader.textContent = "Why Oishi Sushi?";

  return philosophyHeader;
};

const createPhiloCards = () => {
  const philosophyDetails = [
    {
      title: "Tradition in Every Bite",
      desc: "At Oishi Sushi, we honor the timeless art of Japanese sushi. Each roll is a reflection of generations of craftsmanship—balanced, precise, and deeply rooted in tradition. From the selection of rice to the cut of fish, we serve more than a meal—we serve heritage.",
    },
    {
      title: "Modern Craft, Timeless Soul",
      desc: "Oishi Sushi blends classic Edo-style techniques with modern creativity. Our chefs respect tradition while embracing innovation, crafting dishes that speak to both history and the evolving palate. It’s sushi with soul—refined, expressive, and unforgettable.",
    },
    {
      title: "Simplicity. Purity. Harmony",
      desc: "Inspired by the Japanese principles of shibui and omotenashi, we believe in letting ingredients speak. At Oishi Sushi, every dish is composed with care—clean flavors, honest presentation, and a quiet elegance that invites reflection.",
    },
  ];

  const philoCardContainer = document.createElement("div");
  philoCardContainer.classList.add("philo-card-container");

  const philosophies = philosophyDetails.map((philo, index) => {
    const philoCard = document.createElement("article");
    philoCard.classList.add("philo-card");
    philoCard.id = `philo-card${index}`;

    const philoTitle = document.createElement("h3");
    philoTitle.classList.add("philo-title");
    philoTitle.textContent = philo.title;

    const philoDesc = document.createElement("p");
    philoDesc.classList.add("philo-desc");
    philoDesc.textContent = philo.desc;

    philoCard.appendChild(philoTitle);
    philoCard.appendChild(philoDesc);

    return philoCard;
  });

  philosophies.forEach((card) => philoCardContainer.appendChild(card));

  return philoCardContainer;
};

const philosophySection = () => {
  const philosophySection = document.createElement("section");
  philosophySection.classList.add("philosophy-section");

  philosophySection.appendChild(createPhiloHeader());
  philosophySection.appendChild(createPhiloCards());

  return philosophySection;
};

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
  heroDesc.textContent =
    "At Oishii Sushi, tradition meets taste in every handcrafted roll. From the delicate balance of fresh ingredients to the serene ambiance of Japanese culinary culture, we invite you to savor sushi the way it was meant to be—pure, flavorful, and unforgettable.";

  return heroDesc;
};

const createBtn = () => {
  const menuBtn = document.createElement("button");
  menuBtn.classList.add("hero-btn");
  menuBtn.textContent = "Our Menu";

  menuBtn.addEventListener("click", () => {
    pageContent.innerHTML = "";
    menu();
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
  homeContainer.appendChild(philosophySection());

  pageContent.appendChild(homeContainer);
};
