/**
 * Created by sandro on 4/19/2014.
 */
'use strict';


// Declare app level module which depends on filters, and services
angular.module('travelIS', [
    'ui.router',
//    'travelIS.filters',
//    'travelIS.services',
//    'travelIS.directives',
    'travelIS.controllers'
])
.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('login', {
            url: '/',
            templateUrl: 'app/components/login/login.html',
            controller:'LoginCtrl'
        });

});