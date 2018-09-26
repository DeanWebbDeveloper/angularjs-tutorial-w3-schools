app.controller("myController", function($scope, $http) {

  // AngularJS $http
  $http.get("welcome.htm")
    .then(function(response) {
      $scope.myWelcome = response.data;
    });

  // Methods
  $http ({
    method  : "GET",
    url     : "welcome.html"
  }).then(function(response) {
    $scope.myWelcome = response.data;
  }, function myError(response) {
    $scope.myError = response.statusText;
  });

  // Properties
  $http.get("welcome.htm")
    .then(function(response) {
      //First function handles success
      $scope.content    = response.data;
      $scope.statuscode = response.status;
      $scope.statustext = response.statusText;
    }, function(response) {
      //Second function handles error
      $scope.content    = "Something went wrong";
      $scope.statusText = response.statusText;
    });

});
