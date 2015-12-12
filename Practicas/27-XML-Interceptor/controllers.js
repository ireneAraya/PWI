angular.module('xmlinterceptor.controllers', [])

.controller('xmlinterceptor', function($scope, $exchangerate){
  $scope.compra = $exchangerate.compra;
  $scope.venta = $exchangerate.venta;
});