
//****************************************************
// Event handler for <Enter> key
//****************************************************
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
// var fontSize = document.getElementById("size");

// fontSize.addEventListener("change", function(){
// 		console.log("I made it into the font func");
// });


//****************************************************
// Event handler and Function to toggle to <DarkTheme>
// then back to initial state <initState>
//****************************************************
var changeColor = document.getElementById("theme");
var screenBackground = document.getElementById("container");

// vars <messageHolders> and <messageText> to be generated dynamically
// when writing to DOM
var messageHolders = document.getElementsByClassName("mssgText");
var messageText = document.getElementsByClassName("mssgText").innerHTML;
var themeFlag = "initState";

changeColor.addEventListener("change", function(){
	toggleTheme();
});


function toggleTheme(){

    
	if (themeFlag === "initState") {

        themeFlag = "darkTheme";
        screenBackground.style.backgroundColor = "darkgrey";
        for (var i=0; i<messageHolders.length; i++) {
// console.log("messageHolders[i].innerHTML :: i,", i, messageHolders[i].innerHTML);

            messageHolders[i].style.color = "white";
        } // forloop
        
    } else {
        // current theme is <darkTheme>
        themeFlag = "initState";
        screenBackground.style.backgroundColor = "white";
        for (var i=0; i<messageHolders.length; i++) {
            messageHolders[i].style.color = "black";
        } // for loop
    } // else
} // function toggleTheme


//****************************************************
// Event handler and Function to toggle to <Large Text>
// then back to initial state
//****************************************************
var changeFontSize = document.getElementById("size");
var fontFlag = "initState";

changeFontSize.addEventListener("change", function(){
    toggleFont();
});

function toggleFont(){

    if (fontFlag === "initState") {
        fontFlag = "largeFont";
        for (var i=0; i<messageHolders.length; i++) {
// console.log("messageHolders[i].innerHTML :: i,", i, messageHolders[i].innerHTML);
            messageHolders[i].style.fontSize = "2.0em";
        } // forloop
        
    } else {
        // current font is <largeFont>
        fontFlag = "initState";
        for (var i=0; i<messageHolders.length; i++) {
            messageHolders[i].style.fontSize = "1em";
        } // for loop
    } // else
} // function toggleFont


