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

export const philosophySection = () => {
  const philosophySection = document.createElement("section");
  philosophySection.classList.add("philosophy-section");

  philosophySection.appendChild(createPhiloHeader());
  philosophySection.appendChild(createPhiloCards());

  return philosophySection;
};
