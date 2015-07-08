(function () {
  'use strict';

  angular
    .module('heanet.main')
    .config(configure);

  configure.$inject = ['$routeProvider'];

  function configure($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: '/main/main.html',
      controller: 'main.mainCtrl',
      controllerAs: 'main'
    });
  }
})();
