/**
 * Created by sandro on 4/19/2014.
 */
'use strict';


// Declare app level module which depends on filters, and services
angular.module('travelIS', [
    'ngRoute',
//    'travelIS.filters',
//    'travelIS.services',
//    'travelIS.directives',
    'travelIS.controllers'
]).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {templateUrl: 'app/components/login/login.html', controller: 'LoginCtrl'});
        $routeProvider.when('/login', {templateUrl: 'components/login/login.html', controller: 'LoginCtrl'});
//        $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
        $routeProvider.otherwise({redirectTo: '/login'});
    }]);