import React, { useState, useEffect } from "react";
import './TeacherCard.css';
import Female from '../assets/female.png';
import Avis from '../assets/avis.png';
import School from '../assets/school.png';
import Level from '../assets/level.png';
import Verified from '../assets/verified.png';
import Location from '../assets/location.png';

function TeacherCard(props) {

    const [users, setUsers] = useState([]);
    // Remarque : le table au vide de dépendances [] indique
    // que useEffect ne s’exécutera qu’une fois, un peu comme
    // componentDidMount()
    useEffect(() => {
        fetch("https://www.data.gouv.fr/api/1/users/?page=1&page_size=20")
            .then(res => res.json())
            .then(
                (result) => {
                    setUsers(result.data);
                    setName(users[props.text].first_name.charAt(0).toUpperCase() + users[props.text].first_name.slice(1).toLowerCase() + " " + users[props.text].last_name.charAt(0).toUpperCase() + users[props.text].last_name.slice(1).toLowerCase());
                }
            )
    })

    const [name, setName] = useState();
    const [school] = useState("HEC, 1re année");
    const [level] = useState("Bilingue");
    const [certificate] = useState("Diplôme vérifié");
    const [location] = useState("Paris");
    const [description] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");

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

export default TeacherCard