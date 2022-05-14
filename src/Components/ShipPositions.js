import { useState } from "react"


const ShipPosition=(props)=>{

    const [style,setStyle]=useState("")

    const selectedPosition=()=>{
        setStyle(props.col)
    }

    return(
        <div className="col tablero" style={{ backgroundColor: style }} onClick={selectedPosition}></div>
    )

}

export default ShipPosition;