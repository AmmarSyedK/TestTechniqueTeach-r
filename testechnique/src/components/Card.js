import React, { useState } from "react";
import './Card.css';
import Female from '../assets/female.png';
import Male from '../assets/male.png';
import Avis from '../assets/avis.png';
import School from '../assets/school.png';
import Level from '../assets/level.png';
import Verified from '../assets/verified.png';
import Location from '../assets/location.png';

function Card() {

    const [name, setName] = useState('Marie Dardell');
    const [school, setSchool] = useState('HEC, 1ère année');
    const [level, setLevel] = useState("Bilingue");
    const [certificate, setCertificate] = useState("Diplôme vérifié");
    const [location, setLocation] = useState("Paris");
    const [description, setDescription] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");

    return (
        <div className="Card">
            <div className="image-container">
                <img src={Female} alt="" height="100px" width="100px" />
            </div>

            <div className="lower-container">
                <h3 className="name">{name}</h3>
            </div>
            <div className="stars">
                <img src={Avis} alt="" height="75px" width="150px" />
            </div>
            <div className="heures">20 heures données</div>
            <u1>
                <div className="Info">
                    <li className="Content">
                        <div className="icon"> <img src={School} alt="" /> </div>
                        <div className="titre">{school}</div>
                    </li>
                    <li className="Content">
                        <div className="icon"> <img src={Level} alt="" /> </div>
                        <div className="titre">{level}</div>
                    </li>
                    <li className="Content">
                        <div className="icon"> <img src={Verified} alt="" /> </div>
                        <div className="titre">{certificate}</div>
                    </li>
                    <li className="Content">
                        <div className="icon"> <img src={Location} alt="" /> </div>
                        <div className="titre">{location}</div>
                    </li>
                </div>
            </u1>
            <h4 className="Description-titre">Description</h4>
            <h5 className="Description-content">{description}</h5>
            <div className="button">
            <button type="button" class="w-100 h-100 btn btn-primary btn-rounded">Choisir</button>
            </div>
        </div>
    )
}

export default Card