(function(){
  var app = angular.module('people-person', []);

// DIRECTIVES:    (NB: could use ng-include="'templates/person-details.html'" instead of the directive element)
  app.directive('personDetails', function(){
    return {
      restrict: 'E',
      templateUrl: 'templates/person-details.html'
    }
  });

  app.directive('personDescription', function(){
    return {
      restrict: 'E',
      templateUrl: 'templates/person-description.html'
    }
  });

  app.directive('personGallery', function(){
    return {
      restrict: 'E',
      templateUrl: 'templates/person-gallery.html',
      controller: function(){                         // NB: Directive includes a Controller and its alias
        this.current = 0;
        this.setCurrent = function(picture){
          this.current = picture ? picture : 0;           // this.current = newGallery || 0;
        };
        this.isCurrent = function(picture){
          return this.current = picture;
        };
      },
      controllerAs: 'gallery'
    }
  });

  app.directive('personReviews', function(){
    return {
      restrict: 'E',
      templateUrl: 'templates/person-reviews.html'
    }
  });

  app.directive('personNewReview', function(){
    return {
      restrict: 'E',
      templateUrl: 'templates/person-new-review.html',
      controller: function(){                           // NB: Directive includes a Controller and its alias
        this.review = {};
        this.addReview = function(person){
          this.review.createdOn = Date.now();
          person.reviews.push(this.review);
          this.review = {};      
        };
      },
      controllerAs: 'ReviewCtrl'
    }
  });

})();
