var app=angular.module('polApp', []);

app.controller('FirstController', function($scope, $http){//add params as needed.

  console.log('Controller loaded');

  $scope.message="";
  $scope.democrats=[];
  $scope.republicans=[];
  $scope.person='';
  $scope.elephants='';

  $http.get('/democrats').then(function(response) {
    // $scope.theButtonClicked=true;
    $scope.democrats=response.data;
    console.log('button works!')
  });

  $http.get('/republicans').then(function(response) {
    $scope.republicans=response.data;
  });
});

app.controller('SecondController', function($scope, $http){//add params as needed
  console.log('Second Controller loaded');

  $scope.theButtonClicked=false;

  $scope.buttonClick=function(){
    $scope.theButtonClicked=true;
    console.log('button clicked');
    $http.get('/winner').then(function(response){
      console.log(response);
      $scope.winning=response.data;
    });
  }
});
