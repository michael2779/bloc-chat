(function(){
  function LandingCtrl (Message, Room, $uibModal) {
    this.roomObject = Room.all;
    this.messages = {};
      
    this.addRoom = function(roomName) {
        Room.addRoom(roomName);
    }
    
    this.open = function() {
        $uibModal.open({
            templateUrl: '/templates/window.html',
            controller: 'AddWindowCtrl as window'
        });
    };
      
     this.selectRoom = function(roomId) {
            this.currentRoom = roomId;
            this.messages = Message.getByRoomId(roomId);
            console.log(this.messages);
        }  
      
      
    this.dismiss = function() {
        $uibModal.dismiss();
    };
  }

  angular
    .module('blocChat')
    .controller('LandingCtrl', ['Message', 'Room', '$uibModal', LandingCtrl]);
})();