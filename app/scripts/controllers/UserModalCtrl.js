(function () {
  function UserModalCtrl (Username, $cookies, $scope, $uibModalInstance) {
    $scope.login = function() {
			$cookies.put('blocChatCurrentUser', $scope.username);
      Username.currentUser = $scope.username;
			$uibModalInstance.close();
		}
  }

  angular
    .module('blocChat')
    .controller('UserModalCtrl', ['Username', '$cookies', '$scope', '$uibModalInstance', UserModalCtrl]);
})();
