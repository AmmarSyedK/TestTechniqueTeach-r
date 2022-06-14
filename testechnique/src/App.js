import './App.css';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <div className='corps'>
        <h1>En quelle matière avez-vous besoin d'aide ?</h1>
      </div>
    </div>
  );
}

export default App;
