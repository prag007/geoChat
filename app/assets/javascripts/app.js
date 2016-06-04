var geoChat = angular.module('myModule', ['Devise', 'ngResource']).
config(function(AuthProvider) {
    // Configure Auth service with AuthProvider

}).
controller('myCtrl', function(Auth, http) {
    $scope.message = {};
    $scope.messageSave = function()
        {
            http.post('/message/new', {Message: $scope.message})
        };
    // Use your configured Auth ser
    Auth.currentUser().then(function(user) {
        // User was logged in, or Devise returned
        // previously authenticated session.
        console.log(user); // => {id: 1, ect: '...'}
    }, function(error) {
        // unauthenticated error
    });
});
geoChat.factory("Message", function($resource)
    {
    return $resource("message/:id", {id: '@id'},
        {
            index: {method: 'GET', responseType: 'json'},
            update: {method: 'PUT', responseType: 'json'}
        });

    });
geoChat.controller("messageController", function($scope, Message){
    $scope.messages = Message.index();
    $scope.addMessage = function(){
        message = Message.save($scope.newMessage);
        $scope.messages.push(message);
        $scope.newMessage = {};
    }
} );



