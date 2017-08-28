(function () {
	function ModalCtrl (Room, $scope, $uibModalInstance) {

		$scope.create = function() {
			var newRoomName = document.getElementById('new-room-name').value;
			Room.add(newRoomName);
			$scope.cancel();
		};

		$scope.cancel = function() {
			$uibModalInstance.dismiss();
		};
	}

	angular
		.module('blocChat')
		.controller('ModalCtrl', ['Room', '$scope', '$uibModalInstance', ModalCtrl]);
})();