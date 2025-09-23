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
  aboutDesc.id = "about-desc";
  aboutDesc.textContent = `At Oishii Sushi, we believe sushi is more than a dish—it’s a story told through flavor, texture, and tradition. Rooted in Japanese culinary artistry and inspired by modern tastes, our menu blends premium ingredients with thoughtful presentation.
     From delicate sashimi to bold fusion rolls, every plate is crafted to honor authenticity while inviting discovery.`;

  const aboutDesc1 = document.createElement("p");
  aboutDesc1.classList.add("about-desc");
  aboutDesc1.id = "about-desc1";
  aboutDesc1.textContent = `Each piece is a moment—crisply rolled, precisely sliced, and delicately dipped—designed to awaken the senses and evoke the spirit of omotenashi, the Japanese art of wholehearted hospitality. 
     We source only the freshest seafood and seasonal produce, ensuring that every bite reflects the harmony of nature and the precision of technique.`;

  const aboutDesc2 = document.createElement("p");
  aboutDesc2.classList.add("about-desc");
  aboutDesc2.id = "about-desc2";
  aboutDesc2.textContent = `Whether you're a seasoned sushi lover or exploring it for the first time, we welcome you to experience the balance of freshness, creativity, and care in every bite. From the first cut to the final dip, Oishii Sushi is where tradition meets innovation—on your plate.`;

  return [aboutDesc, aboutDesc1, aboutDesc2];
};

const imageContainer = () => {
  const imageContainer = document.createElement("div");
  imageContainer.classList.add("image-container");

  const rightContainer = document.createElement("div");
  rightContainer.classList.add("right-container");

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

  rightContainer.appendChild(aboutImage1);
  rightContainer.appendChild(aboutImage2);

  imageContainer.appendChild(aboutImage);
  imageContainer.appendChild(rightContainer);

  return imageContainer;
};

export const about = () => {
  const pageContent = document.querySelector("#content");

  const aboutContainer = document.createElement("div");
  aboutContainer.classList.add("about-container");

  const leftContainer = document.createElement("div");
  leftContainer.classList.add("left-container");

  const imgContainer = imageContainer();
  const aboutTitle = createTitle();
  const aboutDesc = createDesc();

  leftContainer.appendChild(aboutTitle);
  aboutDesc.forEach((desc) => leftContainer.appendChild(desc));
  aboutContainer.appendChild(leftContainer);
  aboutContainer.appendChild(imgContainer);

  pageContent.appendChild(aboutContainer);
};
