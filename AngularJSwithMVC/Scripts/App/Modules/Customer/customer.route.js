// customer.route.js
(function () {
    'use strict';
    angular.module('customer')
        .config(['$stateProvider', function ($stateProvider) {
            $stateProvider
                .state('customer', {
                    url: '/Customer',
                    templateUrl: '/Customer',
                    resolve: {
                        customer: function () {
                            console.log('Resolving Customer');
                            var customer = {
                                name: 'John Doe',
                                age: 23
                            };
                            return customer;
                        }
                    },
                    controller: ['$scope', 'customer', function ($scope, customer) {
                        console.log('Customer Controller');
                        $scope.customer = customer;
                        $scope.saveEdits = function (customer) {
                            $scope.customer = customer;
                        }
                    }]
                })
                .state('customer.profile', {
                    url: '/Profile',
                    views: {
                        'section@customer': {
                            templateUrl: '/Customer/Profile'
                        }
                    }
                })
                .state('customer.profile.edit', {
                    url: '/Edit',
                    views: {
                        'section@customer': {
                            templateUrl: '/Customer/Profile/Edit',
                            controller: ['$scope', '$state', '$stateParams', function ($scope, $state) {
                                console.log('Customer Edit Controller');
                                $scope.editingCustomer = angular.copy($scope.customer)
                                var save = function () {
                                    $scope.saveEdits($scope.editingCustomer);
                                    $state.go('^');
                                };
                                var cancel = function () {
                                    $state.go('^');
                                };
                                $scope.save = save;
                                $scope.cancel = cancel;
                            }]
                        }
                    }
                });
        }]);
})();