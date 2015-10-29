var code = require('../main');
var expect = require('chai').expect;

describe('taxCalculator', function(){

  it('should tax 10% on the first $10', function() {
    expect(code.taxCalculator(10)).to.equal(1.00);
  });

  it('should tax 7% on the second $10', function(){
    expect(code.taxCalculator(15)).to.be.equal(1.35);
  });
  it('should tax 5% on the third $10', function(){
    expect(code.taxCalculator(25)).to.be.within(1.95, 1.95000002);
  });
  it('should tax 3% on the forth $10', function(){
    expect(code.taxCalculator(35)).to.be.equal(2.35);
  });

});
