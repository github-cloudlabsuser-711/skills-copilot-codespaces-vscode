class Calculator {
    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }

    multiply(a, b) {
        return a * b;
    }

    divide(a, b) {
        if (b === 0) {
            throw new Error("Cannot divide by zero");
        }
        return a / b;
    }
}

// Usage
const calculator = new Calculator();
console.log(calculator.add(5, 3));      // Outputs: 8
console.log(calculator.subtract(5, 3)); // Outputs: 2
console.log(calculator.multiply(5, 3)); // Outputs: 15
console.log(calculator.divide(6, 3));   // Outputs: 2

const Calculator = require('./Calculator'); // Assuming the Calculator class is exported from its file

describe('Calculator', () => {
    let calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    test('add method should return the sum of two numbers', () => {
        expect(calculator.add(5, 3)).toBe(8);
        expect(calculator.add(-5, 3)).toBe(-2);
    });

    test('subtract method should return the difference of two numbers', () => {
        expect(calculator.subtract(5, 3)).toBe(2);
        expect(calculator.subtract(3, 5)).toBe(-2);
    });

    test('multiply method should return the product of two numbers', () => {
        expect(calculator.multiply(5, 3)).toBe(15);
        expect(calculator.multiply(5, -3)).toBe(-15);
    });

    test('divide method should return the quotient of two numbers', () => {
        expect(calculator.divide(6, 3)).toBe(2);
        expect(calculator.divide(-6, 3)).toBe(-2);
    });

    test('divide method should throw an error when dividing by zero', () => {
        expect(() => calculator.divide(6, 0)).toThrow('Cannot divide by zero');
    });
});