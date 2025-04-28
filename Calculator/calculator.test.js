import { calculator } from "./calculator"

test('Adds two whole numbers', () => {
  expect(calculator.add(3, 4)).toBe(7)
})

test('Adds two fractions', () => {
  expect(calculator.add(1.5, 3.5)).toBe(5)
})

test('Subtracts two whole numbers', () => {
  expect(calculator.subtract(3, 4)).toBe(-1)
})

test('Subtracts two fractions', () => {
  expect(calculator.subtract(3.5, 1.5)).toBe(2)
})

test('Divides by a whole numbers', () => {
  expect(calculator.divide(16, 8)).toBe(2)
})

test('Divides by a fraction', () => {
  expect(calculator.divide(2.4, 2)).toBe(1.2)
})

test('Divides by a negative number', () => {
  expect(calculator.divide(6, -2)).toBe(-3)
})

test('Multiplies two whole numbers', () => {
  expect(calculator.multiply(4, 8)).toBe(32)
})

test('Multiplies fractions', () => {
  expect(calculator.multiply(2.4, 2)).toBe(4.8)
})

test('Multiplies negative numbers', () => {
  expect(calculator.multiply(-6, -2)).toBe(12)
})