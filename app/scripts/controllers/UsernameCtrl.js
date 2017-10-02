(function () {
	function UsernameCtrl (BlocChatCookies, $scope, $uibModalInstance) {
    console.log('UsernameCtrl.js test');

		$scope.login = function() {
      $cookies.put(blocChatCurrentUser, $scope.username);
			$uibModalInstance.close();
      console.log($cookies.get(blocChatCurrentUser));
		};
	}

	angular
		.module('blocChat')
		.controller('UsernameCtrl', ['BlocChatCookies', '$cookies', '$scope', '$uibModalInstance', UsernameCtrl]);
})();
