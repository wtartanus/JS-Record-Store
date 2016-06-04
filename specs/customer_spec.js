var Customer = require("../customer");
var Record = require("../record");
var Shop = require("../record_store");
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

    shop = new Shop("Simply Music", "Edinburgh", 1000);

    shop.add(rihanna);
    shop.add(eminem);

    wojtek.buy("Rihanna", shop);
  });

  it('Should add record to inventory', function() {
    wojtek.add(rihanna);
    assert.equal(2, wojtek.inventory.length);
  });

  it('Should decrease balance', function() {
    wojtek.decreaseBalance(rihanna);
    assert.equal(80, wojtek.balance);
  });

  it('Should add record to inventory with buy method', function() {
    assert.deepEqual(1, wojtek.inventory.length);
  });

  it('Should decrease balance with buy method', function() {

    assert.equal(90, wojtek.balance);
  });

  it('Should be empty inventory', function() {
    wojtek.sell("Rihanna", shop);
    assert.equal(0, wojtek.inventory.length);
  });

  it('Should add money to balance', function() {
    wojtek.sell("Rihanna", shop);
    assert.equal(100, wojtek.balance);
  });
});
