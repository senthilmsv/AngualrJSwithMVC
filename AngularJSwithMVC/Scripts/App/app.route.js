(function () {
    'use strict';
    angular.module('app')
        .config(['$stateProvider', '$urlRouterProvider',
            function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/');
            $stateProvider
                .state('home', {
                    url: '/',
                    templateUrl: '/Home/Home'
                })
                .state('page1', {
                    url: '/Page1',
                    //templateUrl: '/Home/Page1'
                    views: {
                        '@': {
                            templateUrl: '/Home/Page1'
                        },
                        'left@page1': {
                            templateUrl: 'Home/Page1Left'
                        },
                        'right@page1': {
                            templateUrl: 'Home/Page1Right'
                        }
                    }
                })
                //.state('page2', {
                //    url: '/Page2',
                //    templateUrl: '/Home/Page2'
                //})
                .state('page3', {
                    url: '/Page3',
                    templateUrl: '/Home/Page3'
                });
        }]);
})();