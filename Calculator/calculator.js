export const calculator = function() {
  const add = (x, y) => {
    return x + y;
  }

  const subtract = (x, y) => {
    return x - y;
  }

  return { add, subtract }
}()