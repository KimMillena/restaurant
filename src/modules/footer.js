import { setActivePage } from "../index.js";

const createContact = () => {
  const contactDetails = {
    contactNo: "+81-3-4567-8899",
    email: "hello@oishisushi.jp",
    address: "4-17-3 Ginza, Chūō-ku, Tokyo 104-0061, Japan",
  };

  const contactContainer = document.createElement("ul");
  contactContainer.classList.add("contact-container");

  const contactNo = document.createElement("li");
  contactNo.classList.add("contact-no");
  contactNo.textContent = contactDetails.contactNo;

  const email = document.createElement("li");
  email.classList.add("email");
  email.textContent = contactDetails.email;

  const address = document.createElement("li");
  address.classList.add("address");
  address.textContent = contactDetails.address;

  contactContainer.appendChild(contactNo);
  contactContainer.appendChild(email);
  contactContainer.appendChild(address);

  return contactContainer;
};

const createLinks = () => {
  const footerLinks = ["home", "menu", "about"];

  const linkContainer = document.createElement("div");
  linkContainer.classList.add("link-container");

  footerLinks.forEach((link) => {
    const footerLink = document.createElement("button");
    footerLink.classList.add("footer-link");
    footerLink.id = link;
    footerLink.textContent = link.charAt(0).toUpperCase() + link.slice(1);

    footerLink.addEventListener("click", (e) => {
      setActivePage(e);
    });

    linkContainer.appendChild(footerLink);
  });

  return linkContainer;
};

const createAuthor = () => {
  const AUTHOR = "Kim M.";

  const author = document.createElement("p");
  author.classList.add("author");
  author.textContent = `Made by @${AUTHOR}`;

  return author;
};

export const footer = () => {
  const footerElement = document.createElement("footer");

  const contactContainer = createContact();
  const linkContainer = createLinks();
  const author = createAuthor();

  footerElement.appendChild(contactContainer);
  footerElement.appendChild(linkContainer);
  footerElement.appendChild(author);

  document.body.appendChild(footerElement);
};
