var Record = require("../record");
var assert = require("chai").assert;

describe('Record test', function() {


 beforeEach(function() {
   rihanna = new Record("Rihanna", "Diamonds", 10);
 });

  it('Shoud have a name', function() {
    assert.equal('Rihanna', rihanna.name );
  });

  it('Should have a title', function() {
    assert.equal("Diamonds", rihanna.title);
  });

  it('Should have a price', function() {
    assert.equal(10, rihanna.price);
  });
});
