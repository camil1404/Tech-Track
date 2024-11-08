// Write a module that exports two functions, a square function with an argunment number and an average number that takes multiple numbers.

function square(x) {
  return x * x;
}

function average(...numbers) {
  const total = numbers.reduce((sum, num) => sum + num, 0);
  return total / numbers.length;
}

// Export the functions using named exports.
export { square, average };
