document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
  
    // Get values from the URL query parameters
    const username = urlParams.get("username");
    const email = urlParams.get("email");
    const pageRating = urlParams.get("pageRating");
  
    // Populate the corresponding elements
  document.getElementById("username").textContent = username;
  document.getElementById("email").textContent = email;
  document.getElementById("pageRating").textContent = pageRating;
  });
  
  
  function updateRatingValue(value) {
    document.getElementById("ratingValue").textContent = value;
  }
  
  function addQueryParameters(event) {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const pageRating = document.getElementById("pageRating").value;
  
    document.getElementById("usernameHidden").value = username;
    document.getElementById("emailHidden").value = email;
    document.getElementById("pageRatingHidden").value = pageRating;
  }
  
  function validateForm(event) {
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
  
    if (password !== confirmPassword) {
      event.preventDefault();
      alert("Passwords do not match. Please make sure they match.");
    }
  }
  
  function updateRatingValue(value) {
    document.getElementById("ratingValue").textContent = value;
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".main-form");
    const emailInput = document.getElementById("email");
  
    form.addEventListener("submit", function (event) {
      const enteredEmail = emailInput.value.trim();
      if (!enteredEmail.endsWith("@byui.edu")) {
        event.preventDefault(); // Prevent the form from being submitted
        alert("Please enter a valid @byui.edu email address.");
      }
    });
  });