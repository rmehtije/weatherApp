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
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastWeather, setForecastWeather] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    getCurrentWeather()
      .then((weather) => {
        setCurrentWeather(weather);
        console.log("weather", weather);
      })
      .catch((errorMessage) => setErrorMessage(errorMessage));
    getForecastWeather()
      .then((forecast) => {
        setForecastWeather(forecast);
        console.log("forecast", forecast);
      })
      .catch((errorMessage) => setErrorMessage(errorMessage));
  }, []);

  const weatherProps = {
    currentWeather,
    forecastWeather,
    setCurrentWeather,
    setForecastWeather,
  };

  return (
    <Container>
      <Header />
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
