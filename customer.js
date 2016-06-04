require('./record_store');


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

  delete: function (name) {
    var result;
    for (var i = 0; i < this.inventory.length; i++) {
      if(this.inventory[i].name === name) {
         result = this.inventory.splice(i,1);
      }
    }
    return result;
  },

  searchShop: function (record, shop) {
    var result;
    for (var i = 0; i < shop.inventory.length; i++) {
      if(shop.inventory[i].name === record ) {
         result = shop.inventory.splice(i,1);
         shop.balance += result[0].price;
      }
    }

    return result[0];

  },

  buy: function (record, shop) {

    var result = this.searchShop(record, shop);
    this.add(result);
    this.decreaseBalance(result);
  },

  sell: function (record, shop) {
    var result = this.delete(record);
    this.balance += result[0].price;
    shop.inventory.push(result[0]);
    shop.balance -= result[0].price;
  }
};

module.exports = Customer;
