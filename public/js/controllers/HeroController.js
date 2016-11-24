myApp.controller('HeroController', ['$scope','ProfileService', function($scope, ProfileService){

    $scope.createNewHero = function(hero){

        ProfileService.addHero(hero.name, hero.realName)
            .success(function(result){
                console.log(result);
            })
            .error(function(error){
                alert('Error');
            })

    }

}])