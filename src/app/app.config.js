(function() {
  'use strict';

  angular
    .module('heanet')
    .config(configure);

  configure.$inject = ['$routeProvider'];

  function configure($routeProvider) {
    $routeProvider.otherwise(
      {
        redirectTo: '/'
      }
    );
  }

})();
