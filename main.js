console.log("hi")

// x cant be over 50
// y cant be over 50
// output box returns values.

function RobotMovment(){
	var x = 0;
	var y = 0


}


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
			this.outputCoordinates(output)
			// concat array and display set corridnates for robot on input page
			this.startX = x
			this.startY = y
			this.orintation = orintation
			console.log(output)
		},
		processInstructions:function(instructions){
			console.log("MY STARTING X POSITION")

			console.log(this.startX)
			console.log("my orintation is E ")
			console.log(this.orintation)
			// set of instructions, string, read string
			// REFACTOR
			for(var i=0; i<instructions.length; i+=1){
				console.log(instructions[i])
				if(instructions[i] === "F"){
					switch(this.orintation){
					case "N":
						this.startY + 10
						break
					case "E":
						this.startY + 1
						break
					case "S":
						this.startY - 10
						break
					case "W":
						this.startX - 1
						break
					}
					console.log(this.orintation)	
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
					console.log(this.orintation)
				}						}
				if(instructions[i] === "L"){
					switch(this.orintation){
					case "N":
						this.orintation = "W"
						break
					case "E":
						this.orintation = "N"
						break
					case "S":
						this.orintation = "E"
						break
					case "W":
						this.orintation = "S"
						break
					}
					console.log(this.orintation)
				}
			}
		},
		outputCoordinates:function(output){
			
			// churn it out, into a displayable format
			console.log(output)
			// concat array???
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

georgeRobot.inputCoordinates(5,6,"E")
georgeRobot.processInstructions("F")