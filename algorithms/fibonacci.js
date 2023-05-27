// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144....
// the pattern of the sequence is that each value is the sum of the 2 previous values,
//that means that for N=5 -> 2 + 3

// O(N);
function fibonacciIterative(n) {
  if (n < 2) return n;

  let result = [0, 1];

  for (let i = 2; i < n; i++) {
    result[i] = result[i - 2] + result[i - 1];
  }

  return result[result.length - 1];
}

// O (N!)
function fibonacciRecursive(n) {
  if (n < 2) return n;

  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

// It can be improved with a memoization (dynamic programming);
