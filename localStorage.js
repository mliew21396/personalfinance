angular.module('digOut')
  .factory('localStorage', function(){
    function loan(name, balance, minPayment, rate) {
      this.name = typeof name !== 'undefined' ? a : "";
      this.balance = typeof balace !== 'undefined' ? a : "";
      this.minPayment = typeof minPayment !== 'undefined' ? a : "";
      this.rate = typeof rate !== 'undefined' ? a : "";;
    };

    var store = {
      loans: [],

      add: function() {
        store.loans.push(new loan())
      },

      delete: function(loan) {
        store.loans.splice(store.loans.indexOf(loan), 1)
      },

      payoff: function(monthlyPayment) {
        // var sum = 0;
        // if (store.loans.length > 1) {
        //   sum = store.loans.reduce(function(previousValue, currentValue, index, array) {
        //     return parseFloat(previousValue.balance) + parseFloat(currentValue.balance);
        //   });
        // } else {
        //   sum = store.loans[0].balance
        // }

        var principle = store.loans[0].balance;
        var rate = parseFloat(store.loans[0].rate)/100;
        var time = (Math.log(m) - Math.log(m - principle * rate / 12)) / Math.log(1 + rate / 12);
        return time

        // return sum / monthlyPayment;
      }

    };
    return store
  })