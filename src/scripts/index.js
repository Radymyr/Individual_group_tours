'use strict';

import '../styles/index.scss';
import './lang.js';

import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';
export let swiper;

document.addEventListener('DOMContentLoaded', () => {
  swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination, Autoplay],
    grabCursor: true,
    autoHeight: true,
    speed: 1000,

    loop: true,
    autoplay: {
      delay: 5000,
      pauseOnMouseEnter: true,
    },

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  const burgerButton = document.querySelector('.burger-button');
  const navMenu = document.querySelector('.nav');

  burgerButton.addEventListener('click', () => {
    navMenu.classList.toggle('menu-open');
    burgerButton.classList.toggle('burger-button-open');
  });

  const blogs = document.querySelector('.blogs');

  function toggle(element, selectors) {
    element.addEventListener('click', (event) => {
      if (
        event.target.className === selectors[0] ||
        event.target.className === selectors[1]
      ) {
        event.target.classList.toggle(selectors[1].split(' ')[1]);
      }
      swiper.update();
    });
  }

  toggle(blogs, ['blogs__text', 'blogs__text blog__text-open']);
  console.log(swiper);
});
