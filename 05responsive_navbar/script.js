let openBtn = document.querySelector(".fa-bars");
let closeBtn = document.querySelector(".fa-xmark");
let menu = document.querySelector("ul")

openBtn.addEventListener("click", () => {
  menu.style.display = "block";
  openBtn.style.display = "none";
  closeBtn.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  menu.style.display = "none";
  openBtn.style.display = "block";
  closeBtn.style.display = "none";
});