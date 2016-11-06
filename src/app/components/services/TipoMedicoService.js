(function () {
  'use strict';

  angular.module('app').service('TipoMedicoService', TipoMedicoService);

  function TipoMedicoService(RequestService, api) {

    function TipoMedicoService() {

      RequestService.call(this, 'tipo-medico');
    };

    return TipoMedicoService;
  }
})();
