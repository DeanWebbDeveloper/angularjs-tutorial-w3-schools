app.controller("myController", function($scope) {

  // Creating a Select Box Using ng-options
  $scope.names  = [ "Brendan",
                    "Charlotte",
                    "Daryl"
                  ];

  // What Do I Use?
  $scope.cars   = [ { model: "Ford Mustang",
                      color: "red"
                    },
                    { model: "Fiat 500",
                      color: "white"
                    },
                    { model: "Volvo XC90",
                      color: "black"
                    }
                  ];

  // The Data Source as an Object
  $scope.cars2  = {
                      car01:  "Ford",
                      car02:  "Fiat",
                      car03:  "Volvo"
                  };

  $scope.cars3  = {
                    car01:  {
                              brand   : "Ford",
                              model   : "Mustang",
                              color   : "red"
                            },
                    car02:  {
                              brand   : "Fiat",
                              model   : "500",
                              color   : "white"
                            },
                    car03:  {
                              brand   : "Volvo",
                              model   : "XC90",
                              color   : "black"
                            }
                  };

});
