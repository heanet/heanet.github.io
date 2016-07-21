(function () {
  'use strict';

  angular
    .module('heanet', [
      'ngRoute',
      'heanet.main',
      'heanet.moodle-media',
      'heanet.blackboard-media'
    ])
    .run(run);

  run.$inject = [];

  function run() {
  }

}());
