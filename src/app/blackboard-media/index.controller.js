(function () {
  'use strict';

  angular
    .module('heanet.blackboard-media')
    .controller('media.blackboard-media', indexCtrl);

  indexCtrl.$inject = ['$anchorScroll', '$location'];

  function indexCtrl($anchorScroll, $location) {
    var vm = this;

    vm.scrollTo = function (id) {
      $location.hash(id);
      $anchorScroll();
    }
  }

}());
