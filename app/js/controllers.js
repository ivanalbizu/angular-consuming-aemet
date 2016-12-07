(function() {
  'use strict';

  angular.module('aemet')
    .controller('SingleData', SingleData);

    SingleData.$inject = ['$http', 'URL_API'];
    function SingleData ($http, URL_API) {

        var vm = this;
        var today = new Date().toISOString().slice(0,10);


        //Se obtienen las provincias al cargar la página
        getProvincias();
        function getProvincias() {
          var url = URL_API.BASE_RESOURCES + 'provincias.json';
          $http.get(url)
            .then(function(response) {
              vm.dataprovincias = response.data;
            })
            .catch(function(response) {
              console.error('Error', response);
            });
        }

        function getLocalidades(provincia) {
          var url = URL_API.BASE_RESOURCES + 'localidades_provincia'+provincia+'.json';
          $http.get(url)
            .then(function(response) {
              vm.datalocalidades = response.data;
            })
            .catch(function(response) {
              console.error('Error', response);
            });
        }

        function getDataLocalidad(id) {
          if (id) {
            var url = URL_API.BASE_URL + id.slice(-5);

            $http.get(url)
            .then(function(response) {
              vm.datajson = response.data;
              console.log(vm.datajson);
            })
            .catch(function(response) {
              console.error('Error', response);
            });
          }

        }

        function isArrayOrObject(data) {
          return angular.isArray(data) || angular.isObject(data);
        }

        function isToday(data) {
          return today == data;
        }

        function log(showconsole) {
          console.log(showconsole);
        }

        vm.getLocalidades = getLocalidades;
        vm.getDataLocalidad = getDataLocalidad;

        vm.isArrayOrObject = isArrayOrObject;
        vm.isToday = isToday;
        vm.log = log;

    };

})();
