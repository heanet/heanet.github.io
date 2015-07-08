(function () {
  'use strict';

  angular
    .module('heanet.media')
    .config(configure);

  configure.$inject = ['$routeProvider'];

  function configure($routeProvider) {
    $routeProvider.when('/media', {
      templateUrl: '/media/index.html',
      controller: 'media.indexCtrl',
      controllerAs: 'index'
    });
  }
})();
