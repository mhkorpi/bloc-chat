(function () {
	function HomeCtrl(Room, $scope, $uibModal) {
		$scope.rooms = Room.all;

		$scope.open = function () {
			$uibModal.open({
				templateUrl: '/templates/create_room_modal.html',
				controller: 'ModalCtrl',

			});
		};
	}

	angular
		.module('blocChat')
		.controller('HomeCtrl', ['Room', '$scope', '$uibModal', HomeCtrl]);
})();