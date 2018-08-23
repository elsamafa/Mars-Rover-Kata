// Rover Object Goes Here
// ======================
var rover = {
  direction: "N", 
  x: 0,
  y: 0,
}
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

//MOVING FORWARD FUNCTION

function moveForward(){
  console.log("moveForward was called");

  switch(rover.direction) {
    case rover.direction = "W": rover.x--;

    break;

    case rover.direction = "E": rover.x++;

    break;


    case rover.direction = "N": rover.y--;

    break;

    case rover.direction = "S": rover.y++;
  };
}

//MOVE BACKWARD FUNTION

function moveBackward(){
  console.log("moveBackward was called");

  switch(rover.direction) {
    case rover.direction = "W": rover.x++;

    break;

    case rover.direction = "E": rover.x--;

    break;


    case rover.direction = "N": rover.y++;

    break;

    case rover.direction = "S": rover.y--;
  };

}

//COMMANDS FUNCTION
/*function giveCommands(commands){
  for (var i = 0; i<= commands.length; i++) {
    switch(commands[i]) {
      case commands[i] ==="f": moveForward(rover);

      break;

      case commands[i] === "l": turnLeft(rover);

      break;

      case commands[i] === "r": turnRight(rover);

      break;
    }
  }
}*/

function giveCommands(commands){
  for (var i = 0; i<= commands.length; i++) {
    if(commands[i]==='f'){
      moveForward(rover)
    } else if (commands[i]==='l') {
      turnLeft(rover)
    } else if (commands[i]==='r') {
      turnRight(rover)
    }
  }
}