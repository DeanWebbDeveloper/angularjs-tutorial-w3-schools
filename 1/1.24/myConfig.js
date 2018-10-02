// What do I Need?
app.config(function($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl:  "main.htm"
    })
    .when("/red", {
      templateUrl:  "red.htm",
      controller:   "redController"
    })
    .when("/green", {
      templateUrl:  "green.htm",
      controller:   "greenController"
    })
    // Template
    .when("/blue", {
      //templateUrl:  "blue.htm",
      template:     "<div style='background-color: blue;'><h1>{{msg}}</h1></div>",
      controller:   "blueController"
    })
    // The otherwise method
    .otherwise({
      template:     "<h1>None</h1><p>Nothing has been selected</p>";
    });
});
