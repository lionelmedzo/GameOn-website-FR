function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}




// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

const closeFormulaire = document.querySelectorAll(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

//fermer l'evenement formulaire
closeFormulaire.forEach((X) => X.addEventListener("click",fermerModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//fonction pour fermer le formulaire
function fermerModal(){
  modalbg.style.display = "none";
}


