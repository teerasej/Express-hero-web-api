myApp = angular.module('myApp', ['ngRoute']);


myApp.config(['$routeProvider', function($routeProvider) {
    
    $routeProvider.when('/', {
            templateUrl: 'views/dashboard.html',
            controller: 'DashBoardController'
        })

        // Add parameter to path '/:id'
        .when('/create-hero', {
            templateUrl: 'views/create-hero.html',
            controller: 'HeroController'
        })


        .otherwise({
            redirectTo: '/'
        });


}]);