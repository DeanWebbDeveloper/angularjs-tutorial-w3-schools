app.controller("myController", function($scope) {
  // AngularJS Controllers
  $scope.firstName  = "John";
  $scope.lastName   = "Doe";
  $scope.fullName   = function() {
    return $scope.firstName + " " + $scope.lastName;
  };
});
