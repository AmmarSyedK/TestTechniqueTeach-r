import './App.css';
import Sidebar from './components/Sidebar';
import Tuiles from './components/Tuiles';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className='body'>
        <div className="searchbar">
          <SearchBar />
        </div>
        <div className='tuiles'>
          <Tuiles />
        </div>
        <div className='buton'>
        <div className='back'><button type="button" class="w-100 h-100 border-0 btn btn-outline-default" href="#"><p className='butonContent'>Précédent</p></button></div>
        <div className="next"><button type="button" class="w-100 h-100 btn btn-outline-primary btn-rounded" data-mdb-ripple-color="dark"><p className='butonContent'>Suivant</p></button></div>
        </div>
      </div>


    </div>
  );
}

export default App;
