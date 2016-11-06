(function() {

    angular
        .module('app')
        .controller('CriarConsultaController', CriarConsultaController);

    function CriarConsultaController(ConsultaDataService, $rootScope, $mdDialog, $state) {

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

            getUnidades().then(getTipoMedico.call(this)).then(function() {
                $rootScope.loading = false;
            })

        }

        function getTipoMedico() {

            return Api.getTipoMedico().success(function(data) {
                vm.tiposMedicos = data;
            });
        }

        function getUnidades() {

            return Api.getUnidades().success(function(data) {
                vm.unidades = data;
            });
        }

        iniciar();

        vm.changeUnidade = function() {

            if (!vm.consulta.unidade_saude_id) return;

            $rootScope.loading = true;

            Api.getExpedientes(vm.consulta.unidade_saude_id, vm.tipo_medico_id).success(function(data) {

                vm.expedientes = data;

                $rootScope.loading = false;
            })
        }

        vm.salvar = function() {

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

            Api.save(vm.consulta).success(function() {

                $rootScope.loading = false;

                $mdDialog.show(
                    $mdDialog.alert()
                        .clickOutsideToClose(true)
                        .title('Aviso')
                        .textContent('Sua consulta foi agendada com sucesso. Levar a carteira do SUS e documento pessoal na data do atendimento.')
                        .ariaLabel('Operação realizada com sucesso.')
                        .ok('Fechar')
                ).then(function() {
                    $state.transitionTo('app.consulta');

                }, function() {
                    $state.transitionTo('app.consulta');
                });

            }).error(function() {
                $rootScope.loading = false;
            });
        }

        vm.changeExpediente = function() {

            vm.expediente = vm.expedientes.filter(function(data) {
                return data.id == vm.consulta.expediente_id;
            })[0] || {};

            vm.consulta.data = vm.expediente.data;
        }

        vm.parseDate = function(date, format) {
            return moment(date).format(format);
        }
    }

})();
