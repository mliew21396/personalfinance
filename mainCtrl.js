angular.module('digOut')
  .controller('MainCtrl', [
    '$scope',
    'localStorage',
    function($scope, localStorage){
    var monthlyPayment = $scope.monthlyPayment;
    $scope.loans = localStorage.loans;

    $scope.addLoanForm = function(){
      localStorage.add();
    };
    $scope.deleteLoan = function(){
      localStorage.delete(this);
    }

    $scope.calculatePayoff = function(){
      $scope.payoffTime = localStorage.payoff($scope.monthlyPayment);
    }


  }]);