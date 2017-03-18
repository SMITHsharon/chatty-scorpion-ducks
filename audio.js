var Chatty = (function (oldChatty) {

	oldChatty.readText = function (readMsg){
		responsiveVoice.speak(readMsg);
	};

	return oldChatty;


})(Chatty || {});