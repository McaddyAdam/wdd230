const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const url = 'https://api.openweathermap.org/data/2.5/weather?q=Abeokuta&units=Imperial&appid=1cb0512b8cdcd2339a4a393ee2652300';

apiFetch(url);

async function apiFetch(apiURL) {
    try {
        const response = await fetch(apiURL);
        if (response.ok) {
            const data = await response.json()
            // console.log(data);
            displayResult(data)
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error)
    }
    
}

function displayResult(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
    weatherIcon.setAttribute('src', imgeSrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.innerHTML = desc.charAt(0).toUpperCase() + desc.slice(1);

}
