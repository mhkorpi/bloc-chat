(function() {
  	function Message($firebaseArray) {
    	var Message = {};

    	var ref = firebase.database().ref().child('messages');
    	var messages = $firebaseArray(ref);

    	Message.getByRoomId = function(roomId) {
			ref.orderByChild('roomId').equalTo(roomId).on('value', function(snapshot) {
				Message.messages = snapshot.val();
			});
    	};

    	return Message;
  	}

	angular
		.module('blocChat')
		.factory('Message', ['$firebaseArray', Message]);
})();