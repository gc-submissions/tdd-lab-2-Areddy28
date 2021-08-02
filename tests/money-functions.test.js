//const {getCoins, formatCurrency} = require("../src/js/money-functions")
const { getCoins, formatCurrency} = require("../src/js/money-functions")
/*

Given the amount 0, it returns "$0.00".
Given the amount 1, it returns "$1.00".
Given the amount 1.5 it returns "$1.50".
Given the amount 0.01, it returns "$0.01".
Given the amount 527.6789, it returns "$527.68".
Given the amount -1, it returns "-$1.00".
Add two more test cases with numbers that you choose.

*/ 


describe("formatCurrency", () => {
  test("Given the amount 0, it returns $0.00", () => {
    expect(formatCurrency(0)).toBe("$0.00")
  });


});

describe("getCoins", () => {
  test("32 cents produces: quarters: 1, dimes: 0, nickels: 1, pennies: 2", () => {
    expect(getCoins(32)).toEqual({"dimes": 0, "nickels": 1, "pennies": 2, "quarters": 1}); 
  });
});