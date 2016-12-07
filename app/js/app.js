(function() {
  'use strict';

  angular.module('aemet', ['ngRoute'])

    .config(function($routeProvider) {

      $routeProvider
        .when('/', {
          controller:'SingleData'
        })
        .otherwise({
          redirectTo:'/'
        });
    })

    .constant('URL_API', {
      BASE_URL: 'http://mentiraspoliticas.es/projects/aemet/server/index.php/',
      BASE_RESOURCES: '../app/resources/'
    });

})();
