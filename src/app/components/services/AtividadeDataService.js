(function () {
  'use strict';

  angular.module('app')
    .service('AtividadeDataService', AtividadeDataService );

  function AtividadeDataService(RequestService, UnidadeSaudeService, TipoMedicoService, api) {

    function AtividadeService() {
      RequestService.call(this, 'atividade'); 
    };

    return AtividadeService;
  }
})();
