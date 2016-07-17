'use strict';
var myModule = angular.module('module', []);

myModule.controller('studyCtrl', function ($scope) {
  $scope.tasks = [
    {action: 'Buy item 1', complete: false},
    {action: 'Buy item 2', complete: false},
    {action: 'Buy item 3', complete: true},
    {action: 'Buy item 4', complete: false},
    {action: 'Buy item 5', complete: true},
  ];

  $scope.buttonNames = ['red', 'green', 'blue'];
  $scope.settings = {
    columns: 'green',
    rows: 'red'
  };
});