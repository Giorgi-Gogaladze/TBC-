import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';
import AboutUs from './aboutUs/page';
import Contact from './contact/page';
import Blog from './blog/page';
import Profile from '../Components/profile/page';
import PageNotFound from '../Components/pageNotFound/PageNotFound';

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
