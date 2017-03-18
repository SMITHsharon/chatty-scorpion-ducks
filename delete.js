
var Chatty = (function (oldChatty) {
	
	oldChatty.deleteMsg = function() {
		// messageArray.push(msg1) // from getJSON.js
		// waiting on <messageHandler> structure
	};

	oldChatty.clearAllMsgs = function() {
		console.log("in delete.clearAllMsgs");
		var allMessages = Chatty.getMessageArray();
		console.log("messageArray :: ", allMessages);
		for (var i=0; i<allMessages.length; i++) {
			allMessages.shift();
			console.log("messageArray; i :: ", i, allMessages);
		}
		
		Chatty.writeToDOM(allMessages);
	};

		return oldChatty;

})(Chatty || {});
