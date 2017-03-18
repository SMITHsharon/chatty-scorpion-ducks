var Chatty = (function (oldChatty) {
		oldChatty.addUserInput = function(input){
			var message = oldChatty.getMessageArray();
			message.push(input);
			oldChatty.writeToDOM(message);
		}

		oldChatty.writeToDOM =  function (messageArray) {
			var messageElement = "";
				for (var i = 0; i < messageArray.length; i++) {
					var captureMessage = messageArray[i];
					messageElement += `<div class="mssgText">${captureMessage}<button class="delMsg" id = "${i}">Delete</button><input class='play' type='button' value='🔊 Play' /></div>`;
				}
				output.innerHTML = messageElement;
		};
		
	return oldChatty;

})(Chatty || {});
