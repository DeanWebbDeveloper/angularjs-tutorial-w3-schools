app.controller("customersController", function($scope, $http) {
  $http.get("customers.php")
    .then(function(response) {
      $scope.myData = response.data.records;
    });
});
