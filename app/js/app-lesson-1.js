'use strict';
var myModule = angular.module('module', []);

myModule.controller('studyCtrl', function ($scope) {
  $scope.tasks = [
    {action: 'Buy item 1', complete: false, random: 097823},
    {action: 'Buy item 2', complete: false, random: 097823},
    {action: 'Buy item 3', complete: true, random: 097823},
    {action: 'Buy item 4', complete: false, random: 097823},
    {action: 'Buy item 5', complete: true, random: 097823},
  ];
  $scope.showFile = function () {
    return $scope.noIndexPage ? 'lesson-0.html' : 'index.html';
  };
  $scope.displayMessage = function () {
    console.log('Content: ' + $scope.showFile());
  };

  // for ng-switch
  $scope.data = {};
});