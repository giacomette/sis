(function(){
  'use strict';

  angular.module('app')
        .service('ConsultaDataService', [
        '$http',
      ConsultaDataService
  ]);

  function ConsultaDataService($http, RequestService, api){
    
    function ConsultaService() { };

    RequestService.call(this);

    return new ConsultaService;
  }
})();
