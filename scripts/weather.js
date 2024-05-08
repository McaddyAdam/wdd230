// script/weather.js
// Your OpenWeatherMap API Key
const apiKey = 'YOUR_API_KEY';

// Function to fetch weather data
function fetchWeather() {
    // Location: Abeokuta, Ogun State, Nigeria
    const city = 'Abeokuta';
    const state = 'Ogun';
    const country = 'NG';

    // Create the API URL
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},${state},${country}&appid=${apiKey}`;

    // Fetch data from the API
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById('weather-info');
            const temperature = Math.round(data.main.temp - 273.15); // Convert temperature to Celsius
            weatherInfo.innerHTML = `
                <p>Location: ${data.name}, ${data.sys.country}</p>
                <p>Temperature: ${temperature}°C</p>
                <p>Weather: ${data.weather[0].description}</p>
            `;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            const weatherInfo = document.getElementById('weather-info');
            weatherInfo.innerHTML = '<p>Failed to fetch weather data.</p>';
        });
}

// Fetch weather data when the page loads
window.addEventListener('load', fetchWeather);
