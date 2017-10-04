(function() {
  function BlocChatCookies($cookies, $uibModal, $rootScope) {

    $rootScope.currentUser = $cookies.get('blocChatCurrentUser');
    if (!$rootScope.currentUser || $rootScope.currentUser === '') {
      $uibModal.open({
        // Modal configuration object properties
        backdrop: 'static',
        templateUrl: '/templates/create_username_modal.html',
        controller: 'UserModalCtrl'
      })
    }
  }

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', '$rootScope', BlocChatCookies]);
})();
