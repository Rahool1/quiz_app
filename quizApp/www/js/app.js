// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('quizApp', ['ionic', 'quizApp.controllers'])
.constant('ApiEndpoint', {
  url: 'http://quizapp.contrailtech.com'
})
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'quizCtrl'
  })

  .state('app.test', {
    url: "/test",
    views: {
      'menuContent': {
        templateUrl: "templates/testCategory.html",
        controller: 'TestCtrl'
      }
    }
  })

  .state('app.browse', {
    url: "/browse",
    views: {
      'menuContent': {
        templateUrl: "templates/browse.html"
      }
    }
  })
  .state('app.queCategory', {
    url: "/question/category",
    views: {
      'menuContent': {
        templateUrl: "templates/questionCategories.html",
        controller: 'QuestionCategoryCtrl'
      }
    }
  })
  .state('app.queCategory.subCategory', {
    url: "/subCategory/:catId",
    views: {
      'menuContent@app': {
        templateUrl: "templates/questionSubCategories.html",
        controller: 'subQuestionCategoryCtrl'
      }
    }
  })

  .state('app.single', {
    url: "/questions/:categoryId",
    views: {
      'menuContent': {
        templateUrl: "templates/questionPage.html",
        controller: 'QuestionCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/question/category');
});
