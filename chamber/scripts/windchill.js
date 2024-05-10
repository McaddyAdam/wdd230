/*  Weather Code with API to use starting 3/9/2022  */

/*
Idaho (Inland Valley) Area  Weather Info for API

{
    "name": "Idaho",
    "state": "ID",
    "country": "US",
    "coord": {
        "lon": -116.203453,
        "lat": 43.613499
    }
*/

function chills(cTemp, kmSpeed) {
    let fTemp = cTemp * (9 / 5) + 32;

    let mSpeed = kmSpeed * 0.621371;

    if (fTemp <= 50 && mSpeed > 3) {
        let fChill =
            35.74 +
            0.6215 * fTemp -
            35.75 * Math.pow(mSpeed, 0.16) +
            0.4275 * fTemp * Math.pow(mSpeed, 0.16);
        let chill = (fChill - 32) * (5 / 9);

        document.querySelector(
            "#chill-output"
        ).textContent = `Wind Chill: ${chill.toFixed(1)}°C`;
    } else {
        document.querySelector("#chill-output").textContent = `Wind Chill: N/A`;
    }
}

const apiURL =
    "https://api.openweathermap.org/data/2.5/weather?q=Ibadan&units=metric&appid=e17fa37fe06a0aca2b6906caacc31315";

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        document.querySelector("#temp").textContent = jsObject.main.temp;
        document.querySelector("#speed").textContent = jsObject.wind.speed;

        const iconsrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
        const desc = jsObject.weather[0].description;

        document.querySelector("#icon").setAttribute("src", iconsrc);
        document.querySelector("#icon").setAttribute("alt", desc);
        document.querySelector("#icon-desc").textContent = desc;

        chills(jsObject.main.temp, jsObject.wind.speed);
    });