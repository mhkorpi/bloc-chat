(function () {
  function UserModalCtrl ($cookies, $scope, $rootScope,  $uibModalInstance) {

    $scope.login = function() {
			$cookies.put('blocChatCurrentUser', $scope.username);
      $rootScope.currentUser = $scope.username;
			$uibModalInstance.close();
		}
  }

  angular
    .module('blocChat')
    .controller('UserModalCtrl', ['$cookies', '$scope', '$rootScope', '$uibModalInstance', UserModalCtrl]);
})();
