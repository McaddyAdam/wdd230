// getDates.js - JavaScript for dynamically updating dates

// Get the current year and update the footer's first paragraph
const currentYear = new Date().getFullYear();
const copyrightYearElement = document.querySelector('#copyrightYear');
if (copyrightYearElement) {
  copyrightYearElement.textContent = currentYear;
}

// Update the last modified date in the second paragraph
const lastModifiedElement = document.querySelector('#lastModified');
if (lastModifiedElement) {
  lastModifiedElement.textContent = document.lastModified;
}


const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});