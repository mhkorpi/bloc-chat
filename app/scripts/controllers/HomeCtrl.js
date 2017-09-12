(function () {
	function HomeCtrl(Room, Message, $scope, $uibModal) {
		$scope.rooms = Room.all;

		$scope.messages = null;

		$scope.setRoom = function(room) {
			var titleElement = document.getElementById('room-title');
			titleElement.textContent = room.$value;
		
			Message.getByRoomId(room.$id);
			$scope.messages = Message.messages;
			console.log('current room messages', $scope.messages)
		};

		$scope.open = function () {
			$uibModal.open({
				templateUrl: '/templates/create_room_modal.html',
				controller: 'ModalCtrl'
			});
		};;
	}

	angular
		.module('blocChat')
		.controller('HomeCtrl', ['Room', 'Message', '$scope', '$uibModal', HomeCtrl]);
})();