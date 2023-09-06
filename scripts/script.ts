`use strict`;

const $ = (id) => document.getElementById(id);
const $$ = (query) => document.querySelector(query);
const $$$ = (jquery) => document.querySelectorAll(jquery);

const navToggle = $$(".nav-toggle");
const navMenu = $$("menu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav--visible");
});
