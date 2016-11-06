(function () {
  'use strict';

  angular.module('app')
    .service('ConsultaDataService', ConsultaDataService );

  function ConsultaDataService(RequestService, ExpedienteService, UnidadeSaudeService, TipoMedicoService, api) {

    function ConsultaService() {

      RequestService.call(this, 'consulta');

      this.getUnidades = function(){

        return new UnidadeSaudeService().get();
      }

      this.getExpedientes = function(unidade_saude_id, tipo_medico_id){

        return new ExpedienteService().get({unidade_saude_id: unidade_saude_id, tipo_medico_id: tipo_medico_id});
      }

      this.getTipoMedico = function(unidade_saude_id, tipo_medico_id){

        return new TipoMedicoService().get();
      }
    };

    return ConsultaService;
  }
})();
