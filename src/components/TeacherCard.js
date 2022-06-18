import React, { useState, useEffect } from "react";
import './TeacherCard.css';
import Female from '../assets/female.png';
import Avis from '../assets/avis.png';
import School from '../assets/school.png';
import Level from '../assets/level.png';
import Verified from '../assets/verified.png';
import Location from '../assets/location.png';

// Fonction composante TeacherCard qui a en paramètre un indice récupéré de la composante Tuiles
function TeacherCard(props) {

    // constante users qui permet de récupérer les données de chaque user de l'API
    const [users, setUsers] = useState([]);
    
    // fetch de l'API récupérant les données de l'API
    useEffect(() => {
        fetch("https://www.data.gouv.fr/api/1/users/?page=1&page_size=20")
            .then(res => res.json())
            .then(
                (result) => {
                    // stockage des données dans la constante users
                    setUsers(result.data);
                    // stockage du nom + prénom de chaque user dans la constante name
                    // l'indice est récupéré dans la composante Tuiles
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

        // div correspondant à une TeacherCard
        <div className="Card">
            {/* Icône de la TeacherCard */}
            <div className="image-container">
                <img src={Female} alt="" height="100px" width="100px" />
            </div>

            {/* div contenant le nom + prénom d'un utilisateur tiré de l'API */}
            <div className="lower-container">
                <h3 className="name">{name}</h3>
            </div>
            {/* div contenant les étoiles d'avis du professeur */}
            <div className="stars">
                <img src={Avis} alt="" height="75px" width="150px" />
            </div>

            <div className="heures">20 heures données</div>

            {/* liste contenant quelques infos du professeur */}
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
            {/* Description du professeur */}
            <h4 className="Description-titre">Description</h4>
            <h5 className="Description-content">{description}</h5>
            {/* Bouton choisir */}
            <div className="button">
                <button type="button" class="w-100 h-100 btn btn-primary btn-rounded">Choisir</button>
            </div>
        </div>
    )
}

export default TeacherCard