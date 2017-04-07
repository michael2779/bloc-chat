(function(){
  function LandingCtrl (Room) {
    this.roomObject = Room.all;
    this .addRoom = function(roomName) {
        Room.addRoom(roomName);
    }
  }

  angular
    .module('blocChat')
    .controller('LandingCtrl', ['Room', LandingCtrl]);
})();