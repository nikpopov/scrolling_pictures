angular.module('myapp').controller('viewController', ViewController);
ViewController.$inject = ['$scope', '$routeParams'];

function ViewController($scope, $routeParams) {

	console.log('View Controller');
	console.log($routeParams.id);

	$scope.tmpUrl = $routeParams.url;

};




