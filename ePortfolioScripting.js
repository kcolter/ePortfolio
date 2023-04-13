//Author Keegan Colter

//elements
const menu = document.getElementById("directory");
const menuItems = document.getElementsByClassName("menuItem");
const hamburgerButton = document.getElementById("hamburger");

//elements for the close and open icons, will be added after functionality complete
const closeIcon = document.getElementById('closeIcon');
const menuIcon = document.getElementById('menuIcon');

//function for toggling the hamburger menu
function toggleMenu(){
    if (menu.classList.contains("showMenu")) {
        menu.classList.remove("showMenu");
        closeIcon.style.display = "none";
        menuIcon.style.display = "block";
      } else {
        menu.classList.add("showMenu");
        closeIcon.style.display = "block";
        menuIcon.style.display = "none";
      }
}

function OnLoad(){

}

hamburgerButton.addEventListener('click', toggleMenu);