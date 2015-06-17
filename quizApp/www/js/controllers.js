angular.module('quizApp.controllers', [])

.controller('quizCtrl', function($scope, $ionicModal, $timeout, $state) {

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

.controller('QuestionCategoryCtrl', function($scope,questionCategoryListApi,$state) {

  $scope.QueCategoryList = questionCategoryListApi.getQueCatList;

  $scope.categorySelected = function(cat) {
    if(cat.child == null){
      //goto question page
      $state.go('app.single',{categoryId:cat.id});
    }else{
      $state.go('app.queCategory.subCategory',{catId:cat.id});
      //goto second level
    }
  };

})

.controller('subQuestionCategoryCtrl', function($scope,$stateParams,$state,subQueCategory) {
  console.log("subQuestionCategoryCtrl called");
  $scope.QueSubCategoryList = subQueCategory.getSubQueCatList($stateParams.catId);
  console.log("List");
  console.log($scope.QueSubCategoryList);

  $scope.categorySelected = function(cat) {
    if(cat.child == null){
      //goto question page
      $state.go('app.single',{categoryId:cat.id});
    }else{
      $state.go('app.queCategory.subCategory',{catId:cat.id});
      //goto second level
    }
  };


})

.controller('QuestionCtrl', function($scope, $stateParams, questionListApi, $ionicSlideBoxDelegate, $ionicPopup, $timeout, $ionicScrollDelegate) {
  $scope.currentPage = 0;
  $scope.pageSize = 50;

  $scope.data = {
    selected: null
  };

  $scope.questionData = questionListApi.getQuestionListData($stateParams.categoryId);


  $scope.numberOfPages=function(){
    return Math.ceil($scope.questionData.length/$scope.pageSize);
  }

  console.log(Math.ceil($scope.questionData.length/$scope.pageSize));

  $scope.radioButtonIsSelected = function(index,que,option) {

    console.log(que);
    var ansToAlert = "";
    for(var i = 0;i < que.options.length;i++){
      if(i == que.answer){
        ansToAlert = que.options[i];
      }
    }

    if(index != que.answer){
      $scope.showAlert(ansToAlert);
    }

    $scope.scrollTop = function() {
      $ionicScrollDelegate.scrollTop();
    };

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
    }, 1200);

  };

})
.controller('TestCtrl', function($scope, questionCategoryListApi, $timeout) {


    $scope.clock = "loading clock..."; // initialise the time variable
    $scope.testNotStart = true;
    $scope.time = 1000*60*10;


    $scope.startTest = function() {
      $scope.testNotStart = false;
      $scope.time = $scope.time - 1000;
      $timeout($scope.startTest, 1000);
    };


  $scope.QueCategoryListForTest = questionCategoryListApi.getQueCatList;

    // $scope.tickInterval = 1000 //ms

    // var tick = function() {
    //     $scope.clock = Date.now() // get the current time
    //     $timeout(tick, $scope.tickInterval); // reset the timer
    // }

    // // Start the timer
    // $timeout(tick, $scope.tickInterval);

}).
filter('startFrom', function() {
    return function(input, start) {
        if (!input || !input.length) { return; }
        start = +start; //parse to int
        return input.slice(start);
    };
});
