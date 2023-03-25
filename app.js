const menu = document.querySelector('.menu');
const links=document.getElementById('links');


menu.addEventListener('click', open);
function open() {
  menu.classList.toggle('menu-close');
  if (links.style.display === "flex") {
    links.style.display = "none";
  } else {
    links.style.display = "flex";
  }
}
