const assert = require("assert");
const parseBoolean = require("./index");

describe("parseBoolean", function() {
  it("should return the boolean value if the input is a boolean", function() {
    assert.strictEqual(parseBoolean(true), true);
    assert.strictEqual(parseBoolean(false), false);
  });

  it("should return true if the input is the string 'true'", function() {
    assert.strictEqual(parseBoolean("true"), true);
    assert.strictEqual(parseBoolean("True"), true);
    assert.strictEqual(parseBoolean("TRUE"), true);
  });

  it("should return false if the input is the string 'false'", function() {
    assert.strictEqual(parseBoolean("false"), false);
    assert.strictEqual(parseBoolean("False"), false);
    assert.strictEqual(parseBoolean("FALSE"), false);
  });

  it("should return undefined if the input is not a boolean or a valid boolean string", function() {
    assert.strictEqual(parseBoolean("invalid"), undefined);
    assert.strictEqual(parseBoolean(123), undefined);
    assert.strictEqual(parseBoolean(null), undefined);
    assert.strictEqual(parseBoolean(undefined), undefined);
    assert.strictEqual(parseBoolean({}), undefined);
    assert.strictEqual(parseBoolean([]), undefined);
  });
});
