'use strict';
var myModule = angular.module('module', []);

myModule.controller('countriesCtrl', function($scope) {
  $scope.countries = [
    {
      name: 'Ukraine',
      area: 60000,
      population: 43000000,
      capital: {name: 'Kiev'}
    }, {
      name: 'Russia',
      area: 123,
      population: 23424,
      capital: {name: 'Kiev 1'}
    }, {
      name: 'England',
      area: 3432,
      population: 43000000,
      capital: {name: 'London'}
    }
  ];
});

myModule.controller('itemList', function ($scope) {
  $scope.items = [
    {text: 'Coco', done: false},
    {text: 'Milk', done: true},
    {text: 'Shugar', done: false},
    {text: 'Potaito', done: true},
  ];

  $scope.remain = function () {
    var count = 0;

    angular.forEach($scope.items, function(item){
      count += item.done;
    });

    return count;
  };

  $scope.addItem = function () {
    $scope.items.push({text: $scope.newItemName, done: false});
    $scope.newItemName = '';
  };
});