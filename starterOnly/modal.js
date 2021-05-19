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
const nom =  document.getElementById("last");
const email =  document.getElementById("email");
const naissance = document.getElementById("birthdate");
const nombreTournois = document.getElementById("quantity");
const location1 = document.getElementById("location1");
const location2 =  document.getElementById("location2");
const location3 =  document.getElementById("location3");
const location4 =  document.getElementById("location4");
const location5 =  document.getElementById("location5");
const location6 =  document.getElementById("location6");
const checkbox1 = document.getElementById("checkbox1");
const checkbox2 = document.getElementById("checkbox2");


var mailCaractere = /^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;

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



function validate () {
  
  if (prenom.value === '' || prenom.value.length< 2)
  
  {
    alert ("Remplir votre prénom avec 2 lettres minimums");  
    event.preventDefault();
  }

  if (nom.value === '' || nom.value.length < 2)
  {
    alert ("Remplir votre nom avec 2 lettres minimums");  
    event.preventDefault();
  }
  if (naissance.value ===''){
    alert("entrez une date de naissance");
    event.preventDefault();
  }
 
  if (nombreTournois.value === ''){
    alert ("Indiquez le nombre de tournois GameOn");
    event.preventDefault();
  }

  if(mailCaractere.test(document.getElementById("email").value)){
    alert(" OK");
  }
  else{
    alert ("Entrez une adresse mail correct ");  
    event.preventDefault();
  }

  if ((location1.checked)|| (location2.checked) || (location3.checked)
    ||(location4.checked) ||(location5.checked) ||(location6.checked)) {
    alert("bouton selectionné");
  }
  else{
    alert ("Selectionner un bouton "); 
    event.preventDefault();
  }

  if(checkbox1.checked){
    alert("Condition selectionné");
  }
  else{
    alert("Veuillez accepter les condtions d'utilisation");
    event.preventDefault();
  }
  
}

