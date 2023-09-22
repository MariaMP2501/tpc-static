const card1 = document.querySelector(".card1");
const card2 = document.querySelector(".card2");
const description1 = card1.querySelector(".description");
const description2 = card2.querySelector(".description");
const imageToHide = document.getElementById("image-to-hide");

let isImageHidden = false; 

// Fonction pour afficher la valise <p> de la "card2"
function showCard2Description() {
    card2.style.width = "700px"; // Agrandir la "card2"
    description2.style.height = "auto"; // Afficher la valise de la "card2"
    hideImage(); // Masquer l'image
}

// Fonction pour masquer la valise <p> de la "card2"
function hideCard2Description() {
    card2.style.width = "200px"; // Réduire la "card2"
    description2.style.height = "0"; // Masquer la valise de la "card2"
}

function hideCard1Description() {
    card1.style.width = "200px"; 
    description1.style.height = "0"; 
}

function hideImage() {
    imageToHide.style.display = "none"; 
    isImageHidden = true; 
}

function showImage() {
    imageToHide.style.display = "block";
    isImageHidden = false; 
}

// Par défaut, la valise de la "card2" est masquée
hideCard2Description();

card2.addEventListener("click", () => {
    hideCard1Description();
    if (!isImageHidden) {
        hideImage(); 
    }
    showCard2Description();
});

card1.addEventListener("click", () => {
    hideCard2Description();
    showImage(); 
    card1.style.width = "700px"; 
    description1.style.height = "auto"; 
});
