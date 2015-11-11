var app = angular.module('digOut', []);

app.controller('MainCtrl', [
  '$scope',
  function($scope){
  $scope.blah = [1,2,3];
  $scope.loans = [1,2,3];

  $scope.addLoanForm = function(){
    $scope.loans.push(4)
  };
  $scope.deleteLoan = function(){
    $scope.loans.splice(this.$index,1)
  }
}]);