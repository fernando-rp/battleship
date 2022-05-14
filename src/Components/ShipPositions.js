import { useEffect, useState } from "react"


const ShipPosition=(props)=>{

    const [style,setStyle]=useState("")

    const selectedPosition=(e)=>{
        setStyle(props.col)
        // console.log(e.target.id)
    }

    const[border,setBorder]=useState("0px dashed solid green")


    useEffect(()=>{
        if (props.barcos!==undefined) {
            console.log("casi")
            for (let i = 0; i < props.barcos.length; i++) {
                if (props.barcos[i] === props.id) {
                    setBorder("1.5px dashed black")
                }
            }
        }
    },props.barcos,props.id)
    
    

    return(
        <div className="col tablero" style={{ backgroundColor: style , border:border}} id={props.id} onClick={selectedPosition}></div>
    )

}

export default ShipPosition;