const CAROUSELONE = document.querySelector(".carousel-1");
const CAROUSELTWO = document.querySelector(".carousel-2");
const CAROUSELTHREE = document.querySelector(".carousel-3");
const CAROUSELFOUR = document.querySelector(".carousel-4");
const CAROUSELFIVE = document.querySelector(".carousel-5");
const CAROUSELSIX = document.querySelector(".carousel-6");

const FIRSTPROJECT = document.querySelector(".first-project");
const SECONDPROJECT = document.querySelector(".second-project");
const THIRDPROJECT = document.querySelector(".third-project");
const FOURTHPROJECT = document.querySelector(".fourth-project");
const FIFTHPROJECT = document.querySelector(".fifth-project");
const SIXTHPROJECT = document.querySelector(".sixth-project");

const CLOSED = document.querySelectorAll(".closed");

function addProject1() {
  FIRSTPROJECT.classList.toggle("project-appears");
}

function addProject2() {
  SECONDPROJECT.classList.toggle("project-appears");
}

function addProject3() {
  THIRDPROJECT.classList.toggle("project-appears");
}

function addProject4() {
  FOURTHPROJECT.classList.toggle("project-appears");
}
function addProject5() {
  FIFTHPROJECT.classList.toggle("project-appears");
}
function addProject6() {
  SIXTHPROJECT.classList.toggle("project-appears");
}

function closed() {
  CLOSED.forEach((element) => element.addEventListener("click", closed));
  FIRSTPROJECT.classList.remove("project-appears");
  SECONDPROJECT.classList.remove("project-appears");
  THIRDPROJECT.classList.remove("project-appears");
  FOURTHPROJECT.classList.remove("project-appears");
  FIFTHPROJECT.classList.remove("project-appears");
  SIXTHPROJECT.classList.remove("project-appears");
}

CAROUSELONE.addEventListener("click", addProject1);
CAROUSELTWO.addEventListener("click", addProject2);
CAROUSELTHREE.addEventListener("click", addProject3);
CAROUSELFOUR.addEventListener("click", addProject4);
CAROUSELFIVE.addEventListener("click", addProject5);
CAROUSELSIX.addEventListener("click", addProject6);
closed();
