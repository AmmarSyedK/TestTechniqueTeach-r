import React from "react";
import NumberOne from '../assets/1.png';
import NumberTwo from '../assets/2.png';
import NumberThree from '../assets/3.png';
import Logo from '../assets/logo_teachr.png';
import Books from '../assets/Books.png';
import "../App.css";

function Sidebar() {
    return (
        <div className="Sidebar">
            <div className="Logo"><img src={Logo} /></div>
            <u1>
                <div className="Items">
                    <li className="Content">
                        <div className="icons"> <img src={NumberOne} /> </div>
                        <div className="title">Votre demande</div>
                    </li>
                    <li className="Content">
                        <div className="icons"> <img src={NumberTwo} /> </div>
                        <div className="title">Nos propositions</div>
                    </li>
                    <li className="Content">
                        <div className="icons"> <img src={NumberThree} /> </div>
                        <div className="title">Paiement</div>
                    </li>
                </div>
            </u1>
            <div className="Books"><img src={Books} /></div>
            
        </div>
    )
}

export default Sidebar