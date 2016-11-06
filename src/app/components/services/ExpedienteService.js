(function () {
  'use strict';

  angular.module('app')
    .service('ExpedienteService', ExpedienteService );

  function ExpedienteService(RequestService, api) {

    function ExpedienteService() {

      RequestService.call(this, 'expediente');
    };

    return ExpedienteService;
  }
})();
