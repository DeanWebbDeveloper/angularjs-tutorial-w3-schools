app.controller("myController", function($scope) {
  // Adding Filters to Expressions
  $scope.filterText       =   "This text WILL be filtered";
  // Adding Filters to Directives
  $scope.listOfCountries  = [ "Jamaica",
                              "Uruguay",
                              "Egypt",
                              "China",
                              "The Gambia"];
  // The currency Filter
  $scope.price            =   200;
  // Sort an Array Based on User Input
  $scope.sortingObject    = [ {name:  'Anthony',  age:  26},
                              {name:  'Patrick',  age:  38},
                              {name:  'Mitchell', age:  22},
                              {name:  'Hailey',   age:  16},
                              {name:  'Jordan',   age:  44},
                              {name:  'Reece',    age:  52},
                              {name:  'Zoe',      age:  10}
                            ];
  $scope.orderByMe        = function(filter) {
    $scope.myOrderBy      =   filter;
                            };
});
