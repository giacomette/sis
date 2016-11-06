(function () {
  'use strict';

  angular.module('app')
    .service('CampanhasDataService', CampanhasDataService );

  function CampanhasDataService(RequestService) {

    function CampanhasService() {

      RequestService.call(this, 'campanhas');
      
    };

    return CampanhasService;
  }
})();
