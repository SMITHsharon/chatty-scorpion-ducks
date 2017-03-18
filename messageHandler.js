var Chatty = (function (oldChatty) {
		oldChatty.addUserInput = function(input){
			var message = oldChatty.getMessageArray();
			console.log(message);
			
			message.push(input);
			oldChatty.writeToDOM(message);
			
		}

		oldChatty.writeToDOM =  function (messageArray) {
			var messageElement = "";
				for (var i = 0; i < messageArray.length; i++) {
					var captureMessage = messageArray[i];
					messageElement += `<div class="mssgText">${captureMessage}<button class="delMsg">Delete</button><button class="editMsg">Edit</button></div>`;
				}
				output.innerHTML = messageElement;

		};
		oldChatty.editMgs = function (){

		}
	return oldChatty;

})(Chatty || {});
