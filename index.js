var drumbButtons = document.querySelectorAll(".drum");

drumbButtons.forEach(addListenerToButton);

function addListenerToButton (button) {
    button.addEventListener("click", handleClick);

}

function handleClick() {
    var drumSound = new Audio("./sounds/crash.mp3");
    drumSound.play();
}