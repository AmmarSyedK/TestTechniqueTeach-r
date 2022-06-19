import React from "react";
import './Form.css';

function Form(){
    
    return(
        <div className="Body">
            <h1>Presque finit !</h1>
            <p>Une fois quue des Teach'r auront répondu à votre annonce, vous aurez besoin d'un compte pour y répondre. Prenons de l'avance !</p>

            <div className="Form">
                <div className="name">
                <input type="text" placeholder="Ex. John"/>
                <input type="text" placeholder="Ex. DUPONT"/>
                </div>
                <div className="coordonees">
                <input type="mail" placeholder="mail@mail.com"/>
                <input type="tel" placeholder="Ex. 06 XX XX XX XX"/>
                </div>
                <div className="password">
                <input type="password" placeholder="xxxxxxxxx"/>
                <input type="password" placeholder="xxxxxxxxx"/>
                </div>
                </div>
                <input type="submit" value="Envoyer" />
  
        {/* Bouton "Précédent" et "Suivant" */}
        <div className='buton'>
          <div className='back'><button type="button" class="w-100 h-100 border-0 btn btn-outline-default" href="#"><p className='butonContent'>Précédent</p></button></div>
          <div className="next"><button type="button" class="w-100 h-100 btn btn-outline-primary btn-rounded" data-mdb-ripple-color="dark" ><p className='butonContent'>Suivant</p></button></div>
          
      </div>
        </div>

        
        
    )
}

export default Form