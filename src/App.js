import './App.css';

import Footer from './components/footer/Footer.js';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import '@fortawesome/fontawesome-svg-core/styles.css';
import ContactUs from './components/ContactUs/ContactUs'

import Home from './components/home/Home.js';
import NavBar from './components/navbar/NavBar.js';

import Header from './components/header/Header';

import NavbarMobile from './components/navbar/NavbarMobile';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                    <Route exact path="/" element={<Home/>} />
                    <Route path="/header" element={<Header />} />
                    <Route path="/ContactUs" element={<ContactUs />} />
                    <Route path="/services" element={<NavbarMobile />} />
            </Routes>    
            <Footer />      
    </BrowserRouter>
    );
}

export default App;
