var Chatty = (function (oldChatty) {

	return {
		writeToDOM: function(message) {
			console.log("I'm inside write");
			var message += messageArray;
			message.innerHTML = `${messageArray}`;
		},
		editMgs: function (){

		}
	}

};
	// return oldChatty;

})(Chatty || {});
