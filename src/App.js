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

// Komponenty v react nazyvajutsa vsegda s bol'shoj bukvy, poskol'ku togda ih proshe otlichit' ot html.
// komponenty vsgda vozvrashajut tol'ko odin zaglavnyj element.

// JSX - eto novyj sinteksis ot reacta dlja bolee udobnogo pisanija js s html
function App() {

  // useState - eto sostojanije komponenta, prostymi slovami eto peremennaja kotoraja menjajetsa. 
  // useState - react hook, a vse hooki mogut vozdejstovat' na otrisovku komponenta. 
  // useState - vozvrashajet massive iz dvuh elementov. 
  // Pervyj element - iznachal'noe sostojanije kotoroje my peredali v useState funkciju i eto mozhet bqt' ljuboj tip dannyh.
  // Vtoroj element - eto funkcqja kotoraja menjajet pervyj element.
  // Pri zapuske izmenenija sostojanija nash komponent zanogo zapuskajetsa/otrisovajetsa s novqm znachenijem sostojanija.

  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastWeather, setForecastWeather] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  // useEffect - eto react hook kotoryj mozhet kontrolivat' otrisovku nashego komponenta.
  // useEffect - zapuskaet funkciju kotoruju my jemu peredali posle togo kak ves' komponenta zakonchil svoju otrisovku.
  // Vse izmeninja sostojanija useEffect zapominajet, poka ne zakon4itsa jego dejstvija i posle etogo, skol'ko by izmenenij sostojanij 
  // nebqloby otrisovka budet tol'ko odna. 
  // My mozhem kontrolirovat' useEffect zavisimostjami. eto vtoroj argument peredovajemyj useEffectu in dolzhen byt' massivom.
  // Jesli peredadim pustoj massiv to useEffect zapustitsa tol'ko odin raz pri pervoj otrisovki/ pri mounte.
  // Pri peredachi peremennyh v zavisimosti to useEffect slidit za nimi i jesli ktoto iz nih izmenitsa to useEffect zanogo zapustitsa.
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
        <Route path="/weatherApp" element={<Weather {...weatherProps} />} />
        <Route path="/weatherApp/forecast/:listIndex" element={<Weather {...weatherProps} />} />
        <Route path="/weatherApp/contact" element={<Contact />} />
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
