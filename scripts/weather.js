// weather.js

// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const weatherDesc = document.querySelector('#weather-desc');

// Replace 'your-api-key-here' with your actual OpenWeatherMap API key
const apiKey = 'c830a56a972226605b1f819a0388ed19';
const url = `https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=imperial&appid=${apiKey}`;

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // testing only
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

function capitalizeWords(str) {
  return str.replace(/\b\w/g, char => char.toUpperCase());
}

function displayResults(data) {
  // Format temperature to show zero decimal points
  currentTemp.innerHTML = `${Math.round(data.main.temp)}&deg;F`;
  
  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', capitalizeWords(data.weather[0].description));
  
  // Display all weather events
  let descriptions = data.weather.map(event => capitalizeWords(event.description)).join(', ');
  weatherDesc.textContent = `${descriptions}`;
}

apiFetch();
