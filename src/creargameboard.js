const crearGameBoard = () => {
    let positionShips = []
    let idPositionsShips=[]
    let maxShip=0
  
    for (let i = 0; i < 9; i++) {
        positionShips.push([])
        for (let j = 0; j < 9; j++) {
            positionShips[i].push(0)
        }
    }
    
    do{
        let i = Math.floor((Math.random() * (9)))
        let j = Math.floor((Math.random() * (9)))
        
        if (j > 0 && j < 7 && i > 0 && i < 9 && maxShip < 4) {

            positionShips[i][j] = 1
            positionShips[i][j + 1] = 1
            positionShips[i][j + 2] = 1
            maxShip += 1
            
        } else if (i > 0 && i < 7 && maxShip < 4) {

            positionShips[i][j] = 1
            positionShips[i + 1][j] = 1
            positionShips[i + 2][j] = 1
            maxShip += 1

        }
    }while (maxShip<4)
  
    for (let i = 0; i < positionShips.length; i++) {
        for (let j = 0; j < positionShips.length; j++) {
            if (positionShips[i][j] === 1) {
              idPositionsShips.push(([i] + [j]))
            }
        }
    }
    return idPositionsShips
  }

  export default crearGameBoard;
