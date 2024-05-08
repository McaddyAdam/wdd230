  // JavaScript to toggle visibility of main menu items when hamburger menu is clicked
  document.getElementById("menu").addEventListener("click", function() {
    var navMenu = document.querySelector("nav ul.navigation");
    navMenu.style.display = (navMenu.style.display === "block") ? "none" : "block";
  });