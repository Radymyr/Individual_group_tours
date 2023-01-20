"use strict";

import "./index.scss";
import "./lang.js";
import Swiper, { Navigation, Pagination, Autoplay } from "swiper";

export const swiper = new Swiper(".swiper", {
  modules: [Navigation, Pagination, Autoplay],
  // Optional parameters
  grabCursor: true,
  autoHeight: true,
  speed: 1000,

  loop: true,

  autoplay: {
    delay: 3000,
    pauseOnMouseEnter: true,
  },

  // loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const burgerButton = document.querySelector(".burger-button");
const navMenu = document.querySelector(".nav");

burgerButton.addEventListener("click", () => {
  navMenu.classList.toggle("menu-open");
  burgerButton.classList.toggle("burger-button-open");
  console.log(burgerButton);
});

const reviews = document.querySelector(".reviews");

const blogs = document.querySelector(".blogs");

function toggle(element, selector) {
  element.addEventListener("click", (event) => {
    if (
      event.target.className === selector[0] ||
      event.target.className === selector[1]
    ) {
      event.target.classList.toggle(selector[1].split(" ")[1]);
    }
    for (let i = 0; i < 2; i++) {
      swiper[i].update();
    }
  });
}

toggle(reviews, [
  "swiper-slide__description",
  "swiper-slide__description swiper-slide__description-open",
]);

toggle(blogs, ["blogs__text", "blogs__text blog__text-open"]);
