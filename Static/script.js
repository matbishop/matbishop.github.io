const body = document.querySelector("body");
const main = document.querySelector("main");
const footer = document.querySelector("footer");
const hamburger = document.getElementById("hamburger");

const navMenuClick = function(event) {
    if (hamburger.checked) {
        event.preventDefault();
        hamburger.click();
    }
};
main.addEventListener("click", navMenuClick);
footer.addEventListener("click", navMenuClick);

function navMenu() {
    if (hamburger.checked) {
        body.style.maxHeight = "100px";
        body.style.overflow = "hidden";
        body.style.position = "fixed";
    } else {
        body.style.maxHeight = null;
        body.style.overflow = "auto";
        body.style.position = "static"
    }
}
hamburger.addEventListener("change", navMenu);