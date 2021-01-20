var numberOfDrumButtons = document.querySelectorAll(".drum").length;
console.log(numberOfDrumButtons);

// var allButton = document.querySelectorAll(".drum")
// allButton[1].classList.add(".pressed");

for (var n = 0; n < numberOfDrumButtons; n++) {
  // console.log(n);
  document.querySelectorAll(".drum")[n].addEventListener("click", function() {
    //  var buttonInnerHTML = this.innerHTML;

    PlaySound(this.innerHTML);
    buttonAnimation(this.innerHTML);
  })
}

document.addEventListener("keydown", function(event) {
  //var tastoPremuto = event.key;

  PlaySound(event.key);
  buttonAnimation(event.key);
})



function PlaySound(letter) {

  switch (letter) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    default:
      console.log(letter);
  }
};

function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function() {activeButton.classList.remove("pressed");}, 100)
}
