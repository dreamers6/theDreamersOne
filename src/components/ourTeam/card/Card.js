import React from 'react';
import { Link } from 'react-router-dom';

function Card(props) {
    return (
        <div className="col-lg-4 col-sm-6" key={props.id}>
            <div className="team">
                <div className="image">
                    <img src={props.imgPerson} alt={props.name} />
                </div>
                <div className="info">
                    <h4>{props.name}</h4>
                    <span>{props.specialist}</span>
                </div>
                <ul>
                    <li><Link to="#"><i class='fa-brands fa-twitter'></i></Link></li>
                    <li><Link to="#"><i class='fa-brands fa-linkedin-in'></i></Link></li>
                    <li><Link to="#"><i class='fa-brands fa-instagram'></i></Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Card ;
