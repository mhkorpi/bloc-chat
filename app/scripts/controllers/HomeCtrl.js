(function () {
	function HomeCtrl(Room, Message, $scope, $rootScope, $uibModal, $cookies) {

		$scope.rooms = Room.all;

		$scope.messages = null;

		$scope.$watch($rootScope.currentUser);

		$scope.setRoom = function(room) {
			$scope.currentRoom = room.$value;
			$scope.currentRoomId = room.$id;
			Message.getByRoomId(room.$id);
			$scope.messages = Message.messages;
		};

		$scope.open = function () {
			$uibModal.open({
				templateUrl: '/templates/create_room_modal.html',
				controller: 'RoomModalCtrl'
			});
		};

		$scope.logout = function() {
			$cookies.remove('blocChatCurrentUser')
			$rootScope.currentUser = null;
			$scope.currentRoom = null;
			$scope.messages = null;
		};

		$scope.send = function(roomId, currentMessage) {
			// ... logic for filtering messages
			currentMessage = $scope.message;
			Message.messages.$add(
				{
					content: currentMessage,
					roomId: $scope.currentRoomId,
					sentAt: 'test',
					username: $scope.currentUser
				});
		}

		$scope.newUser = function () {
			$uibModal.open({
				backdrop: 'static',
				templateUrl: '/templates/create_username_modal.html',
				controller: 'UserModalCtrl'
			});
		};
	}

	angular
		.module('blocChat')
		.controller('HomeCtrl', ['Room', 'Message', '$scope', '$rootScope', '$uibModal', '$cookies', HomeCtrl]);
})();
