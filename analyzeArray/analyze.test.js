import { analyzeArray } from './analyze'

test("Returns an object with the correct average", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).average).toBe(4)
})

test("Returns an object with the correct min value", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).min).toBe(1)
})

test("Returns an object with the correct max value", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).max).toBe(8)
})

test("Returns an object with the correct length", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).length).toBe(6)
})