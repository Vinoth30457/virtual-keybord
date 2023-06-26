"use strict";
const outputEl = document.getElementById("output");
const inputEl = document.querySelectorAll(".input");
const capBtn = document.getElementById("cap");
const keyBtn = document.getElementById("btn-key");
const doneBtn = document.getElementById("done");
const keyContainer = document.getElementById("key-board-container");

const display = (letter) => {
  outputEl.value += letter;
};
let active = 0;
const activeFn = () => {
  active = active == 0 ? 1 : 0;
  console.log(active);
};
capBtn.addEventListener("click", () => {
  if (active == 0) {
    inputEl.forEach((letter) => (letter.value = letter.value.toUpperCase()));
  } else {
    inputEl.forEach((letter) => (letter.value = letter.value.toLowerCase()));
  }
});

let del = () => {
  outputEl.value = outputEl.value.slice(0, -1);
};
keyBtn.addEventListener("click", () => {
  keyContainer.classList.add("open");
  keyContainer.classList.remove("close");
});
doneBtn.addEventListener("click", () => {
  keyContainer.classList.add("close");
  keyContainer.classList.remove("open");
});
