(function() {
  function BlocChatCookies($cookies, $uibModal) {
    console.log('username.js test')
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {
      $uibModal.open({
        // Modal configuration object properties
        templateUrl: '/templates/create_username_modal.html',
        controller: 'UsernameCtrl'
      })
    }
  }

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
