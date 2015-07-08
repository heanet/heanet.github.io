(function () {
  'use strict';

  angular
    .module('heanet', [
      'ngRoute',
      'heanet.main',
      'heanet.media'
    ])
    .run(run);

  run.$inject = [];

  function run() {
  }

}());
