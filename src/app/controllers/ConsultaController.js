(function(){

  angular
    .module('app')
    .controller('ConsultaController', [ConsultaController]);

  function ConsultaController(ConsultaDataService) {

    console.log(ConsultaDataService);

    var vm = this;

    vm.consulta = { };
  }

})();
