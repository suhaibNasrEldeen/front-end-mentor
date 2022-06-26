let show = document.getElementsByClassName("menu");
let icon = document.getElementsByClassName("icon-power");
let see = document.getElementsByClassName("first-child")[0];
let myDiv = document.getElementsByClassName("venom")[0];
let close = document.querySelector(".venom .close");
let end = document.getElementsByClassName("card")[7];
let first = document.querySelectorAll("form .card label")[1];
let second = document.querySelectorAll("form .card label")[2];
let third = document.querySelectorAll("form .card label")[3];
let fo = document.querySelectorAll("form label.tow > div .text")[0];
let fo1 = document.querySelectorAll("form label.tow > div .text")[1];
let fo2 = document.querySelectorAll("form label.tow > div .text")[2];
let bt = document.querySelectorAll(".end .card button ")[0];
let btn = document.querySelectorAll(".end .card button ")[2];
let button = document.querySelectorAll(".end .card button ")[1];
let up = document.getElementsByClassName("icon-arrow-up")[0];

icon[0].onclick = function () {
  show[0].classList.toggle("power");
};
see.onclick = function () {
  myDiv.classList.toggle("show");
};
close.onclick = function () {
  myDiv.classList.toggle("show");
};
first.onmouseenter = function () {
  first.classList.add("see");
  fo.focus();
};
first.onmouseleave = function () {
  first.classList.remove("see");
};
second.onmouseenter = function () {
  second.classList.add("see");
  fo1.focus();
};
second.onmouseleave = function () {
  second.classList.remove("see");
};
third.onmouseenter = function () {
  third.classList.add("see");
  fo2.focus();
};
third.onmouseleave = function () {
  third.classList.remove("see");
};
bt.onclick = function () {
  see.click();
};
btn.onclick = function () {
  see.click();
};
button.onclick = function () {
  see.click();
};
up.onclick = function () {
  window.scrollTo(0, 0);
};
window.onscroll = function () {
  if (this.scrollY >= 200) {
    up.classList.add("top");
  } else {
    up.classList.remove("top");
  }
};
