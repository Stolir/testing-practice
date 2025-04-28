import { caesarCipher } from './caesar'

test('Encrypts one word by a 3 shift', () => {
  expect(caesarCipher("hello", 3)).toBe("khoor")
})

test('Works with special characters', () => {
  expect(caesarCipher("hello!", 3)).toBe("khoor!")
})

test('Wraps the cipher table at the end', () => {
  expect(caesarCipher('xyz', 3)).toBe("abc")
})

test('Preserves correct case', () => {
  expect(caesarCipher('HeLLo', 3)).toBe("KhOOr")
})

test('Preserves correct case', () => {
  expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!')
})

