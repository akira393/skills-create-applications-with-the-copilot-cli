const { add, subtract, multiply, divide, modulo, power, squareRoot, calculate } = require("../calculator");

// ── Existing operations ────────────────────────────────────────────────────

describe("add", () => {
  test("adds two positive numbers", () => expect(add(2, 3)).toBe(5));
  test("adds a positive and a negative number", () => expect(add(5, -3)).toBe(2));
  test("adds two negative numbers", () => expect(add(-4, -6)).toBe(-10));
  test("adds zero", () => expect(add(7, 0)).toBe(7));
});

describe("subtract", () => {
  test("subtracts two positive numbers", () => expect(subtract(10, 4)).toBe(6));
  test("subtracts resulting in negative", () => expect(subtract(3, 8)).toBe(-5));
  test("subtracts zero", () => expect(subtract(5, 0)).toBe(5));
});

describe("multiply", () => {
  test("multiplies two positive numbers", () => expect(multiply(4, 3)).toBe(12));
  test("multiplies by zero", () => expect(multiply(9, 0)).toBe(0));
  test("multiplies two negative numbers", () => expect(multiply(-3, -4)).toBe(12));
  test("multiplies a positive and a negative number", () => expect(multiply(3, -4)).toBe(-12));
});

describe("divide", () => {
  test("divides two positive numbers", () => expect(divide(10, 2)).toBe(5));
  test("divides resulting in a decimal", () => expect(divide(7, 2)).toBe(3.5));
  test("divides a negative by a positive", () => expect(divide(-9, 3)).toBe(-3));
  test("throws on division by zero", () => {
    expect(() => divide(5, 0)).toThrow("Division by zero is not allowed");
  });
});

// ── New operations ─────────────────────────────────────────────────────────

describe("modulo", () => {
  test("modulo with 5 % 2 returns 1", () => expect(modulo(5, 2)).toBe(1));
  test("modulo with 10 % 3 returns 1", () => expect(modulo(10, 3)).toBe(1));
  test("modulo with 9 % 3 returns 0 (exact division)", () => expect(modulo(9, 3)).toBe(0));
  test("modulo with negative dividend", () => expect(modulo(-7, 3)).toBe(-1));
  test("modulo with a decimal", () => expect(modulo(5.5, 2)).toBeCloseTo(1.5));
  test("throws on modulo by zero", () => {
    expect(() => modulo(5, 0)).toThrow("Division by zero is not allowed");
  });
});

describe("power", () => {
  test("power with 2 ^ 3 returns 8", () => expect(power(2, 3)).toBe(8));
  test("power with 5 ^ 2 returns 25", () => expect(power(5, 2)).toBe(25));
  test("power with exponent 0 returns 1", () => expect(power(7, 0)).toBe(1));
  test("power with exponent 1 returns base", () => expect(power(6, 1)).toBe(6));
  test("power with fractional exponent (2 ^ 0.5 ≈ 1.414)", () => expect(power(2, 0.5)).toBeCloseTo(1.4142));
  test("power with negative exponent returns fraction", () => expect(power(2, -1)).toBe(0.5));
  test("power with base 0 returns 0", () => expect(power(0, 5)).toBe(0));
});

describe("squareRoot", () => {
  test("square root of 16 returns 4", () => expect(squareRoot(16)).toBe(4));
  test("square root of 9 returns 3", () => expect(squareRoot(9)).toBe(3));
  test("square root of 2 returns approx 1.414", () => expect(squareRoot(2)).toBeCloseTo(1.4142));
  test("square root of 0 returns 0", () => expect(squareRoot(0)).toBe(0));
  test("square root of 1 returns 1", () => expect(squareRoot(1)).toBe(1));
  test("throws for negative numbers", () => {
    expect(() => squareRoot(-4)).toThrow("Square root of a negative number is not allowed");
  });
  test("throws for any negative value", () => {
    expect(() => squareRoot(-0.0001)).toThrow("Square root of a negative number is not allowed");
  });
});

// ── calculate() dispatcher ─────────────────────────────────────────────────

describe("calculate", () => {
  test("dispatches + operator", () => expect(calculate(3, "+", 4)).toBe(7));
  test("dispatches - operator", () => expect(calculate(10, "-", 3)).toBe(7));
  test("dispatches * operator", () => expect(calculate(3, "*", 4)).toBe(12));
  test("dispatches / operator", () => expect(calculate(8, "/", 2)).toBe(4));
  test("dispatches % operator", () => expect(calculate(5, "%", 2)).toBe(1));
  test("dispatches ** operator", () => expect(calculate(2, "**", 3)).toBe(8));
  test("throws on unsupported operator", () => {
    expect(() => calculate(1, "^", 2)).toThrow("Unsupported operator");
  });
});
