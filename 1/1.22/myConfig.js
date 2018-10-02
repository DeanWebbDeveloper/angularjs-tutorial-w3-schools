//Include Cross Domains
app.config(function($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhiteList([
    'https://tryit.w3schools.com/**'
  ]);
});
