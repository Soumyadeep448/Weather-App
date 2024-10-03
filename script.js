const apiKey = '4e75b6d231dfabae5efafee35fbb0958'; // Replace with your OpenWeatherMap API key

function getWeather() {
  const city = document.getElementById('city').value;
  const weatherInfo = document.getElementById('weather-info');

  if (city === '') {
    weatherInfo.innerHTML = 'Please enter a city name!';
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.cod === '404') {
        weatherInfo.innerHTML = 'City not found!';
      } else {
        const { temp } = data.main;
        const { description } = data.weather[0];
        const { name } = data;

        weatherInfo.innerHTML = `
          <h2>${name}</h2>
          <p>Temperature: ${temp} °C</p>
          <p>Weather: ${description}</p>
        `;
      }
    })
    .catch(() => {
      weatherInfo.innerHTML = 'Error fetching the weather data!';
    });
}
