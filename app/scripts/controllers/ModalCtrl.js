(function () {
	function ModalCtrl (Room, $scope, $uibModalInstance, $cookies) {

		$scope.create = function() {
			Room.add($scope.newRoomName);
			$uibModalInstance.close();
		};

		$scope.cancel = function() {
			$uibModalInstance.dismiss();
		};

		$scope.login = function() {
			$cookies.put('blocChatCurrentUser', $scope.username);
			$uibModalInstance.close();
			console.log('currentUser', $scope.currentUser)
			}
	}

	angular
		.module('blocChat')
		.controller('ModalCtrl', ['Room', '$scope', '$uibModalInstance', '$cookies', ModalCtrl]);
})();
