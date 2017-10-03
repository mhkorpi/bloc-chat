(function () {
	function RoomModalCtrl (Room, $scope, $uibModalInstance, $cookies) {

		$scope.create = function() {
			Room.add($scope.newRoomName);
			$uibModalInstance.close();
		};

		$scope.cancel = function() {
			$uibModalInstance.dismiss();
		};
	}

	angular
		.module('blocChat')
		.controller('RoomModalCtrl', ['Room', '$scope', '$uibModalInstance', '$cookies', RoomModalCtrl]);
})();
