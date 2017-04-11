(function(){
  function LandingCtrl (Message, Room, $uibModal) {
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
      
     this.selectRoom = function(room) {
            this.currentRoom = room;
            this.messages = Message.getByRoomId(room.$id);
        }  
      
      
    this.dismiss = function() {
        $uibModal.dismiss();
    };
  }

  angular
    .module('blocChat')
    .controller('LandingCtrl', ['Message', 'Room', '$uibModal', LandingCtrl]);
})();