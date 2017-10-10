(function() {
  	function Message($firebaseArray) {
    	var Message = {};

    	var ref = firebase.database().ref().child('messages');
    	var messages = $firebaseArray(ref);

      Message.getByRoomId = function(roomId) {
        Message.messages = $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
      };

      Message.send = function () {
        var time = new Date();
        var h = time.getHours();
        var m = time.getMinutes();
        var s = time.getSeconds();

        if (h < 10) {
          h = '0' + h;
        }

        if (m < 10) {
          m = '0' + m;
        }

        if (s < 10) {
          s = '0' + s;
        }

        this.messages.$add(
          {
            content: this.message,
            roomId: this.currentRoomId,
            sentAt: h + ':' + m + ':' + s,
            username: this.currentUser
          });
      };

    	return Message;
  	}

	angular
		.module('blocChat')
		.factory('Message', ['$firebaseArray', Message]);
})();
