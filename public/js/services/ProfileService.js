myApp.service('ProfileService', ['$http', function($http){


    var result = {

        // Create getContacts()
        // Use $http.get with https://randomuser.me/api/?results=10
        getContacts : function() {
            // return $http.get('https://randomuser.me/api/?results=10');
            return $http.get('/heroes');
        },

        addHero : function( name , realName ){

            var hero = {
                name: name,
                realName : realName
            };

            var json = JSON.stringify(hero);

            return $http.post('heroes/create', json);
        }

    };

    return result;

}]);