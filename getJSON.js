var Chatty = (function(){

	var myRequest1 = new XMLHttpRequest();
	var myRequest2 = new XMLHttpRequest();
	var myRequest3 = new XMLHttpRequest();
	var myRequest4 = new XMLHttpRequest();
	var myRequest5 = new XMLHttpRequest();

	var messageArray = [];
	function addMsg1(xhrOneData){
		var msg1=xhrOneData.message1;
		console.log(msg1);
		messageArray.push(msg1);
	}
	function addMsg2(xhrTwoData){
		var msg2=xhrTwoData.message2;
		console.log(msg2);
		messageArray.push(msg2);
	}
	function addMsg3(xhrThreeData){
		var msg3=xhrThreeData.message3;
		console.log(msg3);
		messageArray.push(msg3);
	}
	function addMsg4(xhrFourData){
		var msg4=xhrFourData.message4;
		console.log(msg4);
		messageArray.push(msg4);
	}
	function addMsg5(xhrFiveData){
		var msg5=xhrFiveData.message5;
		console.log(msg5);
		messageArray.push(msg5);
		return messageArray;	
	}
	function executeThisCodeAfterFileFails(){
		console.log("boooooo");
	}
	function executeThisCodeAfterFileLoaded(){
		var data = JSON.parse(this.responseText);

		addMsg1(data);
		myRequest2.addEventListener("load", executeThisCodeAfterFileLoaded2);
		myRequest2.addEventListener("error", executeThisCodeAfterFileFails);
		myRequest2.open("GET", "message2.json");
		myRequest2.send();
	}
	function executeThisCodeAfterFileLoaded2(){
		var data = JSON.parse(this.responseText);

		addMsg2(data);
		myRequest3.addEventListener("load", executeThisCodeAfterFileLoaded3);
		myRequest3.addEventListener("error", executeThisCodeAfterFileFails);
		myRequest3.open("GET", "message3.json");
		myRequest3.send();
	}
	function executeThisCodeAfterFileLoaded3(){
		var data = JSON.parse(this.responseText);

		addMsg3(data);
		myRequest4.addEventListener("load", executeThisCodeAfterFileLoaded4);
		myRequest4.addEventListener("error", executeThisCodeAfterFileFails);
		myRequest4.open("GET", "message4.json");
		myRequest4.send();
	}
	function executeThisCodeAfterFileLoaded4(){
		var data = JSON.parse(this.responseText);

		addMsg4(data);
		myRequest5.addEventListener("load", executeThisCodeAfterFileLoaded5);
		myRequest5.addEventListener("error", executeThisCodeAfterFileFails);
		myRequest5.open("GET", "message5.json");
		myRequest5.send();
	}
	function executeThisCodeAfterFileLoaded5(){
		var data = JSON.parse(this.responseText);

		addMsg5(data);
	}
	
	//************************************************
	// executes the XHR requests
	//************************************************
	// need to specify <executeWHATEVERAfterFileLoaded> for each
	//************************************************
	myRequest1.addEventListener("load", executeThisCodeAfterFileLoaded);
	myRequest1.addEventListener("error", executeThisCodeAfterFileFails);
	myRequest1.open("GET", "message1.json");
	myRequest1.send();
	

})(Chatty);