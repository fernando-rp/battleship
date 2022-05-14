

import Tablero from './Components/Tablero';

import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css';



function App() {
  return (
    <>
      <div className="container">
        <div className="row">
          <h1 className="title">BattleShip</h1>
          <div className="col-6">
          <h2 className="subtitle">Tu tablero:</h2>
            <Tablero />
          </div>
          <div className="col-6">
          <h2 className="subtitle">Tablero de la computadora:</h2>
            <Tablero />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
