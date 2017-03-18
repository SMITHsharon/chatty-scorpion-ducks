
var Chatty = (function (oldChatty) {
	
	oldChatty.deleteMsg = function() {
		// messageArray.push(msg1) // from getJSON.js
		// waiting on <messageHandler> structure
	};

	// <clearAllMsgs> clears all messages from the screen
	// * Deletes all entries from <messageArray>
	// * calls writeToDOM to rewrite the screen
	oldChatty.clearAllMsgs = function() {

		var allMessages = Chatty.getMessageArray();
		for (var i=allMessages.length; i>0; i--) {
			allMessages.shift();
		};
		Chatty.writeToDOM(allMessages);
	};



		return oldChatty;


})(Chatty || {});
