describe ('FizzBuzz', function() {

  beforeEach(function() {
    fizz = new FizzBuzz();
  });

  var fizz;

  describe("knows when a number is", function (){

it ("Should be divisible by three", function (){
  expect(fizz.isDivisibleByThree(3)).toBe(true);    
 
    });
it ("Should be divisible by five", function (){
  expect(fizz.isDivisibleByFive(5)).toBe(true);

});

it ("Should be divisible by fifteen", function (){
  expect(fizz.isDivisibleByFifteen(15)).toBe(true);
});

  });

  describe("knows when a number is NOT", function () {

    it ("divisible by three", function() {
      expect(fizz.isDivisibleByThree(1)).toBe(false);
    });

it ("divisible by five", function(){
  expect(fizz.isDivisibleByFive(1)).toBe(false);

});

it("divisible by fifteen", function(){
  expect(fizz.isDivisibleByFifteen(1)).toBe(false);
});

  });

describe("says", function() {

  it ('"Fizz" when a number is divisible by three', function() {
    expect(fizz.says(3)).toEqual("Fizz");
  });

  it ('"Buzz" when a number is divisible by five', function() {
    expect(fizz.says(5)).toEqual("Buzz");

  });

  it('"FizzBuzz" when a number is divisible by fifteen', function() {
    expect(fizz.says(15)).toEqual("FizzBuzz");
  });

  it('The number when not divisible by fizzbuzz', function() {
    expect(fizz.says(4)).toEqual(4);

  });

});


}); 