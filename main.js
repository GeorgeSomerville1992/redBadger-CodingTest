/* Red Badger coding test */ 
/* will work assuming the user enter's data in the correct format e.g 0 5 N*/



var previousCoordinatesArrayX = [],
    previousCoordinatesArrayY = []
function Robot() {
    /* private properties only returned object has access to */
    
    this.upperRightX = 0;
    this.upperRightY = 0;
    this.orientation = "";
    this.x = 0;
    this.y = 0;  
    var instructions = [],
        inputArray = [],
        inputValue = document.getElementById("coordinateInput").value,
        instructions = document.getElementById("instructionCommands").value,
        outPut = document.getElementById("coordinateOutput"),
        submitButton = document.getElementById("send-coordinate")
    return {
        inputCoordinates: function() {
            var boundary = document.getElementById("coordinateBoundary").value;
            var boundaryValues = boundary.split(" ");
            this.upperRightX = boundaryValues[0];
            this.upperRightY = boundaryValues[1];


            var value = inputValue.split(" ")
            this.x = value[0];
            this.y = value[1];
            this.orientation = value[2];
            this.processInstructions();
        },
        checkInstructions: function(){
            // IMEPLEMENT THROW ERROR HERE
        },
        processInstructions: function() {
            /* used because javascript concats to string when your add */
            var yInt = parseInt(this.y),
                xInt = parseInt(this.x);
            /* loop through string of instructions, then process each step. return final set of coordinates.*/
            if (instructions.length > 100) {
                alert("Instructions Must not be greater than 100")
                // instructions.value = ' '
                return false;
            }
            if(this.upperRightX > 50 || this.upperRightY > 50){
                alert("invalid grid number, upperight grid must not be greater than 50")
            }
            for (var i = 0; i < instructions.length; i += 1) {
                if (instructions[i] === "F") {
                    /* switch orientation statement for robot moving forward */
                    switch (this.orientation) {
                        case "N":
                            yInt = yInt + 1
                            break;
                        case "E":
                            xInt = xInt + 1
                            break;
                        case "S":
                            yInt = yInt - 1
                            break;
                        case "W":
                            xInt = xInt - 1
                            break;
                    }
                }
                if (instructions[i] === "R") {
                    /* call utility function */
                    this.orientation = this.rotateLeftOrRight();
                }
                if (instructions[i] === "L") {
                    /* call utility function passing left argument */
                    this.orientation = this.rotateLeftOrRight(true);
                }
                /* set globals to Values for xInt */
                this.x = xInt;
                this.y = yInt;
                /*  if checkRobotPosition is false, pass outputCoordinates with lost argument */
                this.checkRobotPosition() ? this.outputCoordinates() : this.outputCoordinates("LOST");
            }

        },
        rotateLeftOrRight: function(left) {
            switch (this.orientation) {
                case "N":
                    this.orientation = left ? "W" : "E"
                    break;
                case "E":
                    this.orientation = left ? "N" : "S"
                    break;
                case "S":
                    this.orientation = left ? "E" : "W"
                    break;
                case "W":
                    this.orientation = left ? "S" : "N"
                    break;
            }
            return this.orientation;
        },
        checkRobotPosition: function() {
            if (this.x > this.upperRightX || this.x < 0 || this.y > this.upperRightY || this.y < 0) {
                if(previousCoordinatesArrayX[previousCoordinatesArrayX-1] === this.x && previousCoordinatesArrayY[[previousCoordinatesArrayY-1]] === this.y ){
                    console.log("this current move will be ignored");
                    /* and this is where I stopped */
                    /* need to find a way to back right out of function, back to loop and pass plus 1 to skip position */
                }
                // push previous coordinates of last known position to global arrays.
                // this function is being looped through each instruction step
                // so I would use this to skip the next instrction within the string.
                previousCoordinatesArrayX.push(this.x)
                previousCoordinatesArrayY.push(this.y)
                return false
            }
            return true
        },
        outputCoordinates: function(lost) {
            outPut.value = this.x + " " + this.y + " " + this.orientation + " ";
            outPut.value += this.checkRobotPosition() ? " " : "LOST";
        },


    }
}
function showForm() {
    document.getElementById("banner").style.background = "none";
    document.getElementById("robot-container").style.visibility = "visible";
    document.getElementById("intro").style.visibility="hidden";
}

function inputCoordinate() {
    var marsRobot = new Robot();
    marsRobot.inputCoordinates();
}


/* to do => 
    * fix robot scent
    * Implement unit tests and throw error code. (see unit code)
    * Implement validation for correct format Regex. 
    * Implement into node and rails app.
*/




