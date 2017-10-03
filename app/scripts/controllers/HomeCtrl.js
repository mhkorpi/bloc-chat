(function () {
	function HomeCtrl(Room, Message, $scope, $uibModal, $cookies) {
		$scope.rooms = Room.all;

		$scope.messages = null;

		$scope.currentUser = $cookies.get('blocChatCurrentUser');

		$scope.setUser = function () {
			$scope.currentUser = $cookies.get('blocChatCurrentUser');
			console.log($scope.currentUser);
		}	

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

		$scope.logout = function() {
			$cookies.remove('blocChatCurrentUser')
			$scope.currentUser = null;
		};

		$scope.newUser = function () {
			$uibModal.open({
				templateUrl: '/templates/create_username_modal.html',
        		controller: 'ModalCtrl'
			});
		}
	}

	angular
		.module('blocChat')
		.controller('HomeCtrl', ['Room', 'Message', '$scope', '$uibModal', '$cookies', HomeCtrl]);
})();
