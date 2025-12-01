async function getCurrentWeatherByCity(city){
    const data = await fetch(`http://api.weatherapi.com/v1/current.json?key=755dff81a75a413994f62409250112&q=${city}&aqi=no`)
    const currentWeather = await data.json()
    console.log(currentWeather);
    return currentWeather
}

async function getForcastByCity(city){
    const data = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=755dff81a75a413994f62409250112&q=${city}&days=1&aqi=no&alerts=no`)
    const forecast = await data.json()
    console.log(forecast);
    return forecast
}


const locationInput = document.querySelector('.location-input');

const locationButton = document.querySelector('.location-button');
locationButton.addEventListener("click", async() => {
    const locationInputValue = locationInput.value
    const currentWeather = await getCurrentWeatherByCity(locationInputValue)
    const forecast = await getForcastByCity(locationInputValue)

    const currentWeatherIcon = "https:" + currentWeather.current.condition.icon
    const currentWeatherTemperature = currentWeather.current.temp_c
    const currentWeatherStatus = currentWeather.current.condition.text

    resetWeatherApp()

    renderCurrentWeather(currentWeatherIcon, currentWeatherTemperature, currentWeatherStatus)


    renderForecast(forecast.forecast.forecastday[0].hour)
})

function renderCurrentWeather(iconSrc, temperature, status){
    const currentWeathericonEl = document.createElement('img');
    currentWeathericonEl.setAttribute('class', "current-weather-icon")
    currentWeathericonEl.setAttribute('src', iconSrc)

    const currentWeatherTemperatureEl = document.createElement("p");
    currentWeatherTemperatureEl.className = "current-weather-temperature"
    currentWeatherTemperatureEl.innerHTML = temperature

    const currentWeatherStatusEl = document.createElement("p");
    currentWeatherStatusEl.className = "current-weather-status"
    currentWeatherStatusEl.innerHTML = status

    const currentWeather = document.querySelector('.current-weather');

    currentWeather.appendChild(currentWeathericonEl)
    currentWeather.appendChild(currentWeatherTemperatureEl)
    currentWeather.appendChild(currentWeatherStatusEl)
}

function createForcastElement(iconSrc, time, temperature){
    const forecastElement = document.createElement("div");
    forecastElement.className = "forecast-element"

    const forecastTime = document.createElement("p");
    forecastTime.className = "forecast-time"
    forecastTime.innerHTML = time.slice(11)

    const forecastIcon = document.createElement("img");
    forecastIcon.className = "forecast-icon"
    forecastIcon.setAttribute("src", "https:" + iconSrc)

    const forecastTemperature = document.createElement("p");
    forecastTemperature.className = "forecast-temperature"
    forecastTemperature.innerHTML = temperature

    forecastElement.appendChild(forecastTime)
    forecastElement.appendChild(forecastIcon)
    forecastElement.appendChild(forecastTemperature)

    return forecastElement
}


function renderForecast(forecast){
    const forecastContainer = document.querySelector('.forecast');
    forecast.forEach(forecastItem => {
        const forecastElement = createForcastElement(forecastItem.condition.icon, forecastItem.time, forecastItem.temp_c)
        forecastContainer.appendChild(forecastElement)
    });
}

function resetWeatherApp(){
    const currentWeather = document.querySelector('.current-weather');
    currentWeather.innerHTML = ""

    const forecastContainer = document.querySelector('.forecast');
    forecastContainer.innerHTML = ""
}