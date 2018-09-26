app.controller("myController", function($scope) {
  // Mouse Events
  $scope.count = 0;
  // The ng-click Directive
  $scope.countReset = function() {
    $scope.count = 0;
  };
  // Toggle, True/False
  $scope.toggleSetting = false;
  $scope.toggle = function() {
    $scope.toggleSetting = !$scope.toggleSetting;
  }

  //$event Object
  $scope.eventFunc = function(myE) {
    $scope.xCoord = myE.clientX;
    $scope.yCoord = myE.clientY;
  }
});
