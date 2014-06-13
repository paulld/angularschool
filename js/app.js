(function(){
  var app = angular.module('store', []);

  app.controller('PeopleController', function(){
    this.person = paul;
  });

  var paul = {
    name: "Paul",
    description: "Awesome guy",
    age: 5,
    price: 9.9998,
  };

})();
