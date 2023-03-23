const CAROUSELONE = document.querySelector('.carousel-1');
const CAROUSELTWO = document.querySelector('.carousel-2');
const CAROUSELTHREE = document.querySelector('.carousel-3');
const FIRSTPROJECT = document.querySelector('.first-project');
const SECONDPROJECT = document.querySelector('.second-project');
const THIRDPROJECT = document.querySelector('.third-project');
const CLOSED = document.querySelectorAll('.closed');

function addProject1() {
    FIRSTPROJECT.classList.toggle("project-appears")
}

function addProject2() {
    SECONDPROJECT.classList.toggle("project-appears")
}

function addProject3() {
    THIRDPROJECT.classList.toggle("project-appears")
}

function closed() {
    CLOSED.forEach(element => element.addEventListener("click", closed))
    FIRSTPROJECT.classList.remove("project-appears");
    SECONDPROJECT.classList.remove("project-appears");
    THIRDPROJECT.classList.remove("project-appears");
}


CAROUSELONE.addEventListener("click", addProject1);
CAROUSELTWO.addEventListener("click", addProject2);
CAROUSELTHREE.addEventListener("click", addProject3);
closed();
