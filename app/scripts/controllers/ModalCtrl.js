(function () {
	function ModalCtrl (Room, $scope, $uibModal) {

		$scope.create = function() {
			var newRoomName = document.getElementById('new-room-name').value;
			Room.add(newRoomName);
			$scope.cancel();
		};

		$scope.cancel = function() {
			Room.modal.dismiss('cancel');
		};
	}

	angular
		.module('blocChat')
		.controller('ModalCtrl', ['Room', '$scope', '$uibModal', ModalCtrl]);
})();