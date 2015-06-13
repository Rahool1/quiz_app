angular.module('quizApp.controllers', [])

.controller('quizCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('QuestionCategoryCtrl', function($scope,questionCategoryListApi) {

  $scope.QueCategoryList = questionCategoryListApi.getQueCatList;


})

.controller('QuestionCtrl', function($scope, $stateParams, questionListApi, $ionicSlideBoxDelegate, $ionicPopup, $timeout) {
  $scope.correctAns = false;
  $scope.wrongAns = false;

  $scope.currentPage = 0;
  $scope.pageSize = 10;

  $scope.data = {
    selected: null
  };

  $scope.questionData = questionListApi.getQuestionListData($stateParams.categoryId);
  console.log("data");
  console.log($scope.questionData);

  $scope.numberOfPages=function(){
    return Math.ceil($scope.questionData.length/$scope.pageSize);
  }

  console.log(Math.ceil($scope.questionData.length/$scope.pageSize));

  $scope.radioButtonIsSelected = function(option,que) {
    // console.log("options");
    console.log(que);
    console.log(option);
    console.log(que.ans);


    if(option.opt != que.ans){
      $scope.showAlert(que.ans);
      // for(var i = 0; i < que.optionsList.length; i++){

      // }
    }

  };

  $scope.showAlert = function(ans) {
    var alertPopup = $ionicPopup.alert({
      title: 'Answer',
      template: ans
    });
    alertPopup.then(function(res) {
      //call back finction
    });

    $timeout(function() {
      alertPopup.close();
    }, 1500);

  };

}).
filter('startFrom', function() {
    return function(input, start) {
        if (!input || !input.length) { return; }
        start = +start; //parse to int
        return input.slice(start);
    };
});
