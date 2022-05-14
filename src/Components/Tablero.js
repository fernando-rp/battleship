import { useState } from "react"
import RowShips from "./RowShips"

const Tablero=(props)=>{

    let numeroTablero=[0,1,2,3,4,5,6,7,8]

    let gameBoard = [
        [1,1,1,1,1,0,0,0,1],
        [0,0,0,0,0,0,0,0,1],
        [0,0,0,0,0,0,0,0,1],
        [0,0,0,0,0,0,0,0,1],
        [0,0,0,0,0,0,0,0,0],
        [1,0,0,1,1,0,0,0,0],
        [1,0,0,0,0,0,0,0,0],
        [1,0,0,0,0,0,0,0,0],
        [0,1,1,1,0,0,0,0,0]
    ];

    let barcos=[]
    for (let i = 0; i < gameBoard.length; i++) {
        for (let j = 0; j < gameBoard.length; j++) {
            if (gameBoard[i][j] === 1) {
                barcos.push(([i] + [j]))
            }
        }
    }

    const [enviarBarcos,setEnviarBarcos]=useState([,,,,,,,,,,,,,,,,])

    const shipsPosition=()=>{

        // setEnviarBarcos(['00','01','02','03','04','05','06','07','08','10','11','12','13','14','15','16','17'])
        setEnviarBarcos(barcos)
        return enviarBarcos
    }

    return(
        <>
            <div className="container-fluid mt-4 mb-4 w-100 mx-auto">
                <div className="row">
                    <div className="col-1 d-flex justify-content-center "> </div>
                    <div className="col-11 mx-auto">
                        <div className="row">
                            <div className="col text-center">1</div>
                            <div className="col text-center">2</div>
                            <div className="col text-center">3</div>
                            <div className="col text-center">4</div>
                            <div className="col text-center">5</div>
                            <div className="col text-center">6</div>
                            <div className="col text-center">7</div>
                            <div className="col text-center">8</div>
                            <div className="col text-center">9</div>
                        </div>
                    </div>
                </div>
                {
                    numeroTablero.map((num)=>{
                        return(
                            <RowShips num={num} col={props.col} key={num} id={num} barcos={enviarBarcos}/>
                        )
                    })
                }

                <div className="row mx-auto">
                    <div className="col d-flex justify-content-center">
                    <button className="btn btn-dark mt-4 p-4" onClick={shipsPosition}>Ver Barcos</button>
                    </div>
                
                </div>

                
            </div>
        </>
    )
    
}

export default Tablero;