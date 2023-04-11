//Author Keegan Colter

//researched from https://dev.to/ljcdev/easy-hamburger-menu-with-js-2do0#:~:text=Begin%20by%20adding%20a%20basic%20menu%20with%20a,and%20alternate%20which%20icon%20to%20show%20with%20Javascript.

function navMenuResponsive() {
    var x = document.getElementById("directory");
    if (x.className === "directory") {
      x.className += " responsive";
    } else {
      x.className = "directory";
    }
  }