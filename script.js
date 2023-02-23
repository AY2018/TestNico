let red = document.getElementById('red');
let blue = document.getElementById('blue');
let green = document.getElementById('green');

function addClassRed() {
  red.classList.add("appear");
  red.classList.remove("disappear");
  blue.classList.add("disappear");
  green.classList.add("disappear");
}

function addClassBlue() {
  blue.classList.add("appear");
  blue.classList.remove("disappear");
  red.classList.add("disappear");
  green.classList.add("disappear");
}

function addClassGreen() {
  green.classList.add("appear");
  green.classList.remove("disappear");
  blue.classList.add("disappear");
  red.classList.add("disappear");
}


