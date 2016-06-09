angular.module('app.controllers', [])
  
.controller('resultatCtrl', function($scope) {

})
   
.controller('adminCtrl', function($scope, $firebaseArray) {
    var ref = firebase.database().ref().child("teams");
  // create a synchronized array
  $scope.teams = $firebaseArray(ref);
  // add new items to the array
  // the message is automatically added to our Firebase database!
  $scope.addTeam = function() {
    $scope.teams.$add({
      div: $scope.newTeamDiv,
      number: $scope.newTeamNumber

    });
  };
  
})
   
.controller('lagCtrl', function($scope) {

})
         
.controller('loginCtrl', function($scope) {

})
                                        //glöm ej e                                // state behöver vi för att kunna redirecta
.controller('signupCtrl', ['$scope', '$firebaseObject', '$firebaseArray', 'Auth', '$state',
  function($scope, $firebaseObject, $firebaseArray, Auth) {

    $scope.signUp = function (){
      Auth.$createUserWithEmailAndPassword($scope.user.email, $scope.user.password)
      .then(function(firebaseUser){
        console.log("User created with uid:", firebaseUser.uid);
        //här gör vi så att den skickar en till login sidan när man har registrerat ett konto
        $state.go('login');
      }).catch(function(error){
        console.log("oh no you have a error:", error);
      });
    };


}])
   
.controller('spelschemaCtrl', function($scope) {

})
 
