console.log("hi")

// x cant be over 50
// y cant be over 50
// output box returns values.

function RobotMovment(){
	var x = 0;
	var y = 0


}

// factor fall of edge
// output now works coirindates are in place
	// chdck that this is right process, write notepad
	// refactor case state into ulties function
// add form input

// 

function Robot(startX,startY){
	this.startX = startX ? startX: 0;
	this.startY = startY ? startY: 0;
	this.orintation = "N"
	var instructions = []
	var output = []
	// need a checker to determine weather direct corrindates specified or 
		// list of instructions
	function checkPosition(x,y){
		// if y is greater than 50
		// if x is greater than 50
	}
	return {
		inputCoordinates: function(x,y,orintation){
			// instructions.push(arguments.length)
			for(var i=0;i<arguments.length; i+=1){
				output.push(arguments[i])
			}
			
			// concat array and display set corridnates for robot on input page
			this.startX = x
			this.startY = y
			this.orintation = orintation
			console.log(output)

			this.outputCoordinates(output)
			// this.outputCoordinates(output)
		},
		processInstructions:function(instructions){
			console.log("MY STARTING X POSITION")
			console.log(arguments.length)
			console.log(instructions)
			console.log(this.startX)
			console.log("my orintation is ")
			console.log(this.orintation)
			// set of instructions, string, read string
			// REFACTOR

			/* loop through string of instrucctions, process each step. return final set of corrdinates*/
			for(var i=0; i<instructions.length; i+=1){
				console.log(instructions[i])
				if(instructions[i] === "F"){
					switch(this.orintation){
					case "N":
						console.log("gone north")
						this.startY +=10
						break
					case "E":
						console.log("gone Eash")
						this.startX += 1
						break
					case "S":
						this.startY -= 10
						break
					case "W":
						this.startX -= 1
						break;
					}
					console.log("GONE FORWARD FACING POSITION OF ORINTATION ============>",this.orintation)
					console.log(this.startY)	
					console.log(this.startX)
				}
				if(instructions[i] === "R"){
					switch(this.orintation){
					case "N":
						this.orintation = "E"
						break
					case "E":
						this.orintation = "S"
						break
					case "S":
						this.orintation = "W"
						break
					case "W":
						this.orintation = "N"
						break
					}
					console.log("Rotated Right Postion changed to =====>>")
					console.log(this.orintation)
				}						
				if(instructions[i] === "L"){
					switch(this.orintation){
					case "N":
						this.orintation = "W"
						
					case "E":
						this.orintation = "N"
						
					case "S":
						this.orintation = "E"
						
					case "W":
						this.orintation = "S"
					
					}
					console.log("Rotated LEFT Postion changed to =====>>")
					console.log(this.orintation)
				}
			}
			/* input final Coordinates */
			this.inputCoordinates(this.startX,this.startY,this.orintation)

		},
		checkRobotPosition:function(){
			checkPosition()
		},
		outputCoordinates:function(output){
			
			// churn it out, into a displayable format
			console.log(output)
			// concat array and display back onto sep form
		},
		rotateLeft:function(orintation){

		},
		rotateRight:function(orintation){

		}

	}
}

function outputCoordinates(x,y,orintation){
	console.log(x,y)

}

var georgeRobot = new Robot(0,0)

georgeRobot.inputCoordinates(5,6,"N")
georgeRobot.processInstructions("FFRF")
// 16,26,E, 6

// y is 26, x is 6
georgeRobot.processInstructions("RFF")

// facing south
// y is 6
