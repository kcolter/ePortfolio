//Author Keegan Colter

function navMenuResponsive() {
    var x = document.getElementById("directory");
    if (x.className === "directory") {
      x.className += " responsive";
    } else {
      x.className = "directory";
    }
  }