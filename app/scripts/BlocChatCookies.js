(function() {
  function BlocChatCookies($cookies, $uibModal, Username) {

    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!Username.currentUser || Username.currentUser === '') {
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
    .run(['$cookies', '$uibModal', 'Username', BlocChatCookies]);
})();
