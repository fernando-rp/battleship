import { useState } from "react"
import RowShips from "./RowShips"

const Tablero=(props)=>{

    let numeroTablero=[0,1,2,3,4,5,6,7,8]
    let barcos=props.barcos

    const [enviarBarcos,setEnviarBarcos]=useState([,,,,,,,,,,,])
    const [barcosEnviado,setBarcosEnviados]=useState(false)

    const shipsPosition=()=>{

        if(barcosEnviado===false){
            setEnviarBarcos(barcos)
            setBarcosEnviados(true)
            return enviarBarcos
        }
        
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
                        <button type="button" className="btn btn-dark mt-4 p-4" onClick={shipsPosition}>Ver Barcos Oponente</button>
                    </div>
                </div>
            </div>
        </>
    )
    
}

export default Tablero;