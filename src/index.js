"use strict";

import "./index.scss";

let offSet = 0;

const sliderLine = document.querySelector(".slider__line");
let sliderContainer = document.querySelector(".slider__container");

document.querySelector(".slider__btn-right").addEventListener("click", () => {
  offSet += 1120;

  sliderLine.style.left = -offSet + "px";
  let div = document.createElement("div");
  console.log(sliderLine.style.left);
});

document.querySelector(".slider__btn-left").addEventListener("click", () => {
  offSet -= 1120;

  sliderLine.style.left = -offSet + "px";
  console.log(sliderLine.style.left);
});
