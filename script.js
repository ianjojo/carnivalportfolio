var scene = document.getElementById("scene");
var parallaxInstance = new Parallax(scene, {
  friction: (2.75, 2.75),
  scalar: (1000, 1000),
});

window.onscroll = function () {
  scrollRotate();
};

function scrollRotate() {
  let image = document.querySelector(".pinwheel");
  let newpin = document.querySelector(".newpin");
  let shocked = document.querySelector(".shocked");
  //   let bird = document.querySelector(".bird");
  let duck = document.querySelector(".layer1");
  let pin4 = document.querySelector(".pin4");
  image.style.transform = "rotate(" + window.pageYOffset / 2 + "deg)";
  pin4.style.transform = "rotate(" + window.pageYOffset / 2 + "deg)";
  newpin.style.transform = "rotate(-" + window.pageYOffset / 2 + "deg)";
  shocked.style.transform = "translateX(-" + window.pageYOffset / 5 + "px)";
  //   bird.style.transform = "translate(-" + window.pageYOffset + "px, -300px)";
  duck.style.transform = "translateX(-" + window.pageYOffset / 2 + "px)";

  //   bird.style.transform = "translate(" + window.pageYOffset / 2 + ", -300px)";
}

// typewriter efect

console.clear();

const typing = document.querySelectorAll(".typewriter");
const typing2 = document.querySelectorAll(".typewriter2");
const typing3 = document.querySelectorAll(".typewriter3");
const typing4 = document.querySelectorAll(".typewriter4");

function type(element) {
  function randomOpacity() {
    return (Math.floor(Math.random() * 50) + 50) / 100;
  }

  function randomEms() {
    if (Math.random() > 0.8) {
      return (Math.floor(Math.random() * 100) - 50) / 800;
    } else {
      return 0;
    }
  }

  function wrap(char) {
    return (
      '<span style="opacity:' +
      randomOpacity() +
      "; text-shadow:" +
      randomEms() +
      "em " +
      randomEms() +
      'em currentColor;">' +
      char +
      "</span>"
    );
  }

  const wrappedText = Array.from(element.textContent).map(wrap);

  element.innerHTML = wrappedText.join("");
}

typing.forEach(type);
typing2.forEach(type);
typing3.forEach(type);
typing4.forEach(type);
