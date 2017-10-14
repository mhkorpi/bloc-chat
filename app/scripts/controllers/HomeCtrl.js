(function () {
	function HomeCtrl(Room, Message, $scope, $rootScope, $uibModal, $cookies) {

		$scope.message = '';

		$scope.rooms = Room.all;

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

		$scope.send = function () {
			// send info on HomeCtrl scope to Message factory
			Message.message = $scope.message;
			Message.currentRoomId = $scope.currentRoomId;
			Message.currentUser = $scope.currentUser;

			// add message to firebase array
			Message.send();

			// reset message field
			(function clearMessage () {
				$scope.message = '';
			})();
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
