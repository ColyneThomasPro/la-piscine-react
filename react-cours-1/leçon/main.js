// // cibler le bouton
// const button = document.querySelector("button");
// // ajouter un eventlistener (au click sur le bouton)
// button.addEventListener("click", () => {
//     // cibler le texte
//     const text = document.querySelector("p");

//     // masquer le texte
//     text.style.display = "none";
// });

const button = document.querySelector("button");

// au click sur le bouton
button.addEventListener("click", () => {
    // je cible l'élément dans le DOM qui à l'id root
    const divRoot = document.querySelector("#root");

    // creer une balise article
    const articleElement = document.createElement('article');

    //j'insere la balise article dans l'élément root
    divRoot.appendChild(articleElement);

    // creer un titre
    const titleElement = document.createElement("h1");
    titleElement.textContent = "Hello La Piscine"
    articleElement.appendChild(titleElement);

    // creer une image
    const imgElement = document.createElement("img");
    imgElement.setAttribute(
        "src",
        "..."
    )
    articleElement.appendChild(imgElement);

    // creer un texte
    const textElement = document.createElement("p";)
});