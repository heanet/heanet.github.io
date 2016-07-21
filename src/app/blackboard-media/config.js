(function () {
  'use strict';

  angular
    .module('heanet.blackboard-media')
    .config(configure);

  configure.$inject = ['$routeProvider'];

  function configure($routeProvider) {
    $routeProvider.when('/blackboard-media', {
      templateUrl: '/public/blackboard-media/index.html',
      controller: 'blackboard-media.indexCtrl',
      controllerAs: 'index'
    });
  }
})();
