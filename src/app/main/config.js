(function () {
  'use strict';

  angular
    .module('heanet.main')
    .config(configure);

  configure.$inject = ['$routeProvider'];

  function configure($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: '/public/main/index.html',
      controller: 'main.indexCtrl',
      controllerAs: 'main'
    });
  }
})();
