import './App.css';

// import Footer from './components/footer/Footer.js';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import '@fortawesome/fontawesome-svg-core/styles.css';
import ContactUs from './components/ContactUs/ContactUs'

import Home from './components/home/Home.js';
import NavBar from './components/navbar/NavBar.js';
import Footer from './components/footer/Footer'


import NavbarMobile from './components/navbar/NavbarMobile';

function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                    <Route exact path="/" element={<Home/>} />
                    <Route path="/ContactUs" element={<ContactUs />} />
                    <Route path="/services" element={<NavbarMobile />} />
            </Routes>
            <Footer />    
    </BrowserRouter>
    );
}

export default App;
