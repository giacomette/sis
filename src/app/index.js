'use strict';

angular.module('angularMaterialAdmin', ['ngAnimate', 'ngCookies', 'ngTouch',
  'ngSanitize', 'ui.router', 'ngMaterial', 'nvd3', 'app'])

  .constant('api', {
    url: 'http://localhost/sis/api/public/api/'
  })

  .config(function ($stateProvider, $urlRouterProvider, $mdThemingProvider, $mdIconProvider) {
    $stateProvider
      .state('home', {
        url: '',
        templateUrl: 'app/views/main.html',
        controller: 'MainController',
        controllerAs: 'vm',
        abstract: true
      })
      .state('home.dashboard', {
        url: '/dashboard',
        templateUrl: 'app/views/dashboard.html',
        data: {
          title: 'Dashboard'
        }
      })
      .state('home.consulta', {
        url: '/consulta',
        templateUrl: 'app/views/consulta.html',
        controller: 'ConsultaController',
        controllerAs: 'vm',
        data: {
          title: 'Agendar Consulta'
        }
      })
      .state('home.table', {
        url: '/table',
        controller: 'TableController',
        controllerAs: 'vm',
        templateUrl: 'app/views/table.html',
        data: {
          title: 'Table'
        }
      });

    $urlRouterProvider.otherwise('/dashboard');

    $mdThemingProvider
      .theme('default')
        .primaryPalette('grey', {
          'default': '600'
        })
        .accentPalette('teal', {
          'default': '500'
        })
        .warnPalette('defaultPrimary');

    $mdThemingProvider.theme('dark', 'default')
      .primaryPalette('defaultPrimary')
      .dark();

    $mdThemingProvider.theme('grey', 'default')
      .primaryPalette('grey');

    $mdThemingProvider.theme('custom', 'default')
      .primaryPalette('defaultPrimary', {
        'hue-1': '50'
    });

    $mdThemingProvider.definePalette('defaultPrimary', {
      '50':  '#FFFFFF',
      '100': 'rgb(255, 198, 197)',
      '200': '#1976D2',
      '300': '#1976D2',
      '400': '#1976D2',
      '500': '#1976D2',
      '600': '#1976D2',
      '700': '#1976D2',
      '800': '#1976D2',
      '900': '#1976D2',
      'A100': '#1976D2',
      'A200': '#1976D2',
      'A400': '#1976D2',
      'A700': '#1976D2'
    });

    $mdIconProvider.icon('user', 'assets/images/user.svg', 64);
  });
