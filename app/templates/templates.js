'use strict';

angular.module('tempStore.templates', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/templates', {
    templateUrl: 'templates/templates.html',
    controller: 'TempCtrl'
  })
.when('/templates/:templateId', {
    templateUrl: 'templates/templates-details.html',
    controller: 'TempDetails'
  });
}])

.controller('TempCtrl', ['$scope','$http', function($scope,$http) {
$http({
	method:'GET',
	url: 'templates/templates.json'})
	.success(function(data){
$scope.template=data;
});
}])
.controller('TempDetails', ['$scope','$http','$routeParams','$filter', function($scope,$http,$routeParams,$filter) {
$scope.par=$routeParams.templateId;
$http({
	method:'GET',
	url: 'templates/templates.json'})
	.success(function(data){
$scope.template=$filter('filter')(data,function(d){
return d.id==$scope.par;

});
console.log($scope.template);
});
}]);