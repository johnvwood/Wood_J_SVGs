//IIFE

(() => {

console.log("some message from java")

let theButton = document.querySelector("#myButton"),
    theHeading = document.querySelector('h2'),
    svgImage = document.querySelector("#svgGraphic");

function changeText() {
  theHeading.textContent = "Bye";
}

//aasdasdasdasasdasdasdad
function logSVG() {
  console.log(this.id);
}

theButton.addEventListener("click", changeText);
svgImage.addEventListener("mouseover", logSVG);




})();
