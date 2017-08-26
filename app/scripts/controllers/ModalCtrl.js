(function () {
	function ModalCtrl ($scope, $uibModal) {
		$scope.create = function() {

		};

		$scope.cancel = function() {
	
		};
	}

	angular
		.module('blocChat')
		.controller('ModalCtrl', ['$scope', '$uibModal', ModalCtrl]);
})();