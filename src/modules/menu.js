import sushiImg from "../assets/img/sushi-1858696_1920.jpg";
import sushiImg1 from "../assets/img/food-1406883_1920.jpg";
import sushiImg2 from "../assets/img/sushi-2714101_1920.jpg";

const pageContent = document.querySelector("#content");

const createTitle = () => {
  const menuTitle = document.createElement("h1");
  menuTitle.classList.add("menu-title");
  menuTitle.textContent = "Popular Dishes";

  return menuTitle;
};

const createMenuCard = () => {
  const menuItems = [
    {
      prodName: "Sāmon Sashimi Mori",
      desc: "Salmon Sashimi Platter, fresh salmon slices served with soy sauce and garnish.",
      price: "¥680",
      img: sushiImg,
    },
    {
      prodName: "Kuro Goma Maki",
      desc: "Black Sesame Roll, crab and avocado roll topped with black sesame seeds.",
      price: "¥520",
      img: sushiImg1,
    },
    {
      prodName: "Tempura Roll",
      desc: "Tempura Crunch Roll, shrimp tempura roll with spicy mayo and sweet glaze.",
      price: "¥580",
      img: sushiImg2,
    },
  ];

  const menuCards = menuItems.map((item, index) => {
    const menuCard = document.createElement("div");
    menuCard.classList.add("menu-card");
    menuCard.id = `menu-card${index}`;

    const menuImage = document.createElement("img");
    menuImage.classList.add("menu-img");
    menuImage.src = item.img;

    const menuName = document.createElement("h2");
    menuName.classList.add("menu-name");
    menuName.textContent = item.prodName;

    const menuDesc = document.createElement("p");
    menuDesc.classList.add("menu-desc");
    menuDesc.textContent = item.desc;

    const menuPrice = document.createElement("p");
    menuPrice.classList.add("menu-price");
    menuPrice.textContent = item.price;

    menuCard.appendChild(menuImage);
    menuCard.appendChild(menuName);
    menuCard.appendChild(menuDesc);
    menuCard.appendChild(menuPrice);

    return menuCard;
  });

  return menuCards;
};

const menuSection = () => {
  const menuSection = document.createElement("div");
  menuSection.classList.add("menu-section");

  const menuCards = createMenuCard();
  menuCards.forEach((card) => menuSection.appendChild(card));

  return menuSection;
};

export const menu = () => {
  const menuTitle = createTitle();

  pageContent.appendChild(menuTitle);
  pageContent.appendChild(menuSection());
};
