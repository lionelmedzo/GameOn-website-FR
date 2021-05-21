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


// Liaison des labels
const prenom = document.getElementById("first");
const prenom_m = document.getElementById("prenom_erreur");
const nom =  document.getElementById("last");
const nom_m =document.getElementById("nom_erreur");
const email =  document.getElementById("email");
const email_m = document.getElementById("email_erreur");
const naissance = document.getElementById("birthdate");
const naissance_m = document.getElementById("birthdate_erreur");
const nombreTournois = document.getElementById("quantity");
const nombreTournois_m = document.getElementById("quantity_erreur");
const location1 = document.getElementById("location1");
const location2 =  document.getElementById("location2");
const location3 =  document.getElementById("location3");
const location4 =  document.getElementById("location4");
const location5 =  document.getElementById("location5");
const location6 =  document.getElementById("location6");
const location_m = document.getElementById("location_manquant");
const checkbox1 = document.getElementById("checkbox1");
const checkbox2 = document.getElementById("checkbox2");
const condition_m = document.getElementById("condition_erreur");
;




var mailCaractere = /^([a-z0-9_\.-]+\@[\da-z\.-]+\.[a-z\.]{2,6})$/;

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

//fermer l'evenement formulaire
closeFormulaire.forEach((X) => X.addEventListener("click",fermerModal));


// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

function fermerModal(){
  modalbg.style.display = "none";
}




function validate () {

  if (prenom.value === '' || prenom.value.length< 2)

  {
    prenom_m.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
    prenom_m.style.fontSize = "14px";
    event.preventDefault();
  }
  else{
    prenom_m.textContent = "";
  }
  

  if (nom.value === '' || nom.value.length < 2)
  {
    nom_m.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du nom."; 
    nom_m.style.fontSize = "14px";
    event.preventDefault();
  }else{
    nom_m.textContent = "";
  }

  if (naissance.value ===''){
    naissance_m.textContent= "Veuillez entrez votre date de naissance";
    naissance_m.style.fontSize = "14px";
    event.preventDefault();
  }
  else{
    naissance_m.textContent = "";
  }

  if (nombreTournois.value === ''){
    nombreTournois_m.textContent = "Veuillez entrer le nombre de tournois participé";
    nombreTournois_m.style.fontSize = "14px";
    event.preventDefault();
  }
  else{
    nombreTournois_m.textContent = "";
  }

  if(mailCaractere.test(email.value)){
    email_m.textContent = "";
  }
  else{
    email_m.textContent =" Veuillez entrer un email correct";
    email_m.style.fontSize = "14px";
    event.preventDefault();
  }

  if ((location1.checked)|| (location2.checked) || (location3.checked)
    ||(location4.checked) ||(location5.checked) ||(location6.checked)) {
    location_m.textContent = "";
  }
  else{
    location_m.textContent = "Vous devez choisir une option";
    location_m.style.fontSize = "14px"; 
    event.preventDefault();
  }

  if(checkbox1.checked){
    condition_m = "";
  }
  else{
    condition_m.textContent ="Vous devez vérifier que vous acceptez les termes et conditions";
    condition_m.style.fontSize = "14px";
    event.preventDefault();
  }

}