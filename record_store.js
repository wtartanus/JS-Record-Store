var Store = function (name, city, balance) {
  this.name = name;
  this.city = city;
  this.balance = balance;
  this.inventory = [];
};

Store.prototype = {
  add: function(record) {
    this.inventory.push(record);
  },

  inventoryPrint: function () {
    var list = [];
    for (var i = 0; i < this.inventory.length; i++) {
      list.push("Artist: " + this.inventory[i].name + ", Album: " + this.inventory[i].title );
    }
    return list;
  },

  addBalance: function (record) {
        this.balance += record.price;

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

  sell: function (record,customer) {

    var result = this.delete(record);
    this.addBalance(result[0]);
    customer.inventory.push(result[0]);
    customer.balance -= result[0].price;
  },

  total: function () {
    var totalValue = 0;
    for (var i = 0; i < this.inventory.length; i++) {
      totalValue += this.inventory[i].price;
    }
    var string = "Balance: " + this.balance + ", Stock Value: " + totalValue;
    return string;
  },

  decreaseBalance: function (record) {
    this.balance -= record.price;
  },

  buy: function (record) {
    this.decreaseBalance(record);
    this.add(record);
  }

};


module.exports = Store;
