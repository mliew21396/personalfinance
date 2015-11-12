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
      }
    };
    return store
  })