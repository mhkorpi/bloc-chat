(function () {
  function Username ($cookies) {
    
    this.currentUser = $cookies.get('blocChatCurrentUser');

  angular
    .module('blocChat')
    .service('Username', ['$cookies', Username]);
})();
