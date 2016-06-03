var Customer = function (name, balance) {
  this.name = name;
  this.balance = balance;
  this.inventory = [];
};

Customer.prototype = {
  add: function (record) {
    this.inventory.push(record);
  },

  decreaseBalance: function (record) {
    this.balance -= record.price;
  },

  buy: function (record) {
    this.add(record);
    this.decreaseBalance(record);
  }
};

module.exports = Customer;
