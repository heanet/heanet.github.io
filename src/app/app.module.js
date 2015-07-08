(function () {
  'use strict';

  angular
    .module('heanet', [
      'ngRoute',
      'heanet.main'
    ])
    .run(run);

  run.$inject = [];

  function run() {
  }

}());
