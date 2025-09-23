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
  const linkContainer = document.createElement("div");
  linkContainer.classList.add("link-container");

  const footerLink = document.createElement("button");
  footerLink.classList.add("footer-link");
  footerLink.id = "footer-link1";
  footerLink.textContent = "Home";

  const footerLink1 = document.createElement("button");
  footerLink1.classList.add("footer-link");
  footerLink1.id = "footer-link1";
  footerLink1.textContent = "Menu";

  const footerLink2 = document.createElement("button");
  footerLink2.classList.add("footer-link");
  footerLink2.id = "footer-link1";
  footerLink2.textContent = "About";

  linkContainer.appendChild(footerLink);
  linkContainer.appendChild(footerLink1);
  linkContainer.appendChild(footerLink2);

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
