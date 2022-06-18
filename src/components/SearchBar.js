import React from "react";
import './SearchBar.css';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';

const placeholder = "SVT, piano, anglais, maths...";


function SearchBar(){
    // constante value qui va être utilisé pour stocker l'input de l'utilisateur sur la barre de recherche
    const [value, setValue] = useState("");
    
    return(
        <div className="SearchBar">
            <h1>En quelle matière avec-vous besoin d'aide ?</h1>
        <div className="search">
            <div className="searchInputs">
                {/* Input + la valeur value va être affecté à chaque entrée de l'utilisateur */}
                <input type="text" placeholder={placeholder} onChange={(event) => {setValue(event.target.value)}} />
                
                {/* Icône de recherche */}
                <div className="searchIcon">
                    <SearchIcon />
                </div>
            </div>
        </div>
        
        <div className="Matiere">
            {/* Grâce à useState, {value} sera changé instantanément à chaque input de l'utilisateur  */}
          <h1>Les Teach'rs de {value} qui pourraient vous correspondre</h1>
        </div>
        </div>
        
    )
}

export default SearchBar