angular.module('app.controllers', [])
  
.controller('resultatCtrl', ['$scope', '$firebaseObject', '$firebaseArray', 'Auth', '$state',
  function($scope, $firebaseObject, $firebaseArray, Auth, $state) {

}])
   
.controller('adminCtrl', ['$scope', '$firebaseObject', '$firebaseArray', 'Auth', '$state',
  function($scope, $firebaseObject, $firebaseArray, Auth, $state) {
    var ref = firebase.database().ref();
    var game = ref.child('game');
    var team = $firebaseArray(game);
    var url = ref.toString(); 
    
    $scope.addTeam = function() {
    
    // create
    team.$add({
      'number': $scope.admin.team.number,  
      'year': $scope.admin.team.year, 
      'date': $scope.admin.team.date.toString('dddd, dd MMMM yyyy'), 
      'time': $scope.admin.team.time.toString('HH:mm'),  
      'court': $scope.admin.team.court, 
      'home': $scope.admin.team.home,
      'away': $scope.admin.team.away, 
    
    }).then(function(data){  
    console.log(data);
  }); 
    //$location.path('/')
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
    var ref = firebase.database().ref();
    var game = ref.child('game');
    var team = $firebaseArray(game);

    $scope.teams = team;

}]);


 
