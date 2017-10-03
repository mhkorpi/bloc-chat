(function () {
	function ModalCtrl (Room, $scope, $uibModalInstance, $cookies) {
		console.log('ModalCtrl.js test')

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
			console.log('username', $cookies.get('blocChatCurrentUser'));
		}
	}

	angular
		.module('blocChat')
		.controller('ModalCtrl', ['Room', '$scope', '$uibModalInstance', '$cookies', ModalCtrl]);
})();
