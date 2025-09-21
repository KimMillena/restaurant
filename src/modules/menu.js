import sushiImg from "../assets/img/sushi-hero.jpg";

const pageContent = document.querySelector("#content");

const createTitle = () => {
    const menuTitle = document.createElement("h1");
    menuTitle.classList.add("menu-title");
    menuTitle.textContent = "Popular Dishes";

    return menuTitle;
}

const createMenuCard = () => {
    const menuItems = [
        { 
            prodName: "Sushi1", 
            desc: "Desc1", 
            price: "¥10", 
            img: sushiImg,
        },
        { 
            prodName: "Sushi2", 
            desc: "Desc2", 
            price: "¥20", 
            img: sushiImg,
        },
        { 
            prodName: "Sushi3", 
            desc: "Desc3", 
            price: "¥30", 
            img: sushiImg,
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