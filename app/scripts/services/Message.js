(function() {
  	function Message($firebaseArray) {
    	var Message = {};

    	var ref = firebase.database().ref().child('messages');
    	var messages = $firebaseArray(ref);

      Message.getByRoomId = function(roomId) {
        Message.messages = $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
      };

      Message.send = function(roomId) {
        // ... logic for filtering messages
      }

    	return Message;
  	}

	angular
		.module('blocChat')
		.factory('Message', ['$firebaseArray', Message]);
})();
