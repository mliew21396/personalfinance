angular.module('digOut')
  .controller('MainCtrl', [
    '$scope',
    'localStorage',
    function($scope, localStorage){
    $scope.loans = [new Object()];

    $scope.addLoanForm = function(){
      $scope.loans.push(new Object())
    };
    $scope.deleteLoan = function(){
      $scope.loans.splice(this.$index,1)
    }

    // var loans = localStorage.loans

    $scope.calculatePayoff = function(){
      // console.log($scope.loanName);
    }
  }]);