import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import AboutUs from './Components/AboutUs/AboutUs';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <Router>
    <div>
      <Header />
      <Routes>
        <Route path="/AboutUs" element={<AboutUs />}/>
        <Route path="/Contact" element={<Contact />}/>
      </Routes>
      <Footer />   
    </div>
    </Router>
  );
}

export default App;
