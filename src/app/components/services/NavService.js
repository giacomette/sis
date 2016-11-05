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
        icon: 'person',
        sref: '.consulta'
      },
      // {
      //   name: 'Table',
      //   icon: 'view_module',
      //   sref: '.table'
      // }
    ];

    return {
      loadAllItems : function() {
        return $q.when(menuItems);
      }
    };
  }

})();
