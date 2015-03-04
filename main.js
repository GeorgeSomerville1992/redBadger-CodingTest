// console.log("hi")

// x cant be over 50
// y cant be over 50
// output box returns values.

// factor fall of edge
// output now works coirindates are in place
	// chdck that this is right process, write notepad
	// refactor case state into ulties function
// add form input
	// dom onload
// 
/* the robot's FINAL POSITION needs to be asssed, i.e it can fly of the grid again and come back on */
var exactCoordinatesSpellingRegex = /^[1-9][0-9]?$|^50$/


function Robot(){
	var instructions = []
	var outputArray = [],
		inputArray = []
	this.orientation = ""
	this.x = 0
	this.y = 0
	// this.previousRobotLocation = {
	// 		x:"",
	// 		y:""
	// 	}
	this.previousRobotLocationX = 0
	this.previousRobotLocationY = 0
	console.log(this.previousRobotLocation)		
	var inputValue = document.getElementById("instructionInput").value
		instructions = document.getElementById("instructionCommands").value
	var outPut = document.getElementById("coordinateOutput")
	// make button here. onsubmit. cause data to go
	// need a checker to determine weather direct corrindates specified or 
		// list of instructions
	function checkPosition(x,y){
		// if y is greater than 50
		// if x is greater than 50
	}
	return {
		readCoordinates:function(){

		},
		inputCoordinates: function(){
			// instructions.push(arguments.length)
			console.log(inputValue)
			
			for(var i=0;i<inputValue.length; i+=1){
				inputArray.push(inputValue[i])
			}
			// concat array and display set corridnates for robot on input page
			this.x = inputArray[0]
			this.y = inputArray[2]
			this.orientation = inputArray[4]
			console.log(inputValue)
			this.processInstructions()
			// this.outputCoordinates(output)
		},
		processInstructions:function(){
			console.log("PROCESSING INSTRUCTIONS")
			console.log(this.previousRobotLocation)		
			var yInt = parseInt(this.y)
			var xInt = parseInt(this.x)

			console.log(yInt)
			console.log(xInt)
			console.log(instructions) 
			
			// set of instructions, string, read string
			// REFACTOR

			/* loop through string of instrucctions, process each step. return final set of corrdinates*/
			for(var i=0; i<instructions.length; i+=1){
				console.log(instructions[i])
				if(instructions[i] === "F"){
					switch(this.orientation){
					case "N":
						console.log("gone north")
						yInt += 10
						console.log(yInt)
						break
					case "E":
						xInt += 1
						console.log(xInt)
						break
					case "S":
						yInt -= 10
						console.log(yInt)
						break
					case "W":
						xInt -= 1
						console.log(xInt)
						break;
					}
					console.log("GONE FORWARD FACING POSITION OF ORINTATION ============>",this.orientation)
					// this.checkRobotPosition(yInt, xInt)
				}
				// 
				if(instructions[i] === "R"){
					this.orientation = this.rotateLeftOrRight()
					console.log("Rotated Right Postion changed to =====>>", this.orientation)
					
				}						
				if(instructions[i] === "L"){
					this.orientation = this.rotateLeftOrRight(true)					
					console.log("Rotated left Postion changed to =====>>", this.orientation)
				}
			}
			this.x = xInt
			this.y = yInt
			console.log(this.x)
			console.log(this.y)
			console.log(this.orientation)


			// this.checkRobotPosition(x,y)	
			this.outputCoordinates()

		},
		checkRobotPosition:function(){
			
			// return x>50 || x<0 ? "LOST": "POO"

		
			if(this.x>50 || this.x<0){
				this.previousRobotLocation.x = this.x
				// return "LOST"

			}
			if(this.y>50 || this.y<0){
				this.previousRobotLocation.y = this.y
				// return "LOST"
				// add lost values to input box, use input box to check the values.
				// figure a way to check after each corindated is implemented/refactor code.

			}
		},
		outputCoordinates:function(){
			
			outPut.value = this.x + " " + this.y + " " + this.orientation + " " + this.checkPosition
			console.log(this.previousRobotLocation)
		},
		rotateLeftOrRight:function(left){
			console.log("switch statement")
			console.log(instructions)
			switch(this.orientation){
				case "N":
					this.orientation = left ? "W" : "E"
					// console.log(this.orientation)
					// return orientation
					break
				case "E":
					this.orientation = left ? "N": "S"
					// console.log(this.orientation)
					// return orientation
					break
				case "S":
					this.orientation = left ? "E":"W"
					// console.log(this.orientation)
					// return orientation
					break
				case "W":
					this.orientation = left ? "S": "N"
					// console.log(this.orientation)
					// return orientation
					break
				}
				console.log("Rotated Postion changed to =====>>" , this.orientation)
				return this.orientation
		}
		// determineInstruction:function(){
		// 	// if type of input containes number, 
		// 		// then fire of corrindates.
		// 	// var document.getElement

		// 	var inputValue = document.getElementById("instructionInput").value

		// 	/* temp white space test, regex test later  */
		// 	if (/\s/.test(inputValue)) {
		// 		/* not using double figures */
		// 		console.log("suitable cordinates")
		// 		for(var i = 0; i<inputValue.length; i +=1){
		// 			inputArray.push(inputValue[i])
		// 		}
		// 		console.log(inputArray)
		// 		this.inputCoordinates(inputArray[0],inputArray[1], inputArray[3])
		// 	}

		// }

	}
}
function showForm(){
	document.getElementById("robot-container").style.visibility = "visible";
}
function inputCoordinate(){
	
	
	// somehow process this value? split the string up


	var marsRobot = new Robot()
	marsRobot.inputCoordinates()
	// marsRobot.outputCoordinates()
}

	// var georgeRobot = new Robot(0,0)

	// georgeRobot.inputCoordinates(5,6,"N")
	// georgeRobot.processInstructions("FFRF")
	// // 16,26,E, 6

	// // y is 26, x is 6
	// georgeRobot.processInstructions("RFF")
// facing south
// y is 6

// submit button, get corrindates 
	// determine corrindates
