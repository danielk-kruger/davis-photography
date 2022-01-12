const sideBarToggle = document.querySelector(".toggle-nav");
const sideBar = document.querySelector(".navbar-wrapper");
const galleryItem = document.querySelectorAll(".gallery-item");
const galleryOverlay = document.querySelectorAll(".gallery-item__overlay");

sideBarToggle.addEventListener("click", () => {
  sideBarToggle.classList.toggle("show-state");
  sideBar.classList.toggle("show");
});
