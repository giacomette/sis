'use strict';

angular.module('angularMaterialAdmin', ['ngAnimate', 'ngCookies', 'ngTouch',
    'ngSanitize', 'ui.router', 'ngMaterial', 'nvd3', 'app'])


    

    /*
     * Configuração da url da api
     */
    .constant('api', {
        url: 'http://localhost/sis/api/public/api/'
    })

    .config(function ($stateProvider, $urlRouterProvider, $mdThemingProvider, $mdIconProvider, $httpProvider) {

        $httpProvider.defaults.headers.common = {};

        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
        $httpProvider.defaults.headers.common['Content-Type'] = 'application/json';

        $stateProvider
            .state('app', {
                url: '',
                templateUrl: 'app/views/main.html',
                controller: 'MainController',
                controllerAs: 'vm',
                abstract: true
            })
            .state('app.dashboard', {
                url: '/dashboard',
                templateUrl: 'app/views/dashboard.html',
                data: {
                    title: 'Dashboard'
                }
            })
            .state('app.consulta', {
                url: '/consulta',
                templateUrl: 'app/views/consulta.html',
                controller: 'ConsultaController',
                controllerAs: 'vm',
                data: {
                    title: 'Consulta'
                }
            })
            .state('app.consulta_criar', {
                url: '/consulta/criar',
                templateUrl: 'app/views/consulta-criar.html',
                controller: 'CriarConsultaController',
                controllerAs: 'vm',
                data: {
                    title: 'Agendamento de Consulta'
                }
            })
            .state('app.consulta_editar', {
                url: '/consulta/:id',
                templateUrl: 'app/views/consulta-criar.html',
                controller: 'EditarConsultaController',
                controllerAs: 'vm',
                data: {
                    title: 'Agendamento de Consulta'
                }
            })
            .state('app.campanhas', {
                url: '/campanhas',
                controller: 'CampanhasController',
                controllerAs: 'vm',
                templateUrl: 'app/views/campanhas.html',
                data: {
                    title: 'Campanhas e Prevenção'
                }
            })
            .state('app.guiaCrianca', {
                url: '/guia-crianca',
                controller: 'GuiaCriancaController',
                controllerAs: 'vm',
                templateUrl: 'app/views/guia-crianca.html',
                data: {
                    title: 'Guia da Criança'
                }
            });

        $urlRouterProvider.otherwise('/dashboard');
    });
