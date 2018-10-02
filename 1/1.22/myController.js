app.controller("myController", function($scope, $http) {
  //Include AngularJS Code
  $http.get("customers.php")
    .then(function(response) {
      $scope.names = response.data.records;
    });
});
