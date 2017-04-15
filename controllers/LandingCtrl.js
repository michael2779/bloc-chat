(function(){
  function LandingCtrl (Message, Room, $uibModal, $cookies) {
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
        

              (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
              (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
              m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
              })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

              ga('create', 'UA-20586624-2', 'auto');
              ga('send', 'pageview');


        
    }
    
    this.send = function () {
        Message.send(this.newMessage, this.currentRoom);
        this.newMessage = "";
    }
      
      
    this.dismiss = function() {
        $uibModal.dismiss();
    };
  
  }

  angular
    .module('blocChat')
    .controller('LandingCtrl', ['Message', 'Room', '$uibModal', '$cookies', LandingCtrl]);
})();