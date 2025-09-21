import sushiPerson from "../assets/img/sushi-person-6194527_1920.jpg";
import sushiPerson1 from "../assets/img/sushi-person-3568350_1920.jpg";
import sushiPerson2 from "../assets/img/sushi-person-689645_1920.jpg";

const createTitle = () => {
  const aboutTitle = document.createElement("h1");
  aboutTitle.classList.add("about-title");
  aboutTitle.textContent = "About Us";

  return aboutTitle;
};

const createDesc = () => {
  const aboutDesc = document.createElement("p");
  aboutDesc.classList.add("about-desc");
  aboutDesc.textContent = "Description...";

  return aboutDesc;
};

const imageContainer = () => {
  const imageContainer = document.createElement("div");
  imageContainer.classList.add("image-container");

  const aboutImage = document.createElement("img");
  aboutImage.classList.add("about-image");
  aboutImage.id = "about-image";
  aboutImage.src = sushiPerson;

  const aboutImage1 = document.createElement("img");
  aboutImage1.classList.add("about-image");
  aboutImage1.id = "about-image1";
  aboutImage1.src = sushiPerson1;

  const aboutImage2 = document.createElement("img");
  aboutImage2.classList.add("about-image");
  aboutImage2.id = "about-image2";
  aboutImage2.src = sushiPerson2;

  imageContainer.appendChild(aboutImage);
  imageContainer.appendChild(aboutImage1);
  imageContainer.appendChild(aboutImage2);

  return imageContainer;
};

export const about = () => {
  const pageContent = document.querySelector("#content");

  const aboutContainer = document.createElement("div");
  aboutContainer.classList.add("about-container");

  const imgContainer = imageContainer();
  const aboutTitle = createTitle();
  const aboutDesc = createDesc();

  aboutContainer.appendChild(imgContainer);
  aboutContainer.appendChild(aboutTitle);
  aboutContainer.appendChild(aboutDesc);

  pageContent.appendChild(aboutContainer);
};
