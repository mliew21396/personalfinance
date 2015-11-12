angular.module('digOut')
  .controller('MainCtrl', [
    '$scope',
    'localStorage',
    function($scope, localStorage){

    $scope.loans = localStorage.loans
    $scope.addLoanForm = function(){
      localStorage.add();
    };
    $scope.deleteLoan = function(){
      localStorage.delete(this);
    }

    $scope.calculatePayoff = function(){
      // console.log($scope.loanName);
    }
  }]);