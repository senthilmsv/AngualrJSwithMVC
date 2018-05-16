/*
Used in Ng route
*/
//(function () {
//    'use strict';
//    angular.module('app')
//        .config(['$routeProvider', '$locationProvider',
//            function ($routeProvider, $locationProvider) {
//            $locationProvider.hashPrefix('');
//            $routeProvider
//                .when('/', {
//                    templateUrl: '/Home/Home'
//                })
//                .when('/Page1', {
//                    templateUrl: '/Home/Page1'
//                })
//                .when('/Page2', {
//                    templateUrl: '/Home/Page2'
//                })
//                .when('/Page3', {
//                    templateUrl: '/Home/Page3'
//                });
//        }]);
//})();

(function () {
    'use strict';
    angular.module('app')
        .config(['$locationProvider', function ($locationProvider) {
            $locationProvider.hashPrefix('');
        }]);
})();

