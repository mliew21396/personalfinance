angular.module('digOut')
  .factory('localStorage', function(){
    var store = {
      loans: [new loan(1,1,1,1),new loan(2,2,2,2)],

      add: function() {
        store.loans.push(new loan())
      },

      delete: function(loan) {
        store.loans.splice(store.loans.indexOf(loan), 1)
      },

      payoff: function(monthlyPayment) {
        if (store.loans.length > 1) {
          var totalTime = 0;
          // var remainingLoans = {};
          var remainingLoans = store.loans;
          console.log(remainingLoans);
          // var currentPrinciple = {};
          var currentBalance = calculateBalance();
          console.log(currentBalance);


          // // Loop over months
          // var counter = 0;
          // while(Object.keys(remainingLoans).length > 0) {
          //   counter++;
          //   // if (counter > 12*100) {
          //   //   return null;
          //   // };

          //   var extraPayment = monthlyPayment;
          //   remainingLoans.forEach(function(loan){
          //     extraPayment = extraPayment - loan[minPayment]
          //   })



          // }

        } else {
          var principle = store.loans[0].balance;
          var rate = parseFloat(store.loans[0].rate)/100;
          return loanPaymentTime(principle, monthlyPayment, rate);
        }
      }
    };

    function calculateBalance() {
      return store.loans.reduce(function(previousValue, currentValue, index, array) {
        return parseFloat(previousValue.balance) + parseFloat(currentValue.balance);
      });
    };

    function loan(name, balance, minPayment, rate) {
      this.name = typeof name !== 'undefined' ? name : "";
      this.balance = typeof balance !== 'undefined' ? balance : "";
      this.minPayment = typeof minPayment !== 'undefined' ? minPayment : "";
      this.rate = typeof rate !== 'undefined' ? rate : "";;
    };

    function loanPaymentTime(principle, monthlyPayment, rate){
      return (Math.log(monthlyPayment) - Math.log(monthlyPayment - principle * rate / 12)) / Math.log(1 + rate / 12);
    };

    return store
  })