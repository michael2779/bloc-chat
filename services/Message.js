(function() {
    function Message($firebaseArray, $cookies) {    
        
        var ref = firebase.database().ref().child("messages");
        var messages = $firebaseArray(ref);
        
        return {
            getByRoomId: function (roomId) {
               console.log(roomId);
                // Filter the messages by their room ID.
                return $firebaseArray(ref.orderByChild('roomid').equalTo(roomId));
            },
            send: function(newMessage, sendRoomId) {//object with multiple properties
                messages.$add({
                    username: $cookies.get('blocChatCurrentUser'),
                    content: newMessage,
                    sentAt: Date.now(),
                    roomid: sendRoomId
                });
            }
        };
    }

    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', '$cookies', Message]);
})();