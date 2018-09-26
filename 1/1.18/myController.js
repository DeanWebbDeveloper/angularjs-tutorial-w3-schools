app.controller("myController", function($scope) {
  // Data-Binding
  $scope.firstName  =   "Chris";
  // Radiobuttons
  $scope.myRadio    =   "Alpha";
  // An AngularJS Form Example
  $scope.master     = { firstName:  "James",
                        lastName:   "Haddaway"
                      };
  $scope.user       = { firstName:  "",
                        lastName:   ""
                      };
  $scope.reset      = function() {
                        $scope.user = angular.copy($scope.master);
                      }
  $scope.reset();
});
