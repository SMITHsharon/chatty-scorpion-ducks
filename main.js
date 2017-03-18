


//****************************************************
// Event handler for <Enter> key
//****************************************************
var detectEnter = document.getElementById("userInput");

//variable to hold user input

detectEnter.addEventListener("keyup", function(event){
    if(event.keyCode === 13){

		captureInput = detectEnter.value;
        Chatty.addUserInput(captureInput); //writeToDOM is just a placeholder

        detectEnter.value = "";
    }
});

function whichButton(){
    if (event.target.className==="delMsg"){
        Chatty.deleteMsg();
    }
    // } else if (event.target.className==="edMsg"){
    //     console.log(Chatty.addUserInput());
    //     // Chatty.editMsg(event.target.parentNode.firstChild.textContent);
    // } 
    else if(event.target.className==="readMsg"){

    };

}
output.addEventListener("click", whichButton);

function whichButton(){
    if (event.target.className==="delMsg"){
        // console.log("delete message event", event);
        // console.log("event.target", event.target);
        // console.log("event.target.parentNode.parentNode", event.target.parentNode.parentNode);
        Chatty.deleteMsg(event.target);
    } else if (event.target.className==="edMsg"){
        Chatty.editMsg();
    };

}
output.addEventListener("click", whichButton);



//****************************************************
// Event handler for <Clear Message Board> button
// When user clicks <Clear Message Board>
// calls <clearAllMsgs> to clear all messages from the screen
//****************************************************
var clearAllMsgs = document.getElementById("clearBtn");

clearAllMsgs.addEventListener("click", function(){
    Chatty.clearAllMsgs();
});



//****************************************************
// Event handler for <Delete> button on individual messages
// When user clicks <Delete> on a particular message
// calls <deleteMsg> to delete that message from the array and screen
//****************************************************
// var delMsgButton = document.getElementsByClassName("delMsg");

// delMsgButton.addEventListener("click", function(event){
//     console.log("delete message event", event);
//     Chatty.deleteMsg();
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


