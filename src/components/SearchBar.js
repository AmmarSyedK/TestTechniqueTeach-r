import React from "react";
import './SearchBar.css';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';

const placeholder = "SVT, piano, anglais, maths...";


function SearchBar(){
    const [value, setValue] = useState("");
    
    return(
        <div className="SearchBar">
            <h1>En quelle matière avec-vous besoin d'aide ?</h1>
        <div className="search">
            <div className="searchInputs">
                <input type="text" placeholder={placeholder} onChange={(event) => {setValue(event.target.value)}} />
                <div className="searchIcon">
                    <SearchIcon />
                </div>
            </div>
        </div>
        <div className="Matiere">
          <h1>Les Teach'rs de {value} qui pourraient vous correspondre</h1>
        </div>
        </div>
        
    )
}

export default SearchBar