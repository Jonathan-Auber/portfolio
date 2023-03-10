// Déplacement de la span

const STEF = document.querySelector(".bloc-experiences__left--stef");
const CANAVESE = document.querySelector(".bloc-experiences__left--canavese");
const POSTE = document.querySelector(".bloc-experiences__left--poste");
const ARMEE = document.querySelector(".bloc-experiences__left--armee");
const MOVINGSPAN = document.querySelector(".moving-span");

function stef() {
    MOVINGSPAN.style.top = "0px";
}

function canavese() {
    MOVINGSPAN.style.top = "50px";
}

function poste() {
    MOVINGSPAN.style.top = "100px";
}

function armee() {
    MOVINGSPAN.style.top = "150px";
}

STEF.addEventListener("click", stef);
CANAVESE.addEventListener("click", canavese);
POSTE.addEventListener("click", poste);
ARMEE.addEventListener("click", armee);