angular.module('myModule', ['Devise']).
config(function(AuthProvider) {
    // Configure Auth service with AuthProvider

}).
controller('myCtrl', function(Auth) {
    // Use your configured Auth ser
    Auth.currentUser().then(function(user) {
        // User was logged in, or Devise returned
        // previously authenticated session.
        console.log(user); // => {id: 1, ect: '...'}
    }, function(error) {
        // unauthenticated error
    });
});
