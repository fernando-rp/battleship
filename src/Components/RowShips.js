import ShipPosition from "./ShipPositions"


const RowShips=(props)=>{

    let numeroTablero=[0,1,2,3,4,5,6,7,8]

    return(
        <div className="row">
            <div className="col-1 d-flex justify-content-center align-self-center">{props.num+1}</div>
            <div className="col-11 mx-auto">
                <div className="row">
                    {numeroTablero.map((num)=>(
                        <ShipPosition col={props.col} key={num} id={`${props.id}${num}`} barcos={props.barcos}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default RowShips;