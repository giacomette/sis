(function() {

    angular
        .module('app')
        .controller('GuiaCriancaController', GuiaCriancaController);

    function GuiaCriancaController(AtividadeDataService, $rootScope, $mdDialog, $state) {

        var Api = new AtividadeDataService;

        var vm = this;

        vm.numero_sus = '';
        vm.atividades = [];
        vm.buscar = buscar;
        vm.filtro = "";

        vm.getIdade = function(item) {

            var anos = item.anos;

            var meses = (+item.idade_pessoa) % 12;

            var retorno = "";

            if (anos) {

                if (anos > 1) {

                    retorno += anos + " anos ";

                } else {

                    retorno += anos + " ano ";
                }

                if (meses) {
                    retorno += "e ";
                }   
            }

            if (meses) {


                if (meses > 1) {

                    retorno += meses + " meses ";

                } else {

                    retorno += meses + " mês ";
                }
            }

            return retorno;
        }

        vm.parseIdade = function(idade) {

            if (idade == 0) {

                return "Ao nascer";
            }

            if (idade <= 15) {

                return idade + " Meses";
            }

            return Math.floor(idade / 12) + " Anos";

        }

        function buscar() {

            $rootScope.loading = true;

            return Api.get({ numero_sus: vm.numero_sus }).success(function(data) {

                $rootScope.loading = false;

                vm.atividades = data;

                if (data.length == 0) {

                    $mdDialog.show(
                        $mdDialog.alert()
                            .clickOutsideToClose(true)
                            .title('Aviso')
                            .textContent('Carteira não registrada em nosso sistema.')
                            .ariaLabel('Aviso')
                            .ok('Fechar')
                    );
                }
            });
        }

        vm.parseDate = function(date, format) {
            if (!date) return;
            return moment(date).format(format);
        }
    }

})();
