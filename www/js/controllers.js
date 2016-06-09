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

.controller('signupCtrl', ['$scope', '$firebaseObject', '$firebaseArray', 'Auth', '$state',
  function($scope, $firebaseObject, $firebaseArray, Auth) {

    $scope.signUp = function (){
      Auth.$createUserWithEmailAndPassword($scope.user.email, $scope.user.password)
      .then(function(firebaseUser){
        console.log("User created with uid:", firebaseUser.uid);


        $state.go('login');
      }).catch(function(error){
        console.log("oh no you have a error:", error);
      });
    };


}])
   
.controller('spelschemaCtrl', function($scope) {

})
 
