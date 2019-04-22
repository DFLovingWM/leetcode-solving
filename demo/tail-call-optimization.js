function fibonacci (n) {
  if (n <= 1) return 1
  return fibonacci(n - 1) + fibonacci(n - 2)
}

function fibonacci (n, a = 1, b = 1) {
  if (n <= 1) return b
  return fibonacci(n - 1, b, a + b)
}

console.log(fibonacci(10))