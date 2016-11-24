var app = angular.module('myapp', ['ngRoute']);

//Page Routing Configuring
app.config(['$routeProvider',
    function($routeProvider) {

        $routeProvider
            .when('/', {
                templateUrl: '../views/main.html',
                controller: 'mainController'
            })
            .when('/:id', {
                templateUrl: '../views/picture.html',
                controller: 'viewController'
            })        
            .otherwise({
                redirectTo: '/'
            });
}]);

