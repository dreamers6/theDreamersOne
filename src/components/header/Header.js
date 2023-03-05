import "./Header.css" ;
import React from 'react' ;
// import NavBar from "../navbar/NavBar" ;
import deriya from "../../images/imgs-ayoub/deriya.png";
import atawich1 from "../../images/imgs-ayoub/atawich-01.png";
import atawich2 from "../../images/imgs-ayoub/atawich-02.png";
import atawich3 from "../../images/imgs-ayoub/atawich-03.png";
import atawich4 from "../../images/imgs-ayoub/atawich-04.png";
import atawich5 from "../../images/imgs-ayoub/atawich-05.png";


export default function Header() {
    return (
        <header>
            <section>
                <div class="container text-center">
                    <div class="row">
                        <div class="col-lg-7 col-md-6 col-sm-7 left">
                        <div class="p3">
                            <h6 class="title-ext text-primary">We Provide All Health Care Solution</h6>
                            <h1>Protect Your Health And Take Care To Of Your Health</h1>
                            <button className="btn btn-secondary">Read More</button>
                        </div>
                        </div>
                        <div class="col-lg-5 col-md-6 col-sm-5">
                            <div class="p33"><img src={deriya} alt="deriya"/></div>
                        </div>
                    </div>
                        <img src={atawich1} alt="atawich-01"/>
                        <img src={atawich2} alt="atawich-02"/>
                        <img src={atawich3} alt="atawich-03"/>
                        <img src={atawich4} alt="atawich-04"/>
                        <img src={atawich5} alt="atawich-05"/>
                </div>
            </section>
        </header>
    )
}
