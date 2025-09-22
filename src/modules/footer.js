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

export const footer = () => {
  const footerElement = document.createElement("footer");

  const author = document.createElement("a");
  author.textContent = "Made by Kim M.";

  const linkContainer = createLinks();

  footerElement.appendChild(linkContainer);
  footerElement.appendChild(author);

  document.body.appendChild(footerElement);
};
