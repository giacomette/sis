(function() {

    angular
        .module('app')
        .controller('CampanhasController', CampanhasController);

    function CampanhasController(CampanhasDataService, $rootScope, $mdDialog, $state) {

        var Api = new CampanhasDataService;

        var vm = this;

        vm.campanhas = [];

        function iniciar() {

            $rootScope.loading = true;

            Api.get().success(function(data) {
                vm.campanhas = data;
                $rootScope.loading = false;
            })
        }

        iniciar();

        vm.goLink = function(link) {

            window.open(link, 'blank');
        }
    }

})();
