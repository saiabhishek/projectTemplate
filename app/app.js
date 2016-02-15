'use strict';

// Declare app level module which depends on views, and components
angular.module('tempStore', [
  'ngRoute',
  'tempStore.view1',
  'tempStore.view2',
  'tempStore.templates'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/templates'});
}]);
