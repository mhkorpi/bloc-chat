(function() {
  function BlocChatCookies($cookies, $uibModal) {

    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {
      $uibModal.open({
        // Modal configuration object properties
        templateUrl: '/templates/create_username_modal.html',
        controller: 'ModalCtrl'
      })
    }
  }

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
