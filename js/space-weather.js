const letsgo_sensor = document.querySelector(".space-check__center-letsgo");

const API_KEY = "f717fe1f17644869678ff55c16a3e9a0";

function location_get(){
    navigator.geolocation.getCurrentPosition(weather_get, weather_error);
}

function weather_get(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`;
    fetch(url).then(response => response.json()).then(data => {
        const weather_city = document.querySelector(".weather-data span:first-child");
        const weather_info = document.querySelector(".weather-data span:nth-child(2)");
        const weather_wind = document.querySelector(".weather-data span:last-child");

        //console.dir(data);

        weather_city.innerText = `City : ${data.name}`;
        weather_info.innerText = `Info : ${data.weather[0].description} / ${data.main.temp} C`;
        weather_wind.innerText = `Wind : ${data.wind.deg} degrees / ${data.wind.speed} m/s`;
    });
}

function weather_error(){
    alert("Oops.. weather error!");
}

letsgo_sensor.addEventListener("click", location_get);