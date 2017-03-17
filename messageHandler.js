var Chatty = (function (oldChatty) {

var messageElement = "";

		oldChatty.writeToDOM =  function(input) {
			var message = oldChatty.getMessageArray();
				for (var i = 0; i < message.length; i++) {
					var captureMessage = message[i];
					messageElement += `<div class="mssgText">${captureMessage} <button class="delMsg">Delete</button></div>`;
				}
					messageElement += `<div class="mssgText">${input} <button class="delMsg">Delete</button><button class="edMsg">Edit</button></div>`;
					output.innerHTML = messageElement;

		};
		oldChatty.editMgs = function (){

		}
	return oldChatty;

})(Chatty || {});
