export const footer = () => {
    const footerElement = document.createElement("footer");

    const author = document.createElement("a");
    author.textContent = "Kim M.";

    footerElement.appendChild(author);

    document.body.appendChild(footerElement);
};