(function() {
  function BlocChatCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    console.log(currentUser);
      if (!currentUser || currentUser === '') {
            $uibModal.open({
                templateUrl: 'templates/userModal.html',
                controller: 'UserModalCtrl as user',
                backdrop: 'static',
                keyboard: false
            });
    }
  }

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();