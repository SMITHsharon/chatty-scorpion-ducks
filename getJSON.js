
console.log("writing to console from getJSON.js");



//************************************************
// executes the XHR requests
//************************************************
// need to specify <executeWHATEVERAfterFileLoaded> for each
//************************************************
var myRequest1 = new XMLHttpRequest();
myRequest1.addEventListener("load", executeWHATEVERAfterFileLoaded);
myRequest1.addEventListener("error", executeThisCodeAfterFileFails);
myRequest1.open("GET", "message1.json");
myRequest1.send();

var myRequest2 = new XMLHttpRequest();
myRequest2.addEventListener("load", executeWHATEVERAfterFileLoaded);
myRequest2.addEventListener("error", executeThisCodeAfterFileFails);
myRequest2.open("GET", "message2.json");
myRequest2.send();

var myRequest3 = new XMLHttpRequest();
myRequest3.addEventListener("load", executeWHATEVERAfterFileLoaded);
myRequest3.addEventListener("error", executeThisCodeAfterFileFails);
myRequest3.open("GET", "message3.json");
myRequest3.send();

var myRequest4 = new XMLHttpRequest();
myRequest4.addEventListener("load", executeWHATEVERAfterFileLoaded);
myRequest4.addEventListener("error", executeThisCodeAfterFileFails);
myRequest4.open("GET", "message4.json");
myRequest4.send();

var myRequest5 = new XMLHttpRequest();
myRequest5.addEventListener("load", executeWHATEVERAfterFileLoaded);
myRequest5.addEventListener("error", executeThisCodeAfterFileFails);
myRequest5.open("GET", "message5.json");
myRequest5.send();


