// Create New Directives
app.directive("myDirective", function() {
  return {
    // Restrictions
    restrict  : "C",
    template  : "This is a template in a custom directive"
  }
});
