(function () {
  'use strict';

  angular
    .module('heanet.moodle-media')
    .controller('moodle-media.indexCtrl', indexCtrl);

  indexCtrl.$inject = ['$anchorScroll', '$location'];

  function indexCtrl($anchorScroll, $location) {
    var vm = this;

    vm.scrollTo = function (id) {
      $location.hash(id);
      $anchorScroll();
    }
  }

}());
