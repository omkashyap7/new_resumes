const toggle = document.querySelector(".toggle-btn");
const navmenu = document.querySelector(".togglelist");

toggle.addEventListener("click", () =>{
    toggle.classList.toggle("active");
    navmenu.classList.toggle("active");
} )