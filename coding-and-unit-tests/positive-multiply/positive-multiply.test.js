// TODO: add tests
// hint: analyze the existing tests for the coding katas
// the docs for jest can be found here: https://jestjs.io/docs/expect

import { positiveMultiply } from "./positive-multiply";

describe("positiveMultiply", function () {
  it("should multiply two positive numbers and return a positive number", function () {
    const theResult = positiveMultiply(3, 4);

    expect(theResult[0]).toBe(3);
    expect(theResult[1]).toBe(4);
    expect(theResult[2]).toBe(12);
  });
  it("should multiply a positive with a negative number and return a positive number", function () {
    const theResult = positiveMultiply(3, -4);

    expect(theResult[0]).toBe(3);
    expect(theResult[1]).toBe(-4);
    expect(theResult[2]).toBe(12);
  });

  it("should multiply two negative numbers and return a positive number", function () {
    const theResult = positiveMultiply(-3, -4);

    expect(theResult[0]).toBe(-3);
    expect(theResult[1]).toBe(-4);
    expect(theResult[2]).toBe(12);
  });
});
