var Chatty = (function (oldChatty) {
	
	// <deleteMsg> deletes the selected message from the array
	// * PARAMETER is the index array for the message
	// * calls writeToDOM to rewrite the screen
	oldChatty.deleteMsg = function(thisMessage) {

		var allMessages = Chatty.getMessageArray();
		allMessages.splice(thisMessage, 1);
		Chatty.writeToDOM(allMessages);
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