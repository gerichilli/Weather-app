import axios from "axios"
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Loader from "./components/Loader";
import WeatherCardList from './components/WeatherCardList';
import { GETIP_LINK, WEATHER_API_URL, WEATHER_CURRENT_API_URL, WEATHER_API_KEY } from './config/apis';
import UseCelsius from "./hooks/UseCelsius";
import UseFetch from './hooks/UseFetch';

function App() {
  // Initialize city
  const [city, setCity] = useState(null)
  const [ready, setReady] = useState(false)

  // Get user current city 
  useEffect(() => {
    async function fetchCity() {
      try {
        const res = await axios(GETIP_LINK);
        setCity(res.data.city)
        setReady(true)
      } catch(error) {
        console.log(error);
      } 
    }

    fetchCity()
  }, [])
  
  // Weather List 
  const {response, isLoading, error} = UseFetch(`${WEATHER_API_URL}${city}${WEATHER_API_KEY}`);
  // Current Weather
  const {response: currentWeather, isLoading: isCurrentLoading, error: currentError} = UseFetch(`${WEATHER_CURRENT_API_URL}hanoi${WEATHER_API_KEY}`);

  const renderCurrentWeather = () => {
    if(currentError && ready) return null
    if(currentWeather) return (
      <div className="banner">
        <h2>{city}</h2>
        <span className="degree">{UseCelsius(currentWeather.data.main.temp)}&#176;</span>
      </div>
    )
  }

  const renderCardList = () => {
    if(error && ready) return <p className="error">{error}</p>
    if(isLoading && !response && ready) return <Loader />
    if(response) {
      console.log(response.data);
      return (
        <main>
          <WeatherCardList
          list={response.data.list}
          />
        </main>
      )
    }
  }

  return (
    <div className="App">
      <Header
      onChangeCity={setCity}
      />
      {renderCurrentWeather()}
      {renderCardList()}
    </div>
  );
}

export default App;
