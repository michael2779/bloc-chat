(function() {
    
  function Room($firebaseArray) {
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);
    var messageReference = firebase.database().ref().child("messages").orderByChild('roomId');
      
      return {

        all : rooms,
        addRoom : function(roomTitle) {
            rooms.$add({name: roomTitle});
        }

        }
 }
  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);

})();
