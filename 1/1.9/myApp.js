var app = angular.module("myApp", []);

// Root Scope
app.run(function($rootScope) {
  $rootScope.color  = "blue";
});
