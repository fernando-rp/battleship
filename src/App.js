
import Tablero from './Components/Tablero';

import 'bootstrap/dist/css/bootstrap.min.css'

import crearGameBoard from './creargameboard.js'

import './App.css';

function App() {
  return (
    <>
      <div className="container">
        <div className="row">
          <h1 className="title">BattleShip</h1>
          <div className="col-6">
          <h2 className="subtitle">Tu tablero:</h2>
            <Tablero col="red" barcos={crearGameBoard}/>
          </div>
          <div className="col-6">
          <h2 className="subtitle">Tablero de oponente:</h2>
            <Tablero col="blue" barcos={crearGameBoard}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
