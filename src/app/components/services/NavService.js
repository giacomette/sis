(function(){
  'use strict';

  angular.module('app')
          .service('navService', [
          '$q',
          navService
  ]);

  function navService($q){
    var menuItems = [
      {
        name: 'Página Inicial',
        icon: 'dashboard',
        sref: '.dashboard'
      },
      {
        name: 'Agendar Consulta',
        icon: 'date_range',
        sref: '.consulta'
      },
      {
        name: 'Guia da Criança',
        icon: 'person',
        sref: '.guiaCrianca'
      },
      {
        name: 'Campanhas/Prevenções',
        icon: 'turned_in_not',
        sref: '.campanhas'
      }
    ];

    return {
      loadAllItems : function() {
        return $q.when(menuItems);
      }
    };
  }

})();
