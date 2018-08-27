// Rover Object Goes Here
// ======================
var rover = {
  direction: "N", 
  x: 0,
  y: 0,
  stopRover: false,
  travelLog: [[0,0]],
  number: 1,
  name: "Spirit"
}
var roverTwo = {
  direction: "N", 
  x: 9,
  y: 9,
  travelLog: [[9,9]],
  number: 2,
  name: "Curiosity"
}

var rock = {
  name: "rock",
  x: 5,
  y: 3,
  position: [[2,5], [3,1], [7,7]] //[row, column]
}
var grid = [
  ["Spirit", null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, "rock", null, null, null, null],
  [null, "rock", null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, "rock", null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, "Curiosity"],
];

// =====================

// TURN FUNCTION


  
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
  switch(roverTwo.direction) {
    case roverTwo.direction = "N": roverTwo.direction = "W";
    
    break;
  
    case roverTwo.direction = "W": roverTwo.direction = "S";
    
    break;
  
    case roverTwo.direction = "S": roverTwo.direction = "E";
    
    break;
  
    case roverTwo.direction = "S": roverTwo.direction = "E";
      
    break;
  
    default: roverTwo.direction = "N";
  }
}


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
  switch(roverTwo.direction) {
    case roverTwo.direction = "N": roverTwo.direction = "E";
    
    break;
  
    case roverTwo.direction = "E": roverTwo.direction = "S";
    
    break;
  
    case roverTwo.direction = "S": roverTwo.direction = "W";
    
    break;
  
    case roverTwo.direction = "W": roverTwo.direction = "N";
      
    break;
  
    default: roverTwo.direction = "N";
  }
}

//MOVING FORWARD FUNCTION

function moveForward(){
  console.log("moveForward was called");

  switch(rover.direction) {
    case rover.direction = "W":  
    if (rover.x===0){    console.log("Watch out! Rover One is about to fall out."); 
    return false;
  } 
  
    rover.x--;
  
       
    break;

    case rover.direction = "E":  
    if (rover.x===9){    console.log("Watch out! Rover One is about to fall out."); 
    return false;  } 
      rover.x++;
    
    break;


    case rover.direction = "N":
    if (rover.y===0){    console.log("Watch out! Rover One is about to fall out."); 
    return false;} 
    rover.y--;
   
    break;

    case rover.direction = "S":
    if (rover.y===9){    console.log("Watch out! Rover One is about to fall out."); 
    return false;}
    rover.y++;          

  };

  //MOVE FORWARD FOR ROVER TWO

  /*switch(roverTwo.direction) {
    case roverTwo.direction = "W": 
    if (roverTwo.x===0){    console.log("Watch out! Rover One is about to fall out."); 
    return false;
  } 
    roverTwo.x--;
         
    break;

    case roverTwo.direction = "E": 
    if (roverTwo.x===9){    console.log("Watch out! Rover One is about to fall out."); 
    return false;
  } 
      roverTwo.x++;
    
    break;


    case roverTwo.direction = "N":
    if (roverTwo.y===0){    console.log("Watch out! Rover One is about to fall out."); 
    return false;
  } 
      roverTwo.y--;
    

    break;

    case roverTwo.direction = "S":
    if (roverTwo.y===9){    console.log("Watch out! Rover One is about to fall out."); 
    return false;
  } 
         roverTwo.y++;
  
  
  };*/
}

//MOVE BACKWARD FUNCTION

function moveBackward(){
  console.log("moveBackward was called");

  switch(rover.direction) {
    case rover.direction = "W":    
    if (rover.x===9){    console.log("Watch out! Rover One is about to fall out."); 
    return false;
  } 
    rover.x++;

    break;

    case rover.direction = "E":
    if (rover.x===0){    console.log("Watch out! Rover One is about to fall out."); 
    return false;
  } 
      rover.x--;
    

    break;

    case rover.direction = "N": 
    if (rover.y===0){    console.log("Watch out! Rover One is about to fall out."); 
    return false;
  } 
      rover.y++;
    

    break;

    case rover.direction = "S": 
    if (rover.y===9){    console.log("Watch out! Rover One is about to fall out."); 
    return false;
  } 
    rover.y--;

    
  };

//MOVE BACKWARD FUNCTION FOR ROVER TWO

 /* switch(roverTwo.direction) {
    case roverTwo.direction = "W": 
    if (roverTwo.x===9){
      console.log("Watch out! Rover One is about to fall out.");
      return false;} 
      roverTwo.x++;
  
    break;

    case roverTwo.direction = "E":
    if (roverTwo.x===0){
      console.log("Watch out! Rover One is about to fall out.");
      return false;} 
      roverTwo.x--;

    break;

    case roverTwo.direction = "N": 
    if (roverTwo.y===9){
      console.log("Watch out! Rover One is about to fall out.");
      return false;}   
    roverTwo.y++;
    
    break;

    case roverTwo.direction = "S": 
    if (roverTwo.y===0){
      console.log("Watch out! Rover One is about to fall out.");
      return false;} 
      roverTwo.y--;
     
};*/
}

//COMMANDS FUNCTION


function giveCommands(commands){
  //whichRover === [rover,roverTwo]
  commands===['f','b','l','r'] 
  for (var i = 0; i<= commands.length; i++) {
    if(commands[i]==='f'){
      moveForward(rover);
      rover["travelLog"].push([rover.x,rover.y]);
    } else if(commands[i]==='b'){
      moveBackward(rover);
      rover["travelLog"].push([rover.x,rover.y]);
    } else if (commands[i]==='l') {
      turnLeft(rover);
    } else if (commands[i]==='r') {
      turnRight(rover)
    }
  }
  console.log(rover.travelLog);
}
  //SWAP BETWEEN COMMANDS ROVER 1 AND ROVER 2
//Al incorporar este código a la función giveCommands, con un condicional switch, con rover Two, no se ejecutan ninguno de los comandos

 
/*function giveCommands(commands, whichRover){
  whichRover === [rover,roverTwo]
  commands===['f','b','l','r'] 
switch(whichRover){ 
    case whichRover = rover:
    for (var i = 0; i<= commands.length; i++) {
      if(commands[i]==='f'){
        moveForward(rover);
        rover["travelLog"].push([rover.x,rover.y]);
      } else if(commands[i]==='b'){
        moveBackward(rover);
        rover["travelLog"].push([rover.x,rover.y]);
      } else if (commands[i]==='l') {
        turnLeft(rover);
      } else if (commands[i]==='r') {
        turnRight(rover)
      }
    }
    console.log(rover.travelLog);
    break;
    case whichRover = roverTwo :
    for (var i = 0; i<= commands.length; i++) {
      if(commands[i]==='f'){
        moveForward(roverTwo);
        rover["travelLog"].push([roverTwo.x,roverTwo.y]);
      } else if(commands[i]==='b'){
        moveBackward(roverTwo);
        rover["travelLog"].push([roverTwo.x,roverTwo.y]);
      } else if (commands[i]==='l') {
        turnLeft(roverTwo);
      } else if (commands[i]==='r') {
        turnRight(roverTwo)
      } 
    }
    console.log(roverTwo.travelLog);
    break;
  }
}
*/

//COMMAND FUNCTION WITH SWITCH
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