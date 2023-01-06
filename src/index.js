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
