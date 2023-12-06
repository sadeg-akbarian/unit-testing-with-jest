// TODO: add tests
// hint: analyze the existing tests for the coding katas
// the docs for jest can be found here: https://jestjs.io/docs/expect

import { speedDatingList } from "./speed-dating-list";

describe("speedDatingList", function () {
  it("should return an empty array", function () {
    const theResult = speedDatingList([]);
    expect(Array.isArray(theResult)).toEqual(true);
    expect(theResult.length).toBe(0);
  });

  it("should return an nested array with the length 2", function () {
    const theResult = speedDatingList(["Peter", "Paul"]);
    expect(Array.isArray(theResult)).toEqual(true);
    expect(theResult.length).toBe(1);
    expect(theResult).toEqual([["Peter", "Paul"]]);
  });

  it("should return an nested array with the length 3", function () {
    const theResult = speedDatingList(["Peter", "Paul", "Mary"]);
    expect(Array.isArray(theResult)).toEqual(true);
    expect(theResult.length).toBe(3);
    expect(theResult[1]).toEqual(["Peter", "Mary"]);
    expect(theResult).toEqual([
      ["Peter", "Paul"],
      ["Peter", "Mary"],
      ["Paul", "Mary"],
    ]);
  });
});
