/** - Right three 
 *  - If left, then that's north. 
 *  - Have a face direction 
 *  - Add to the variables north, east, south, west from original, depending on the direction you're facing 
 */

 directionsFromStart = {
   north : 0,
   east: 0,
   south: 0,
   west: 0
 }

 blocksAway = (directions) => {
    let directionFacing = "directions[0]";


    for (let i = 0; i < directions.length; i++) {

      if(directionFacing == "right") {
          if (directions[i] == "left") {
            directionsFromStart.north += directions[i+1];
          }

          if (directions[i] == "right") {
              
          }
      }


      if(directionFacing == "left") {
        if (directions[i] == "left") {
          //MOVE X AMOUNT
        }

        if (directions[i] == "right") {
          //MOVE X AMOUNT
        }
    }

      if(directionFacing == "left") {

      }
      if(directions[i] == "right") {
        directionFacing = "right"
      } 

      if(directions[i] == "left") {
        directionFacing = "left"
      }

    }
 }

 //Take the events for directions. If array-2 was X, then the direction is Y. Modify the directions object 