/**
 * calculator.js - Node.js CLI Calculator
 *
 * Supports the following basic arithmetic operations:
 *   - Addition (+)
 *   - Subtraction (-)
 *   - Multiplication (x)
 *   - Division (÷)
 *
 * Usage: node calculator.js <number1> <operator> <number2>
 * Operators: +, -, *, /
 * Example: node calculator.js 10 + 5
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

// Perform the calculation based on the operator provided
function calculate(a, operator, b) {
  switch (operator) {
    case "+": return add(a, b);
    case "-": return subtract(a, b);
    case "*": return multiply(a, b);
    case "/": return divide(a, b);
    default: throw new Error(`Unsupported operator: ${operator}. Use +, -, *, or /`);
  }
}

module.exports = { add, subtract, multiply, divide, calculate };

// CLI entry point
if (require.main === module) {
  const [,, num1, operator, num2] = process.argv;

  if (!num1 || !operator || !num2) {
    console.error("Usage: node calculator.js <number1> <operator> <number2>");
    console.error("Operators: +, -, *, /");
    process.exit(1);
  }

  const a = parseFloat(num1);
  const b = parseFloat(num2);

  if (isNaN(a) || isNaN(b)) {
    console.error("Error: Both operands must be valid numbers");
    process.exit(1);
  }

  try {
    const result = calculate(a, operator, b);
    console.log(`${a} ${operator} ${b} = ${result}`);
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
}
