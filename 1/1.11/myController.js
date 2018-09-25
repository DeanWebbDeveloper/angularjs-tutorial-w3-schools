app.controller("myController", function($scope, $location, $http, $timeout, $interval, hexafy) {

  // What is a Service?
  $scope.myUrl = $location.absUrl()

  // The $http Service
  $http.get("welcome.htm").then(function(response) {
    $scope.myWelcome = response.data;
  });

  // The $timeout Service
  $timeout(function() {
    $scope.myUrl = "This has been generated using the $timeout service";
  }, 2000);

  // The $interval Service
  $scope.theTime = new Date().toLocaleTimeString();
  $interval(function() {
    $scope.theTime = new Date().toLocaleTimeString();
  }, 1000);

  //Create Your Own Services
  $scope.hex = hexafy.myFunc(255);

  // Use a Custom Service Inside a Filter
  $scope.hexList = [255, 128, 2];

});
