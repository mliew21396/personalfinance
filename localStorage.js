angular.module('digOut')
  .factory('localStorage', function(){
    var store = {
      loans: [],

      add: function(loan) {
        store.loans.push(loan);
      },

      delete: function(loan) {
        store.loans.splice(store.loans.indexOf(todo), 1);
      }
    };
    return store
  })