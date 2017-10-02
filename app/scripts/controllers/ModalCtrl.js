(function () {
	function ModalCtrl (Room, $scope, $uibModalInstance) {
		console.log('ModalCtrl.js test')

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
		.controller('ModalCtrl', ['Room', '$scope', '$uibModalInstance', ModalCtrl]);
})();
