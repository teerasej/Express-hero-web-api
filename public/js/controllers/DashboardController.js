myApp.controller('DashBoardController', ['$scope','ProfileService', function($scope, ProfileService) {

    // Call getContacts() and handle success() and error()
    $scope.profiles = [];

    // ProfileService.getContacts()
    //     .success(function(resObject){
    //         //alert('ok...');
    //         console.log(resObject);
    //         $scope.profiles = resObject;
    //     })
    //     .error(function(error){
    //         alert('อุ๊บส์...');
    //     })

    ProfileService.addHero('Peter', 'Jackson')
            .success(function(result){
                console.log(result);
            })
            .error(function(error){
                alert('Error');
            })

}]);
