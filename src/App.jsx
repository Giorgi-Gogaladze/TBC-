import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import AboutUs from './Components/AboutUs/AboutUs';
import Contact from './Components/Contact/Contact';
import Blog from './Components/Blog/Blog';
import Profile from './Components/Profile/Profile';
import PageNotFound from './Components/PageNotFound/PageNotFound';

function App() {
  return (
    <Router>
    <div>
      <Header />
      <Routes>
        <Route path="/AboutUs" element={<AboutUs />}/>
        <Route path="/Contact" element={<Contact />}/>
        <Route path="/Profile" element={<Profile />}/>
        <Route path="/Blog" element={<Blog />}/>
        <Route path="*" element={<PageNotFound />}/>
      </Routes>
      <Footer />   
    </div>
    </Router>
  );
}

export default App;
