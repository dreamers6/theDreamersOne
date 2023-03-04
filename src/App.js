import './App.css';

// import Footer from './Components/footer/Footer.js';
// import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
// import ContactUs from './Components/ContactUs/ContactUs';
// import '@fortawesome/fontawesome-svg-core/styles.css';

// import Footer from './components/footer/Footer.js';
// import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home.js';
// import NavBar from './components/navbar/NavBar.js';

import Header from './components/header/Header';

import NavbarMobile from './components/navbar/NavbarMobile';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                    <Route exact path="/" element={<Home/>} />
                    <Route exact path="/" element={<Home/>} />


                    <Route path="/header" element={<Header />} />
                    <Route path="/services" element={<NavbarMobile />} />
            </Routes>          
    </BrowserRouter>
    );
}

export default App;
