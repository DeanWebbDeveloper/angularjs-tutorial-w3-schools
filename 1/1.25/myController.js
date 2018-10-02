app.controller("myController", function($scope) {
  // Step 1. Getting Started:
  $scope.products   = ["Milk", "Bread", "Cheese"];
  // Step 2. Adding Items:
  $scope.addItem    = function() {
                        $scope.errortext    = "";
                        if (!$scope.addMe) {return;}
                        if ($scope.products.indexOf($scope.addMe) == -1) {
                          $scope.products.push($scope.addMe);
                        } else {
                          $scope.errortext  = "The item is already in your shopping list.";
                        };
                      };
  // Step 3. Removing Items:
  $scope.removeItem = function(product) {
                        $scope.products.splice(product, 1);
                      };
});
