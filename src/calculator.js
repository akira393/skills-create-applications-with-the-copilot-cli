/**
 * calculator.js - Node.js CLI Calculator
 *
 * Supports the following basic arithmetic operations:
 *   - Addition (+)
 *   - Subtraction (-)
 *   - Multiplication (x)
 *   - Division (÷)
 *   - Modulo (%)
 *   - Exponentiation (**)
 *   - Square Root (sqrt)
 *
 * Usage: node calculator.js <number1> <operator> <number2>
 *        node calculator.js sqrt <number>
 * Operators: +, -, *, /, %, **
 * Example: node calculator.js 10 + 5
 *          node calculator.js 10 % 3
 *          node calculator.js 2 ** 8
 *          node calculator.js sqrt 9
 */

// Addition: returns the sum of two numbers
function add(a, b) {
  return a + b;
}

// Subtraction: returns the difference of two numbers
function subtract(a, b) {
  return a - b;
}

// Multiplication: returns the product of two numbers
function multiply(a, b) {
  return a * b;
}

// Division: returns the quotient of two numbers; throws on division by zero
function divide(a, b) {
  if (b === 0) throw new Error("Division by zero is not allowed");
  return a / b;
}

// Modulo: returns the remainder of a divided by b; throws on division by zero
function modulo(a, b) {
  if (b === 0) throw new Error("Division by zero is not allowed");
  return a % b;
}

// Power: returns base raised to the exponent
function power(base, exponent) {
  return base ** exponent;
}

// Square Root: returns the square root of n; throws for negative numbers
function squareRoot(n) {
  if (n < 0) throw new Error("Square root of a negative number is not allowed");
  return Math.sqrt(n);
}

// Perform the calculation based on the operator provided
function calculate(a, operator, b) {
  switch (operator) {
    case "+": return add(a, b);
    case "-": return subtract(a, b);
    case "*": return multiply(a, b);
    case "/": return divide(a, b);
    case "%": return modulo(a, b);
    case "**": return power(a, b);
    default: throw new Error(`Unsupported operator: ${operator}. Use +, -, *, /, %, or **`);
  }
}

module.exports = { add, subtract, multiply, divide, modulo, power, squareRoot, calculate };

// CLI entry point
if (require.main === module) {
  const [,, arg1, arg2, arg3] = process.argv;

  // Handle: node calculator.js sqrt <number>
  if (arg1 === "sqrt") {
    if (!arg2) {
      console.error("Usage: node calculator.js sqrt <number>");
      process.exit(1);
    }
    const n = parseFloat(arg2);
    if (isNaN(n)) {
      console.error("Error: Operand must be a valid number");
      process.exit(1);
    }
    try {
      console.log(`sqrt(${n}) = ${squareRoot(n)}`);
    } catch (err) {
      console.error(`Error: ${err.message}`);
      process.exit(1);
    }
    process.exit(0);
  }

  // Handle: node calculator.js <number1> <operator> <number2>
  if (!arg1 || !arg2 || !arg3) {
    console.error("Usage: node calculator.js <number1> <operator> <number2>");
    console.error("       node calculator.js sqrt <number>");
    console.error("Operators: +, -, *, /, %, **");
    process.exit(1);
  }

  const a = parseFloat(arg1);
  const b = parseFloat(arg3);

  if (isNaN(a) || isNaN(b)) {
    console.error("Error: Both operands must be valid numbers");
    process.exit(1);
  }

  try {
    const result = calculate(a, arg2, b);
    console.log(`${a} ${arg2} ${b} = ${result}`);
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
}
