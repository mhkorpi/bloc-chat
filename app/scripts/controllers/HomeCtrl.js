(function () {
	function HomeCtrl(Room, Message, $scope, $uibModal) {
		$scope.rooms = Room.all;

		$scope.messages = null;

		$scope.setRoom = function(room) {
			$scope.currentRoom = room.$value;

			Message.getByRoomId(room.$id);
			$scope.messages = Message.messages;
		};

		$scope.open = function () {
			$uibModal.open({
				templateUrl: '/templates/create_room_modal.html',
				controller: 'ModalCtrl'
			});
		};
	}

	angular
		.module('blocChat')
		.controller('HomeCtrl', ['Room', 'Message', '$scope', '$uibModal', HomeCtrl]);
})();
