const cursor_delayed = document.querySelectorAll(".cursor-delayed");
const cursor_hover = document.querySelectorAll(".header__one-a");


window.addEventListener("mousemove", (e) => {
  
  let x = e.pageX;
  let y = e.pageY;
  
  cursor_delayed.forEach(el => {
    el.style.left = `${x}px`;
    el.style.top = `${y}px`;
    
    cursor_hover.forEach(link => {
      link.addEventListener("mouseenter", () => {
        el.classList.add("hover");
      })
      link.addEventListener("mouseleave", () => {
        el.classList.remove("hover");
      })
    })
    
  })
})