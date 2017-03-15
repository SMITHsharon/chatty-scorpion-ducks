var Chatty = (function(){

	return 
});


// Function to detect enter key
var detectEnter = document.getElementById("userInput");

//variable to hold user input
var captureInput = detectEnter.value;

detectEnter.addEventListener("keypress", function(event){
    if(event.keyCode === 13){
    	// console.log("I detected the enter key");
			console.log(captureInput);
        Chatty.messageHandler(writeToDOM); //writeToDOM is just a placeholder
    }
});


// Function to detect click of the Clear All Messages button
var clearAllMsg = document.getElementById("clearBtn");

clearAllMsg.addEventListener("click", function(){
		Chatty.delete(clearAllMsgs);
});
