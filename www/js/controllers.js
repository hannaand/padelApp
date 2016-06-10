angular.module('app.controllers', [])
  
.controller('resultatCtrl', function($scope) {

})
   
.controller('adminCtrl', ['$scope', '$firebaseObject', '$firebaseArray', 'Auth', '$state',
  function($scope, $firebaseObject, $firebaseArray, Auth, $state) {
    var ref = firebase.database.ref();
    var team = $firebaseArray(ref);
    
    $scope.addTeam = function() {
    
    // create
    team.$add({
      div: $scope.admin.team.div, 
      number: $scope.admin.team.number, 
      year: $scope.admin.team.year, 
      date: $scope.admin.team.date,
      time: $scope.admin.team.time, 
      court: $scope.admin.team.court, 
      home: $scope.admin.team.home, 
      away: $scope.admin.team.away,
  });
    $location.path('/')
  };

}])
   
.controller('lagCtrl', function($scope) {

})
         
.controller('loginCtrl', ['$scope', '$firebaseObject', '$firebaseArray', 'Auth', '$state',
  function($scope, $firebaseObject, $firebaseArray, Auth, $state) {

    $scope.auth = Auth;

    $scope.auth.$onAuthStateChanged(function(firebaseUser) {
      if (firebaseUser) {
      $scope.firebaseUser = firebaseUser;
      console.log("logged in as :", firebaseUser.uid);
    $state.go('tabsController.resultat');
    } else {
      $scope.firebaseUser = null;
      console.log("You are not logged in");
    }

    });

    $scope.logOut = function(){
      $scope.auth.$signOut();
    };


    $scope.login = function(){
      $scope.auth.$signInWithEmailAndPassword($scope.user.email, $scope.user.password)
      .then(function(authData){
      console.log("logged user in with uid:", authData.uid);
    }).catch(function(error){
      console.log("oh no someting happend:", error);
    });
  };

}])

.controller('signupCtrl', ['$scope', '$firebaseObject', '$firebaseArray', 'Auth', '$state',
  function($scope, $firebaseObject, $firebaseArray, Auth, $state) {

    $scope.signUp = function (){
      Auth.$createUserWithEmailAndPassword($scope.user.email, $scope.user.password)
      .then(function(firebaseUser){
        console.log("User created with uid:", firebaseUser.uid);
        console.log("redirect user to login page");

        //här skickas man till login sidan när man registrerat ett konto
        $state.go('login');
      }).catch(function(error){
        console.log("oh no you have a error:", error);
      });
    };


}])
   
.controller('spelschemaCtrl', ['$scope', '$firebaseObject', '$firebaseArray', 'Auth', '$state',
  function($scope, $firebaseObject, $firebaseArray, Auth, $state) {
    var ref = firebase.database.ref();
    var team = $firebaseArray(ref);

    $scope.teams = $firebaseArray(teams);

}]);


 
