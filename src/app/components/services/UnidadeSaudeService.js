(function () {
  'use strict';

  angular.module('app')
    .service('UnidadeSaudeService', UnidadeSaudeService );

  function UnidadeSaudeService(RequestService, api) {

    function UnidadeSaudeService() {

      RequestService.call(this, 'unidade-saude');
    };

    return UnidadeSaudeService;
  }
})();
