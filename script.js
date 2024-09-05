async function fetchWeather(params) {
    const response =  await fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/london?key=5TJ24EHEMB5B7V7VEBJH8H3WZ', {mode: 'cors'});
    const weatherData = await response.json()
    console.log(weatherData);
}

fetchWeather()