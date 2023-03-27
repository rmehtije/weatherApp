import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import Container from 'react-bootstrap/Container';
import './App.scss';

function App() {
  return (
    <Container>
      <Header />
      <Body />
      <Footer />
    </Container>
  );
}

export default App;
