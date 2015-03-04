/* Red Badger coding test */ 
/* Where I struggled => when I create a new robot object the original is completely lost 
    and hence being able input last coordinates where robot fell off proved difficult.
    I had a go at using global arrays and pushed current coordinates into the when the robot 
    goes of the grid apon instruction step. But this feels dirty and time was pushing on so I decided not to proceed. 
    maybe there is a way I can save the current Robot object into something then be able to access it from later

*/


var previousCoordinatesArrayX = [],
    previousCoordinatesArrayY = []
function Robot() {
    /* private properties only returned object has access to */
    var instructions = [],
        inputArray = [],
        inputValue = document.getElementById("coordinateInput").value,
        instructions = document.getElementById("instructionCommands").value,
        outPut = document.getElementById("coordinateOutput"),
        submitButton = document.getElementById("send-coordinate");
    this.orientation = "";
    this.x = 0;
    this.y = 0;   
    return {
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
        inputCoordinates: function() {
            /* push string into input array */
            for (var i = 0; i < inputValue.length; i += 1) {
                inputArray.push(inputValue[i]);
            };
            this.x = inputArray[0];
            this.y = inputArray[2];
            this.orientation = inputArray[4];
            this.processInstructions();
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
                this.x = xInt
                this.y = yInt
                /*  if checkRobotPosition is false, pass outputCoordinates with lost argument */
                this.checkRobotPosition() ? this.outputCoordinates() : this.outputCoordinates("LOST")
            }

        },
        checkRobotPosition: function() {
            if (this.x > 50 || this.x < 0 || this.y > 50 || this.y < 0) {
                if(previousCoordinatesArrayX[previousCoordinatesArrayX-1] === this.x && previousCoordinatesArrayY[[previousCoordinatesArrayY-1]] === this.y ){
                    console.log("Not returning lost because this was the same corrdinate as where my friend fell off")
                    /* and this is where I stopped */
                    /* need to find a way to back right out of function, back to loop and pass plus 1 to skip position */
                }
                // push previous coordinates of last known position to global arrays.
                // this function is being looped through each instruction step
                // as how else would I be able to skip the step.
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