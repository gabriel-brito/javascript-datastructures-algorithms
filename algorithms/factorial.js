// O(N)
function factorialRecursive(number) {
  if (number === 2) return 2;

  return number * factorialRecursive(number - 1);
}

// O(N)
function factorialIterative(number) {
  if (number === 0) return 0;

  let result = number;

  for (let i = result - 1; i > 1; i--) {
    result *= i;
  }

  return result;
}
