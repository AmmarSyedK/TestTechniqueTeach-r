import React from "react";
import NumberOne from '../assets/1.png';
import NumberTwo from '../assets/2.png';
import Logo from '../assets/logo_teachr.png';
import Books from '../assets/Books.png';
import './Sidebar2.css';

function Sidebar2() {
    return (
        <div className="Sidebar2">
            {/* div contenant le logo */}
            <div className="Logo"><img src={Logo} alt="" /></div>
            {/* liste d'items contenus dans la barre latérale */}
            <u1>
                <div className="Items">
                    <li className="Content">
                        {/* Premier point - "Votre demande" */}
                        <div className="icons"> <img src={NumberOne} alt="" /> </div>
                        <div className="title">Quelle matière ?</div>
                    </li>
                    <li className="Content">
                        {/* Premier point - "Votre demande" */}
                        <div className="icons"> <img src={NumberOne} alt="" /> </div>
                        <div className="title">Quelle classe ?</div>
                    </li>
                    <li className="Content">
                        {/* Premier point - "Votre demande" */}
                        <div className="icons"> <img src={NumberOne} alt="" /> </div>
                        <div className="title">Domicile ou à distance ?</div>
                    </li>
                    <li className="Content">
                        {/* Premier point - "Votre demande" */}
                        <div className="icons"> <img src={NumberOne} alt="" /> </div>
                        <div className="title">Quel type de cours ?</div>
                    </li>
                    <li className="Content">
                        {/* Premier point - "Votre demande" */}
                        <div className="icons"> <img src={NumberOne} alt="" /> </div>
                        <div className="title">A qui s'adresse le cours ?</div>
                    </li>
                    <li className="Content">
                        {/* Deuxième point - "Nos propositions" */}
                        <div className="icons"> <img src={NumberTwo} alt="" /> </div>
                        <div className="title">Presque finit !</div>
                    </li>
                </div>
            </u1>
            {/* Illustration des livres en bas de page */}
            <div className="Books"><img src={Books} alt="" /></div>
            
        </div>
        
    )
}

export default Sidebar2