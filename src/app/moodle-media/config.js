(function () {
  'use strict';

  angular
    .module('heanet.moodle-media')
    .config(configure);

  configure.$inject = ['$routeProvider'];

  function configure($routeProvider) {
    $routeProvider.when('/moodle-media', {
      templateUrl: '/public/moodle-media/index.html',
      controller: 'moodle-media.indexCtrl',
      controllerAs: 'index'
    });
  }
})();
