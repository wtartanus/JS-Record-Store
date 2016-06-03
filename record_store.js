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

  addBalance: function (name) {
    for (var i = 0; i < this.inventory.length; i++) {
      if(this.inventory[i].name === name ) {
        this.balance += this.inventory[i].price;
      }
    }
  },

  delete: function (name) {
    for (var i = 0; i < this.inventory.length; i++) {
      if(this.inventory[i].name === name ) {
        this.inventory.splice(i,1);
      }
    }
  },

  sell: function (name) {
    this.addBalance(name);
    this.delete(name);
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
