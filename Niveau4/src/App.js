import './App.css';
import Sidebar2 from './components/Sidebar2';
import Form from './components/Form';

function App() {

  return (
    <div className="App">
      {/* Barre latérale */}
      <Sidebar2 />
      <div className='body'>
      <Form/>
      </div>


    </div >
  );
}

export default App;
