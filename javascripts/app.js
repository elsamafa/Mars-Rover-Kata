// Rover Object Goes Here
// ======================
var rover = {
  direction: "N", 
  x: 0,
  y: 0,
  travelLog: [[0,0]],
  position: grid[0][0]
}
var roverTwo = {
  direction: "N", 
  x: 9,
  y: 9,
  travelLog: [[9,9]],
  position: grid[9][9]
}

var rock = {
  x: 5,
  y: 3,
  position: [grid[5][2], grid[1][3], grid[7][7]]
}
var grid = [
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, "rock", null, null, null, null],
  [null, "rock", null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, "rock", null, null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
];

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
    if (rover.x <=-9){  
      console.log("Watch out! Rover is about to fall out");
    } else {
      rover.x--;
    }
          
    break;

    case rover.direction = "E": 
    if (rover.x >=9){  
      console.log("Watch out! Rover is about to fall out");
    } else {
      rover.x++;
    }

    break;


    case rover.direction = "N":
      if (rover.y <=-9){  
      console.log("Watch out! Rover is about to fall out");
    } else {
      rover.y--;
    } 

    break;

    case rover.direction = "S":
    if (rover.y >=9){  
      console.log("Watch out! Rover is about to fall out");
    } else {
      rover.y++;
    }
  
  };

  switch(roverTwo.direction) {
    case roverTwo.direction = "W": 
    if (roverTwo.x <=-9){  
      console.log("Watch out! Rover is about to fall out");
    } else {
      roverTwo.x--;
    }
          
    break;

    case roverTwo.direction = "E": 
    if (roverTwo.x >=9){  
      console.log("Watch out! Rover is about to fall out");
    } else {
      roverTwo.x++;
    }

    break;


    case roverTwo.direction = "N":
      if (roverTwo.y <=-9){  
      console.log("Watch out! Rover is about to fall out");
    } else {
      roverTwo.y--;
    } 

    break;

    case roverTwo.direction = "S":
    if (roverTwo.y >=9){  
      console.log("Watch out! Rover is about to fall out");
    } else {
      roverTwo.y++;
    }
  
  };
}

//MOVE BACKWARD FUNTION

function moveBackward(){
  console.log("moveBackward was called");

  switch(rover.direction,rover.x,rover.y) {
    case rover.direction = "W": 
    if (rover.x >=9){  
      console.log("Watch out! Rover is about to fall out");
    } else {
      rover.x++;
    }

    break;

    case rover.direction = "E":
    if (rover.x <=-9){  
      console.log("Watch out! Rover is about to fall out");
    } else {
      rover.x--;
    }

    break;

    case rover.direction = "N": 
    if (rover.y >=9){  
      console.log("Watch out! Rover is about to fall out");
    } else {
      rover.y++;
    }

    break;

    case rover.direction = "S": 
    if (rover.x <=-9){  
      console.log("Watch out! Rover is about to fall out");
    } else {
      rover.y--;
    } 
  };
  
  switch(rover.direction,rover.x,rover.y) {
    case rover.direction = "W": 
    if (rover.x >=9){  
      console.log("Watch out! Rover is about to fall out");
    } else {
      rover.x++;
    }

    break;

    case rover.direction = "E":
    if (rover.x <=-9){  
      console.log("Watch out! Rover is about to fall out");
    } else {
      rover.x--;
    }

    break;

    case rover.direction = "N": 
    if (rover.y >=9){  
      console.log("Watch out! Rover is about to fall out");
    } else {
      rover.y++;
    }

    break;

    case rover.direction = "S": 
    if (rover.x <=-9){  
      console.log("Watch out! Rover is about to fall out");
    } else {
      rover.y--;
    } 
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
    } else {
      continue;
    }
  }
  console.log(rover.travelLog);
}

//AVOID THE ROVER FROM FALLING OUT

function  fallingOut () {
  switch (rover.x,rover.y)  {
    case (rover.x || rover.y >=10) : break;
    case (rover.x || rover.y <=-1)  : break;
  } 
}
