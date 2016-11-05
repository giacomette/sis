(function(){
  'use strict';

  angular.module('app')
        .service('RequestService', [
        '$http',
        RequestService
  ]);

  function RequestService($http, api){

    var url = '';

    function Request(entity) { 
      url = api.url + entity;
    

    Request.prototype.get = function(id) {

      url = id ? '/' + id : url;

      return $http.get(url);
    }

    return new Request;     
  }

})();
