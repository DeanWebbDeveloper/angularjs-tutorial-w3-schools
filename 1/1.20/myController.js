app.controller("myController", function($scope) {
  $scope.word = "GeRaNiUm";
  $scope.lowerCaseWord = $scope.word.toLowerCase();
  $scope.upperCaseWord = $scope.word.toUpperCase();
  $scope.wordIsString  = angular.isString($scope.word);
  $scope.wordIsNumber  = angular.isNumber($scope.word);
});
