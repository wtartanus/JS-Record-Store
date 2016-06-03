var Customer = require("../customer");
var Record = require("../record");
var assert = require('chai').assert;

describe('Customer initialize', function() {

  beforeEach(function () {
    wojtek = new Customer("Wojtek", 100);
  });

  it('Should have name', function() {
    assert.equal("Wojtek", wojtek.name);
  });

  it('Should have balance', function() {
    assert.equal(100, wojtek.balance);
  });

  it('Should have empty inventory', function() {
    assert.deepEqual([], wojtek.inventory);
  });
});

describe('Customer methods', function() {


  beforeEach(function () {
    wojtek = new Customer("Wojtek", 100);

    rihanna = new Record("Rihanna", "Diamonds", 10);
    eminem = new Record("Eminem", "Marshall", 12);
  });

  it('Should add record to inventory', function() {
    wojtek.add(rihanna);
    assert.deepEqual([{name: "Rihanna", title: "Diamonds", price: 10}], wojtek.inventory);
  });

  it('Should decrease balance', function() {
    wojtek.decreaseBalance(rihanna);
    assert.equal(90, wojtek.balance);
  });

  it('Should add record to inventory with buy method', function() {
    wojtek.buy(rihanna);
    assert.deepEqual([{name: "Rihanna", title: "Diamonds", price: 10}], wojtek.inventory);
  });

  it('Should decrease balance with buy method', function() {
    wojtek.buy(rihanna);
    assert.equal(90, wojtek.balance);
  });
});
