//****************************************************
// Event handler for <Enter> key
//****************************************************
var detectEnter = document.getElementById("userInput");

detectEnter.addEventListener("keyup", function(event){
    if(event.keyCode === 13){

        captureInput = detectEnter.value;
        Chatty.addUserInput(captureInput); //writeToDOM is just a placeholder
        if (captureInput != ""){
            clearAllMsgs.removeAttribute("disabled", true);
        };
        detectEnter.value = "";
    }
});


function whichButton(){
    if (event.target.className.includes("delMsg")){
        Chatty.deleteMsg(event.target.id);
    }
    
    else if(event.target.className.includes("play")){
        clickText = event.target.parentNode.firstChild.textContent;
        Chatty.readText(clickText);
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
    clearAllMsgs.setAttribute("disabled", true);
});



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