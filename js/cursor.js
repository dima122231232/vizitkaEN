var cursor = document.querySelector('.cursor');
var cursorDelayed = document.querySelector('.cursor-delayed');
var cursor_hover = document.querySelectorAll(".header__one-a,.header__two-a");
var cursor_hover2 = document.querySelectorAll(".block__two-p,.block__two-h1,.vikla-color,.vikla-text");
var cursor_hover3 = document.querySelectorAll(".repost-a,.aaa,.my_works-last");
var cursor_hover4 = document.querySelectorAll(".psts-repost-a");
// var cursor_hover5 = document.querySelectorAll(".AAAAAA");
var cursor_hover6 = document.querySelectorAll(".vibor-left,.vibor-right");



document.addEventListener('mousemove', function(e) {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';

    setTimeout(function() {
        cursorDelayed.style.left = e.clientX + 'px';
        cursorDelayed.style.top = e.clientY + 'px';
    }, 100);
});

cursor_hover.forEach(link => {link.addEventListener("mouseenter", () => {cursorDelayed.classList.add("hover");});link.addEventListener("mouseleave", () => {cursorDelayed.classList.remove("hover");});});
cursor_hover2.forEach(link => {link.addEventListener("mouseenter", () => {cursorDelayed.classList.add("hover3");});link.addEventListener("mouseleave", () => {cursorDelayed.classList.remove("hover3");});});
cursor_hover3.forEach(link => {link.addEventListener("mouseenter", () => {cursorDelayed.classList.add("hover2");});link.addEventListener("mouseleave", () => {cursorDelayed.classList.remove("hover2");});});
cursor_hover4.forEach(link => {link.addEventListener("mouseenter", () => {cursorDelayed.classList.add("hover4");});link.addEventListener("mouseleave", () => {cursorDelayed.classList.remove("hover4");});});
// cursor_hover5.forEach(link => {link.addEventListener("mouseenter", () => {cursorDelayed.classList.add("hover5");});link.addEventListener("mouseleave", () => {cursorDelayed.classList.remove("hover5");});});
cursor_hover6.forEach(link => {link.addEventListener("mouseenter", () => {cursorDelayed.classList.add("hover6");});link.addEventListener("mouseleave", () => {cursorDelayed.classList.remove("hover6");});});
