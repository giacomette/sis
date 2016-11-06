(function() {

    angular
        .module('app')
        .controller('ConsultaController', ConsultaController);

    function ConsultaController(ConsultaDataService, $rootScope, $mdDialog, $state) {

        var Api = new ConsultaDataService;

        var vm = this;

        vm.consultas = [];

        vm.numero_sus = '';
        vm.buscar = buscar;

        function buscar() {

            $rootScope.loading = true;

            return Api.get({ numero_sus: vm.numero_sus }).success(function(data) {
                
                vm.consultas = data;
                
                $rootScope.loading = false;

                if (data.length == 0) {

                    $mdDialog.show(
                        $mdDialog.alert()
                            .clickOutsideToClose(true)
                            .title('Aviso')
                            .textContent('Nenhum histórico de consulta para a carteira do SUS "' + vm.numero_sus + '".')
                            .ariaLabel('Aviso')
                            .ok('Fechar')
                    );
                }
            });
        }

        vm.criar = function() {
            $state.transitionTo('app.consulta_criar');
        }

        vm.editar = function(id) {
            $state.transitionTo('app.consulta_editar', { id: id });
        }

        vm.parseDate = function(date, format) {

            return moment(date).format(format);
        }

        vm.verUnidade = function(unidade) {

            $mdDialog.show({
                controller: ['$scope', function($scope) {

                    $scope.unidade = unidade;

                    $scope.fechar = function() {
                        $mdDialog.hide();
                    }

                }],
                templateUrl: 'app/views/endereco-unidade-dialog.html'
            }).then(function(answer) {
                $scope.status = 'You said the information was "' + answer + '".';
            }, function() {
                $scope.status = 'You cancelled the dialog.';
            });
        }
    }

})();
