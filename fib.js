 // return the nth fibonacci number
 // 1 1 2 3 5 8 13
 // recursion solution
const fib = (n) => {
  // base case
  if (n <= 1) return 1
  return fib(n - 1) + fib(n - 2)
}

console.log(fib(5))