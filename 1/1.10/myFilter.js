app.filter("myFilter", function() {
  return function(x) {
    var c, txt = "";
    for(var i = 0; i < x.length; i++) {
      c = x[i];
      if (i % 2 == 0) {
        c = c.toUpperCase();
      };
      txt += c;
    };
    return txt;
  };
});
