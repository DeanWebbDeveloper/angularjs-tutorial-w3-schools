app.controller("myController", function($scope, $http) {
  // Fetching Data From a PHP Server Running MySQL
  $http.get("customers_mysql.php")
    .then(function(response) {
      $scope.names = response.data.records;

  // Fetching Data From an ASP.NET Server Running SQL
  $http.get("customers_sql.aspx")
    .then(function(response) {
      $scope.names = response.data.records;
    });
});
