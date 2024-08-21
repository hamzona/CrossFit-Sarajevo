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

/*NAVBAR MOBILE*/

//Adding class active to nav menu button and adding class to logo
let navbarMenuButton = document.querySelector(".nav-menu-button");
let logo = document.querySelector(".navbar .logo");
let navbarMenuCont = document.querySelector(".mobile-nav-container");

let navbarMenu_active = false;
navbarMenuButton.addEventListener("click", () => {
  if (navbarMenu_active) {
    navbarMenuButton.classList.remove("active");
    logo.classList.remove("active");
    navbarMenuCont.classList.remove("active");
    document.body.classList.remove("no-scroll");
  } else {
    navbarMenuButton.classList.add("active");
    logo.classList.add("active");
    navbarMenuCont.classList.add("active");
    document.body.classList.add("no-scroll");
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Use 'auto' for instant scrolling
    });
  }

  navbarMenu_active = !navbarMenu_active;
});
