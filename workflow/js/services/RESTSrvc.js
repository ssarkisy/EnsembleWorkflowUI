'use strict';

// DB access through REST
// Service from Ilya Podolko's webinar demo.

function RESTSrvc($http, $q) { 
  return {
    getPromise: 
      function(config) {
        var deferred = $q.defer();

        $http(config).
            success(function(data, status, headers, config) {
             deferred.resolve(data);
            }).
            error(function(data, status, headers, config) {
              deferred.reject(data, status, headers, config);
            });

        return deferred.promise;
      }
    }
};

// resolving minification problems
RESTSrvc.$inject = ['$http', '$q'];
servicesModule.factory('RESTSrvc', RESTSrvc);
  
