(function () {
	function ModalCtrl (Room, $scope, $uibModal, $document) {

		$scope.create = function() {
			var newRoomName = document.getElementById('new-room-name').value;
			Room.add(newRoomName);
		};

		$scope.cancel = function() {
	
		};
	}

	angular
		.module('blocChat')
		.controller('ModalCtrl', ['Room', '$scope', '$uibModal', '$document', ModalCtrl]);
})();