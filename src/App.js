import './App.css';
import Sidebar from './components/Sidebar';
import Tuiles from './components/Tuiles';
import SearchBar from './components/SearchBar';

function App() {

  return (
    <div className="App">
      {/* Barre latérale */}
      <Sidebar />
      <div className='body'>
        <div className="searchbar">
          {/* Barre de recherche + Phrase changeant le champ {matière} instantanément */}
          <SearchBar />
        </div>
        <div className='tuiles'>
          {/* Tuiles se défilant horizontalement */}
          <Tuiles />
        </div>
        {/* Bouton "Précédent" et "Suivant" */}
        <div className='buton'>
          <div className='back'><button type="button" class="w-100 h-100 border-0 btn btn-outline-default" href="#"><p className='butonContent'>Précédent</p></button></div>
          <div className="next"><button type="button" class="w-100 h-100 btn btn-outline-primary btn-rounded" data-mdb-ripple-color="dark" ><p className='butonContent'>Suivant</p></button></div>
          
      </div>
      
    </div>


    </div >
  );
}

export default App;
