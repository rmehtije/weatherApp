import { useState, useEffect } from 'react';
import Header from './Header';
import Weather from './Weather';
import Footer from './Footer';
import Contact from './Contact';
import { getCurrentWeather, getForecastWeather } from "./services/apiService";
import ErrorModal from "./ErrorModal";
import Container from 'react-bootstrap/Container';
import { Routes, Route } from 'react-router-dom';
import './App.scss';

function App() {
  console.log('App');
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastWeather, setForecastWeather] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {

    (async () => {
  
      try {
        const weather = await getCurrentWeather();
        const forecast = await getForecastWeather();

        setCurrentWeather(weather);
        setForecastWeather(forecast);

      } catch (errorMessage) {
        setErrorMessage(errorMessage);
      }

    })();

    console.log('Fetch Weather');
  }, []);

  const weatherProps = {
    currentWeather,
    forecastWeather,
    setCurrentWeather,
    setForecastWeather,
  };

  return (
    <Container>
      <Header {...forecastWeather} />
      <Routes>
        <Route path="/" element={<Weather {...weatherProps} />} />
        <Route path="/forecast/:listIndex" element={<Weather {...weatherProps} />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <ErrorModal
        handleClose={() => setErrorMessage(null)}
        message={errorMessage}
      />
    </Container>
  );
}

export default App;
