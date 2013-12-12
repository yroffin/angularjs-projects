'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', ['$scope', function($scope) {
    /**
     * load swap
     */
    $scope.test = function() {
        console.info('Book: ' + '/main/book/' + swap.id);
        console.info();
    }
  }])
  .controller('MyCtrl2', [function() {

  }]);