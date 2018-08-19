// Rover Object Goes Here
// ======================
var rover = {
  direction: [], 
};
// =====================

// TURN FUNCTION

  /*If it's N, it turns to W
  If it's W, it turns to S
  If it's S, it turns to E
  If it's E, it turns to N*/

function turnLeft(){
  console.log("turnLeft was called!");
  switch(rover.direction) {
    case rover.direction = "N": rover.direction = "W";
    
    break;
  
    case rover.direction = "W": rover.direction = "S";
    
    break;
  
    case rover.direction = "S": rover.direction = "E";
    
    break;
  
    case rover.direction = "S": rover.direction = "E";
      
    break;
  
    default: rover.direction = "N";
  }
}

  /*If it's N, it turns to E
  If it's E, it turns to S
  If it's S, it turns to W
  If it's W, it turns to N*/

function turnRight(){
  console.log("turnRight was called!");
  switch(rover.direction) {
    case rover.direction = "N": rover.direction = "E";
    
    break;
  
    case rover.direction = "E": rover.direction = "S";
    
    break;
  
    case rover.direction = "S": rover.direction = "W";
    
    break;
  
    case rover.direction = "W": rover.direction = "N";
      
    break;
  
    default: rover.direction = "N";
  }
}


function moveForward(rover){
  console.log("moveForward was called")
}
