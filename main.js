

console.log("writing to console from main.js");

// Function to detect enter key
var detectEnter = document.getElementById("userInput");

//variable to hold user input
var captureInput;

detectEnter.addEventListener("keyup", function(event){
    if(event.keyCode === 13){
    	event.preventDefault();
    	 console.log("I detected the enter key");
			 captureInput = detectEnter.value;
    	 console.log("this is what I typed:", captureInput);
        // Chatty.messageHandler(writeToDOM); //writeToDOM is just a placeholder
    }
});


// Function to detect click of the Clear All Messages button
var clearAllMsg = document.getElementById("clearBtn");

clearAllMsg.addEventListener("click", function(){
		Chatty.delete(clearAllMsgs);
});

// Function to change font size
var fontSize = document.getElementById("size");

fontSize.addEventListener("change", function(){
		console.log("I made it into the font func");
});

// Function to change theme
var changeColor = document.getElementById("theme");

changeColor.addEventListener("change", function(){
		changeTheme();
});

function changeTheme(){
	console.log("Im inside changeTheme");
}

