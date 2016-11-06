(function () {

  angular
    .module('app')
    .controller('EditarConsultaController', EditarConsultaController);

  function EditarConsultaController(ConsultaDataService, $rootScope, $mdDialog, $state) {

    var Api = new ConsultaDataService;

    var vm = this;

    vm.expedientes = [];
    vm.unidades = [];
    vm.tiposMedicos = [];
    vm.expediente = {};

    vm.tipo_medico_id = '';

    vm.consulta = {};

    function iniciar() {

      $rootScope.loading = true;

      getData()
        .then(getUnidades.call(this))
        .then(getTipoMedico.call(this))
        .then(function () {
          vm.changeUnidade().then(function () {
            getExpedienteUnico()
          });
        })
    }

    function getData() {

      return Api.get($state.params.id).success(function (data) {
        vm.consulta = [data].filter(function (item) {
          item.expediente_id = "" + item.expediente_id;
          item.tipo_medico_id = "" + item.tipo_medico_id;
          return item;
        })[0];

        vm.tipo_medico_id = data.tipo_medico_id;
      });
    }

    function getTipoMedico() {

      return Api.getTipoMedico().success(function (data) {
        vm.tiposMedicos = data;
      });
    }

    function getUnidades() {

      return Api.getUnidades().success(function (data) {
        vm.unidades = data;
      });
    }

    iniciar();
 

    vm.changeUnidade = function () {

      if (!vm.consulta.unidade_saude_id) return;

      vm.expedientes = [];

      vm.expediente.vaga = '';

      $rootScope.loading = true;

      return Api.getExpedientes(vm.consulta.unidade_saude_id, vm.tipo_medico_id).success(function (data) {

        vm.expedientes = data;

        $rootScope.loading = false;
      })
    }


    vm.salvar = function () {

      if (!vm.consulta.expediente_id) {

        $mdDialog.show(
          $mdDialog.alert()
            .clickOutsideToClose(true)
            .title('Aviso')
            .textContent('Preencha a Data e Hora da Consulta.')
            .ok('Fechar')
        )

        return;
      }

      if (!vm.expediente.vaga) return;

      $rootScope.loading = true;

      Api.save(vm.consulta).success(function () {

        $rootScope.loading = false;

        $mdDialog.show(
          $mdDialog.alert()
            .clickOutsideToClose(true)
            .title('Aviso')
            .textContent('Sua consulta foi atualizada com sucesso. Levar a carteira do SUS e documento pessoal na data do atendimento.')
            .ariaLabel('Operação realizada com sucesso.')
            .ok('Fechar')
        ).then(function () {
          $state.transitionTo('app.consulta');
        }, function () {
          $state.transitionTo('app.consulta');
        });

      }).error(function () {
        $rootScope.loading = false;
      });
    }

    vm.changeExpediente = function () {

      getExpedienteUnico();
    }

    var getExpedienteUnico = function () {

      vm.expediente = vm.expedientes.filter(function (data) {
        return data.id == vm.consulta.expediente_id;
      })[0] || {};

      vm.consulta.data = vm.expediente.data;
    }

    vm.parseDate = function (date, format) {
      return moment(date).format(format);
    }
  }

})();
