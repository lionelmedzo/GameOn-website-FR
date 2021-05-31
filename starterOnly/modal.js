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

const validation = document.getElementById("btn-envoie");
const validation_ok = document.getElementById("validation-ok");


//regex
var mailCaractere = /^([a-z0-9_\.-]+\@[\da-z\.-]+\.[a-z\.]{2,6})$/;
var prenomValidation = /^[a-zA-Zéèîï][a-zéèêàçîï]+([-'\s][a-zA-Zéèîï][a-zéèêàçîï]+)?/;
var nomValidation = /^[a-zA-Zéèîï][a-zéèêàçîï]+([-'\s][a-zA-Zéèîï][a-zéèêàçîï]+)?/;
var tournoisValidation =/^[0-9][0-9]?$|^999$/;
var naissanceValidation = /^([0-9]{2})|([0-9]{2})|([0-9]{4})$/;

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

//fermer l'evenement formulaire
closeFormulaire.forEach((X) => X.addEventListener("click",fermerModal));

// event de type click
validation.addEventListener("click",validate); 

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

function fermerModal(){  // fonction qui ferme le formulaire.
  validation_ok.innerHTML="";
  modalbg.style.display = "none";
}




function validate () {
  
  if (prenom.value.trim() === '' || prenom.value.length <2)  // condition  si le prenom est vide ou inf a 2 caractères

  {
    prenom_m.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
    prenom_m.style.fontSize = "14px";
    prenom_m.style.color="red";
    
  }else if(prenomValidation.test(prenom.value) == false){  // Dans le cas ou on rentre des chiffres ou caractère spéciaux
    prenom_m.innerHTML  = "Veuillez entrez un prénom correct ";
    prenom_m.style.fontSize = "14px";
    prenom_m.style.color="red";
    
  }
  else{
    prenom_m.innerHTML  = "";
  }
  
  // condition  si le nom est vide ou inf a 2 caractères
  if (nom.value.trim() === '' || nom.value.length <2) 
  {
    nom_m.innerHTML  = "Veuillez entrer 2 caractères ou plus pour le champ du nom."; 
    nom_m.style.fontSize = "14px";
    nom_m.style.color="red";
    
  }else if (nomValidation.test(nom.value) == false){
    nom_m.innerHTML  = "Veuillez entrez un nom correct";
    nom_m.style.fontSize = "14px";
    nom_m.style.color="red";
    
  }else{
    nom_m.innerHTML  = "";
  }

  //Si vide ou caractère autre que des chiffres/nombres 
  if (naissance.value ==='' || (naissanceValidation.test(naissance.value) == false)){
    naissance_m.innerHTML = "Veuillez entrez votre date de naissance";
    naissance_m.style.fontSize = "14px";
    naissance_m.style.color="red";
    
  }
  else{
    naissance_m.innerHTML = "";
  }
  // condition si vide ou si valeur different d'un nombres
  if (nombreTournois.value === '' || tournoisValidation.test(nombreTournois.value) == false){
    nombreTournois_m.innerHTML  = "Veuillez entrer le nombre de tournois participé";
    nombreTournois_m.style.fontSize = "14px";
    nombreTournois_m.style.color="red";
    
  }else{
    nombreTournois_m.innerHTML  = "";
  }
  // verification de l'adresse mail grace au regex mailCaractere
  if(mailCaractere.test(email.value)== true){
    email_m.innerHTML  = "";
  }
  else{
    email_m.innerHTML  =" Veuillez entrer un email correct";
    email_m.style.fontSize = "14px";
    email_m.style.color="red";
    
  }
  // verification si une des box est coché.
  if ((location1.checked)|| (location2.checked) || (location3.checked)
    ||(location4.checked) ||(location5.checked) ||(location6.checked)) {
    location_m.innerHTML  = "";
  }
  else{
    location_m.innerHTML  = "Vous devez choisir une option";
    location_m.style.fontSize = "14px";
    location_m.style.color="red"; 
    
  }

  if(checkbox1.checked){
    condition_m.innerHTML  = "";
  }
  else{
    condition_m.innerHTML  ="Vous devez vérifier que vous acceptez les termes et conditions";
    condition_m.style.fontSize = "14px";
    condition_m.style.color="red"; 
    
  }
  //condition final si tout est OK alors on envoie un message au client.
  if (prenom.value && nom.value && naissance.value &&
    nombreTournois.value && email.value && ((location1.checked)|| 
    (location2.checked) || (location3.checked)||(location4.checked) ||
    (location5.checked) ||(location6.checked)) && checkbox1.checked === true){
      validation_ok.innerHTML= "Merci ! Votre réservation a bien été reçue.";
      validation_ok.style.fontSize = "16px";
      
  }
}
