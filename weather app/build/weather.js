const searchBtn = document.getElementById("search-btn");
searchBtn.addEventListener("click", showWeather);

async function showWeather() {
    const cityName = document.getElementById("searchInput").value;
    const weatherData = await getData(cityName);
    displayData(weatherData);
}

function getData(cityName) {
    const options = {
        method: "GET",
        headers: {
            "X-RapidAPI-Key": "127fd9f8d5msh0cee130bc937164p17cc3djsn849082f0f21c",
            "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
        },
    };

    return fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${cityName}`, options)
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                alert("Enter Correct City Name");
            }
        })
        .then((data) => data)
        .catch((err) => console.error(err));
}

function displayData(weatherData) {
    const cityName = document.getElementById("searchInput").value;
    const nameCity = (document.getElementById("city-name").innerText = `City:${cityName}`);
    const temp = (document.getElementById("temp").innerText = `Temp:${weatherData.temp}°C`);
    const minTemp = (document.getElementById("min-temp").innerText = `Min Temp:${weatherData.min_temp}°C`);
    const maxTemp = (document.getElementById("max-temp").innerText = `Max Temp:${weatherData.max_temp}°C`);
}
