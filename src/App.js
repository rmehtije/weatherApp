import Header from './Header';
import Weather from './Weather';
import Footer from './Footer';
import Contact from './Contact';
import Container from 'react-bootstrap/Container';
import { Routes, Route } from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<Weather />} />
        <Route path="/forecast/:listIndex" element={<Weather />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;
