var Chatty = (function (oldChatty) {
		oldChatty.addUserInput = function(input){
			var message = oldChatty.getMessageArray();
			message.push(input);
			oldChatty.writeToDOM(message);
			return message;
		}

		oldChatty.writeToDOM =  function (messageArray) {
			var messageElement = "";
				for (var i = 0; i < messageArray.length; i++) {
					var captureMessage = messageArray[i];
					messageElement += `<div class="mssgText">${captureMessage}<button class="delMsg" id = "delMsg${i}">Delete</button><button class="readMsg"><img src="http://franriavilla.in/images/unmute.png"></button></div>`;
				}
				output.innerHTML = messageElement;
		};
		
		oldChatty.editMsg = function (editEvent){
			for (var j=0; j<message.lenght; j++){
				if (messageArray[j]===editEvent ){
					console.log(editEvent, "replace text")
				};
			}
		}
	return oldChatty;

})(Chatty || {});
