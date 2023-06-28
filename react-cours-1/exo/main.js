// cibler le bouton en html
const button = document.querySelector("button");

 // je créer une fonction générique pour créer un élément "createElementNode" à laquelle j'attribut différents paramètres : ici son type, et en optionnel son nom de classe, du texte et une source d'image
const  createElementNode = (tagType, className = "", text = "", srcImg = "") => {
    const nodeElement = document.createElement(tagType)
    nodeElement.setAttribute("class", className)
    nodeElement.setAttribute("src", srcImg)

    nodeElement.textContent = text

    // je souhaite que ma fonction me renvoit son résultat / réponde à ma question; je suis obligée de faire un return avec comme unique paramètre la réponse que j'attend (ici les nodeElement)
    return(nodeElement)
};


// au clique sur le bouton
button.addEventListener("click", () => {
    // creer une balise article
    const articleElement = document.createElement("article");

    // je cible l'element root dans l'html
    divRoot = document.querySelector("#root");

    // je l'insere dans la div root
    divRoot.appendChild(articleElement);

    // je créer un élément titre
    const titleElement = createElementNode("h2", "title-bis", "belle image");
    articleElement.appendChild(titleElement);

    //je créer un élément image
    const imgElement = createElementNode("img",
     "", 
     "", 
     "https://images.pexels.com/photos/17299063/pexels-photo-17299063/free-photo-of-bois-paysage-campagne-colline.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
    articleElement.appendChild(imgElement);
    imgElement.style.width = "300px";

    //je créer un élément paragraphe
    const textElement = createElementNode("p", "", "je suis une belle image" );
    articleElement.appendChild(textElement);
});
