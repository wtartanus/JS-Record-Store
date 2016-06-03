var Store = require("../record_store");
var Record = require("../record");
var Customer = require("../customer");
var assert = require('chai').assert;

describe('Store initialize test', function() {


  beforeEach(function () {
    shop = new Store("Simply Music", "Edinburgh", 1000);
  });

  it('Should have a name', function() {
    assert.equal("Simply Music", shop.name);
  });

  it('Should have city', function() {
    assert.equal("Edinburgh", shop.city);
  });

  it('Should have balance', function() {
    assert.equal( 1000, shop.balance);
  });

  it('Should have empty inventory', function() {
    assert.deepEqual([], shop.inventory);
  });
});

describe('Store methods test', function() {

  beforeEach(function () {
    shop = new Store("Simply Music", "Edinburgh", 1000);

    rihanna = new Record("Rihanna", "Diamonds", 10);
    eminem = new Record("Eminem", "Marshall", 12);
    shakira = new Record("Shakira", "Wolf", 9);
    britney = new Record("Britney", "Lolipop", 7);
    kid_rock = new Record("Kid Rock", "Drums", 10);

    shop.add(rihanna);
    shop.add(eminem);
    shop.add(shakira);
    shop.add(britney);
  });

  it('Should add records to inventory', function() {
    assert.equal(4, shop.inventory.length);
  });

  it('Should list inventory', function() {
    assert.deepEqual(["Artist: Rihanna, Album: Diamonds","Artist: Eminem, Album: Marshall",
  "Artist: Shakira, Album: Wolf","Artist: Britney, Album: Lolipop"], shop.inventoryPrint());
  });

  it('Should add record price to balance', function() {
    shop.addBalance("Rihanna");
    assert.equal(1010, shop.balance );
  });

  it('Should delete record from inventory', function() {
    shop.delete("Rihanna");
    assert.deepEqual(["Artist: Eminem, Album: Marshall",
  "Artist: Shakira, Album: Wolf","Artist: Britney, Album: Lolipop"], shop.inventoryPrint());
  });

  it('When sell should incrase balance', function() {
    shop.sell("Rihanna");
    assert.equal(1010, shop.balance);
  });

  it('When sell should delete record from inventory', function() {
    shop.sell("Rihanna");
    assert.deepEqual(["Artist: Eminem, Album: Marshall",
  "Artist: Shakira, Album: Wolf","Artist: Britney, Album: Lolipop"], shop.inventoryPrint());
  });

  it('Should return current balance and stock value', function() {
    assert.equal("Balance: 1000, Stock Value: 38", shop.total());
  });

  it('Should decrease balance by record price', function() {
    shop.decreaseBalance(kid_rock);
    assert.equal(990, shop.balance );
  });

  it('Should add record to inventory with buy method', function() {
    shop.buy(kid_rock);
    assert.deepEqual(["Artist: Rihanna, Album: Diamonds","Artist: Eminem, Album: Marshall",
  "Artist: Shakira, Album: Wolf","Artist: Britney, Album: Lolipop","Artist: Kid Rock, Album: Drums"], shop.inventoryPrint());
  });

  it('Should dcrease balance with buy method', function() {
    shop.buy(kid_rock);
    assert.equal(990, shop.balance);
  });


});
