const navUnderrs = document.querySelectorAll(".nav-underrs li");
const menuBttn = document.querySelector(".mobile-menu-bttn");
const mobileMenu = document.querySelector(".mobile-menu");
const overflow = document.querySelector(".overflow");
const mobileUnderrs = document.querySelectorAll(".mobile-underrs li");

menuBttn.addEventListener("click", () => {
  const icon = document.querySelector(".mobile-menu-bttn img");
  menuBttn.classList.toggle("active-bttn");
  mobileMenu.classList.toggle("active-menu");
  overflow.classList.toggle("active-menu");
  if(menuBttn.classList.contains("active-bttn")) {
    icon.src = "images/icon-close-menu.svg"
  } else {
    icon.src = "images/icon-menu.svg"
  }
})

navUnderrs.forEach((link) => {
  const unnDerr = link.querySelector(".unn-der");
  link.addEventListener("click", () => {
    link.classList.toggle("active");
    unnDerr.classList.toggle("active-menu");
  })
})
mobileUnderrs.forEach((link) => {
  const unnDerr = link.querySelector(".mobile-unn-der");
  link.addEventListener("click", () => {
    link.classList.toggle("active");
    unnDerr.classList.toggle("active-menu");
  })
})