
describe("FizzBuzz", function () {
    it("returns fizzbuzz when number can be divided by 3 and 5", function () {
        var fizzBuzz = new FizzBuzz()
        expect(fizzBuzz.check(15)).toEqual('fizzbuzz');
    });

    it("returns buzz when number can be divided by 5", function () {
        var fizzBuzz = new FizzBuzz()
        expect(fizzBuzz.check(5)).toEqual('buzz');
    });

    it("returns fizz when number can be divided by 3", function () {
        var fizzBuzz = new FizzBuzz()
        expect(fizzBuzz.check(3)).toEqual('fizz');
    });
    it("when not divisible by 3 or 5 print number", function () {
        var fizzBuzz = new FizzBuzz()
        expect(fizzBuzz.check(7)).toEqual(7);
    });
});
