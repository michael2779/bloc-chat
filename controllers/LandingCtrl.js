(function(){
  function LandingCtrl (Room, $uibModal) {
    this.roomObject = Room.all;
    
    this .addRoom = function(roomName) {
        Room.addRoom(roomName);
    }
    
    this.open = function() {
        $uibModal.open({
            templateUrl: '/templates/window.html',
            controller: 'AddWindowCtrl as window'
        });
    };
    
    this.dismiss = function() {
        $uibModal.dismiss();
    };
  }

  angular
    .module('blocChat')
    .controller('LandingCtrl', ['Room', '$uibModal', LandingCtrl]);
})();