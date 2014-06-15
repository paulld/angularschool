(function(){
  var app = angular.module('people', ['people-person']);

// CONTROLLERS:
  app.controller('PeopleController', [ '$http', function($http){
    var list = this;
    list.persons = [];
    $http.get('/js/persons.json').success(function(data){
      list.persons = data;
    });
  }]);

  app.controller('StoreController', [ '$http', function($http){
    var store = this;
    store.products = [];
    $http.get('/store-products.json').success(function(data){
      store.products = data;
    });
  }]);

  app.controller('TabController', function(){
    this.currentTab = 1;

    this.selectTab = function(newTab){
      this.currentTab = newTab;
    };
    this.isSelected = function(checkTab){
      return this.currentTab === checkTab;
    };
  });

})();
