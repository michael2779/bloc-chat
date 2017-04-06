(function(){
  function LandingCtrl (Room) {
    this.roomObject = Room;
  }

  angular
    .module('blocChat')
    .controller('LandingCtrl', ['Room', LandingCtrl]);
})();