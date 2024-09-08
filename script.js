async function fetchWeather(locationName) {
    const response =  await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${locationName}?key=5TJ24EHEMB5B7V7VEBJH8H3WZ`, {mode: 'cors'});
    const weatherData = await response.json()
    console.log(processWeatherInfo(weatherData))
}

fetchWeather('lagos');

function processWeatherInfo(data) {
   return {
      address: data.address, 
      currentConditions: data.currentConditions,
      days: data.days,
      resolvedAddress: data.resolvedAddress
   }
}
