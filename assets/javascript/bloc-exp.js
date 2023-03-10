// Déplacement de la span

const STEF = document.querySelector(".bloc-experiences__left--stef");
const CANAVESE = document.querySelector(".bloc-experiences__left--canavese");
const POSTE = document.querySelector(".bloc-experiences__left--poste");
const ARMEE = document.querySelector(".bloc-experiences__left--armee");
const MOVINGSPAN = document.querySelector(".moving-span");

// Gestion du bloc de droite afficher ou cachant les expériences

const STEFEXP = document.querySelector(".bloc-experiences__right--stef");
const CANAVESEEXP = document.querySelector(".bloc-experiences__right--canavese");
const POSTEEXP = document.querySelector(".bloc-experiences__right--poste");
const ARMEEEXP = document.querySelector(".bloc-experiences__right--armee");

// Les fonctions qui agisse en réponse au click

function stef() {
    MOVINGSPAN.style.top = "0px";
    STEF.classList.add("gold");
    CANAVESE.classList.remove("gold");
    POSTE.classList.remove("gold");
    ARMEE.classList.remove("gold");
    STEFEXP.classList.remove("off");
    CANAVESEEXP.classList.add("off");
    POSTEEXP.classList.add("off");
    ARMEEEXP.classList.add("off");
}

function canavese() {
    MOVINGSPAN.style.top = "60px";
    STEF.classList.remove("gold");
    CANAVESE.classList.add("gold");
    POSTE.classList.remove("gold");
    ARMEE.classList.remove("gold");
    STEFEXP.classList.add("off");
    CANAVESEEXP.classList.remove("off");
    POSTEEXP.classList.add("off");
    ARMEEEXP.classList.add("off");

}

function poste() {
    MOVINGSPAN.style.top = "120px";
    STEF.classList.remove("gold");
    CANAVESE.classList.remove("gold");
    POSTE.classList.add("gold");
    ARMEE.classList.remove("gold");
    STEFEXP.classList.add("off");
    CANAVESEEXP.classList.add("off");
    POSTEEXP.classList.remove("off");
    ARMEEEXP.classList.add("off");

}

function armee() {
    MOVINGSPAN.style.top = "180px";
    STEF.classList.remove("gold");
    CANAVESE.classList.remove("gold");
    POSTE.classList.remove("gold");
    ARMEE.classList.add("gold");
    STEFEXP.classList.add("off");
    CANAVESEEXP.classList.add("off");
    POSTEEXP.classList.add("off");
    ARMEEEXP.classList.remove("off");

}

STEF.addEventListener("click", stef);
CANAVESE.addEventListener("click", canavese);
POSTE.addEventListener("click", poste);
ARMEE.addEventListener("click", armee);