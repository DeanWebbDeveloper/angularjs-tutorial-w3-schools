// Create Your Own Service
app.service('hexafy', function() {
  this.myFunc = function(x) {
    return x.toString(16);
  };
});
