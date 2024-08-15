let list = document.querySelector(".slider .list");
let items = document.querySelectorAll(".slider .list .item");
let prev = document.getElementById("prev");
let next = document.getElementById("next");
let dots = document.querySelectorAll(".dots li");

let active = 0;

next.onclick = function () {
  active += 1;
  if (active >= items.length) {
    active = 0; // Wrap around to the first item if the end is reached
  }
  reloadSlider();
};

prev.onclick = function () {
  active -= 1;
  if (active < 0) {
    active = items.length - 1; // Wrap around to the last item if the start is reached
  }
  reloadSlider();
};

function reloadSlider() {
  list.style.transition = "transform 0.5s ease"; // Add transition for smooth animation
  list.style.transform = `translateX(-${items[active].offsetLeft}px)`;
  let lastActiveDot = document.querySelector(".dots .active");
  lastActiveDot.classList.remove("active");
  dots[active].classList.add("active");
}

dots.forEach((dot, key) => {
  dot.addEventListener("click", () => {
    active = key;
    reloadSlider();
  });
});

/*PRELOAD IMAGES*/
document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".slider .list img");
  let imagesLoaded = 0;
  const totalImages = images.length;

  images.forEach((img) => {
    img.addEventListener("load", () => {
      imagesLoaded += 1;
      if (imagesLoaded === totalImages) {
        // Initialize slider after all images are loaded
        reloadSlider();
      }
    });
    img.src = img.getAttribute("src"); // Trigger image load
  });
});

/*NAVBAR*/

// const navBar = document.querySelector(".navbar");
// const navBarLogo = document.querySelector(".logo");

// document.addEventListener("scroll", () => {
//   const height = window.innerHeight;
//   const scroll = window.scrollY;
//   if (scroll > height / 4) {
//     console.log(navBar);
//     navBar.classList.add("active-nav");
//   } else {
//     navBar.classList.remove("active-nav");
//   }
// });
