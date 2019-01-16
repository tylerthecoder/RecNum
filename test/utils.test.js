const expect = require('chai').expect;
const funcs = require("../dist/utils.js")

describe("Utils", () => {
  it("Rest", function() {
    expect(funcs.rest([1,2,3])).to.deep.equal([2,3]);
    expect(funcs.rest([1])).to.deep.equal([]);
    expect(funcs.rest([3,2,1,4,3,2,3])).to.deep.equal([2,1,4,3,2,3]);
  });
});