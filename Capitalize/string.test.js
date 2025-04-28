import { capitalize, reverseString } from "./string" 

test('Capitalizes first character in one word string', () => {
  expect(capitalize("stolir")).toBe("Stolir")
})

test('Capitalizes first character in two word string', () => {
  expect(capitalize("hello, world!")).toBe("Hello, world!")
})

test('Reverse one word string', () => {
  expect(reverseString("hello")).toBe("olleh")
})

test('Reverse two word string', () => {
  expect(reverseString("hello world")).toBe("dlrow olleh")
})
