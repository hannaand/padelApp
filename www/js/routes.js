angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.resultat', {
    url: '/page1',
    views: {
      'tab1': {
        templateUrl: 'templates/resultat.html',
        controller: 'resultatCtrl'
      }
    }
  })

  .state('admin', {
    url: '/page5',
    templateUrl: 'templates/admin.html',
    controller: 'adminCtrl'
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.lag'
      2) Using $state.go programatically:
        $state.go('tabsController.lag');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page3/tab1/page2
      /page3/tab2/page2
  */
  .state('tabsController.lag', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/lag.html',
        controller: 'lagCtrl'
      },
      'tab2': {
        templateUrl: 'templates/lag.html',
        controller: 'lagCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page3',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('login', {
    url: '/page9',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signup', {
    url: '/page10',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('tabsController.spelschema', {
    url: '/page11',
    views: {
      'tab3': {
        templateUrl: 'templates/spelschema.html',
        controller: 'spelschemaCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page3/page1')

  

});