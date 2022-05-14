import ShipPosition from "./ShipPositions"


const RowShips=(props)=>{

    let numeroTablero=[1,2,3,4,5,6,7,8,9]

    return(
        <div className="row">
            <div className="col-1 d-flex justify-content-center align-self-center">{props.num}</div>
            <div className="col-11 mx-auto">
                <div className="row">
                    {numeroTablero.map((num)=>(
                        <ShipPosition col={props.col} key={num}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default RowShips;