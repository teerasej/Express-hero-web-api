myApp.controller('HeroController', ['$scope', 'ProfileService', function ($scope, ProfileService) {

    

    $scope.addNewHero = function (hero) {

        ProfileService.addHero(hero.name, hero.realName)
            .success(function (result) {
                $scope.status = "Hero added.";
                $scope.hero.name = "";
                $scope.hero.realName = "";
            })
            .error(function (error) {
                $scope.status = "Error on Adding hero, try again.";
            });

    }

}])