import angular from 'angular';
import './root.component.js';
angular
.module('angularApp')
.config(($stateProvider, $locationProvider) => {
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false,
  });
  $stateProvider
    .state('root', {
      url: '/angularJS',
      template: '<root />',
    });
});