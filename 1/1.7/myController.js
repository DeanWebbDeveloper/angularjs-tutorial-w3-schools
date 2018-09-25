app.controller("myController", function($scope) {
  // Data Model
  $scope.firstName    = "John";
  $scope.lastName     = "Doe";
  $scope.email        = "john.doe@email.com";
  // AngularJS Controller
  $scope.changePerson = function() {
    $scope.firstName  = "James";
    $scope.lastName   = "Grey";
    $scope.email      = "james.grey@email.com"
  };
});
