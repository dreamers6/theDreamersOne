import './App.css';

// import Footer from './components/footer/Footer.js';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import '@fortawesome/fontawesome-svg-core/styles.css';
import ContactUs from './components/ContactUs/ContactUs'

import Home from './components/home/Home.js';
import NavBar from './components/navbar/NavBar.js';
import Footer from './components/footer/Footer'
import Services from './components/services/Services';


// import NavbarMobile from './components/navbar/NavbarMobile';
import Blogs from './components/blogs/Blogs';

import Error from './components/error404/Error';
import Booking from './components/booking/Booking';
import Login from './components/login/Login';
import Register from './components/register/Register';
import ForgotP from './components/login/ForgotP';
import OurTeam from './components/ourTeam/OurTeam';
import AboutUs from './components/aboutus/AboutUs';

function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                    <Route exact path="/" element={<Home/>} />
                    <Route path="/ContactUs" element={<ContactUs />} />
                    <Route path="/services" element={<Services />} />
                    <Route path='/blogs' element={<Blogs />} />
                    <Route path='/about' element={<OurTeam/>} />
            </Routes>    
            <Booking /> 
            {/* <Login /> */}
            {/* <Register /> */}
            {/* <ForgotP /> */}
            {/* <Error /> */}
            <AboutUs />
            <Footer />
    </BrowserRouter>
    );
}

export default App;
