import React from "react";
import NumberOne from '../assets/1.png';
import NumberTwo from '../assets/2.png';
import NumberThree from '../assets/3.png';
import Logo from '../assets/logo_teachr.png';
import Books from '../assets/Books.png';
import './Sidebar.css';

function Sidebar() {
    return (
        <div className="Sidebar">
            {/* div contenant le logo */}
            <div className="Logo"><img src={Logo} alt="" /></div>
            {/* liste d'items contenus dans la barre latérale */}
            <u1>
                <div className="Items">
                    <li className="Content">
                        {/* Premier point - "Votre demande" */}
                        <div className="icons"> <img src={NumberOne} alt="" /> </div>
                        <div className="title">Votre demande</div>
                    </li>
                    <li className="Content">
                        {/* Deuxième point - "Nos propositions" */}
                        <div className="icons"> <img src={NumberTwo} alt="" /> </div>
                        <div className="title">Nos propositions</div>
                    </li>
                    <li className="Content">
                        {/* Troisième point - "Paiement" */}
                        <div className="icons"> <img src={NumberThree} alt="" /> </div>
                        <div className="title">Paiement</div>
                    </li>
                </div>
            </u1>
            {/* Illustration des livres en bas de page */}
            <div className="Books"><img src={Books} alt="" /></div>
            
        </div>
        
    )
}

export default Sidebar