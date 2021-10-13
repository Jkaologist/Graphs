 // return the factorial of a number
 // !0 = 1
 // !1 = 1
 // !2 = 2 * 1 * 1
 // !3 = 3 * 2 * 1 * 1
 // n * factorial(n-1)

//  // recursion solution
// const factorial = (n) => {
//   if (n <= 1) return 1
//   return n * factorial(n-1)
// }

// tabulated solution
const factorial = (n) => {
  const table = Array(n + 1).fill(1)
  table[0] = 1
  for (let i = 1; i <= n; i++) {
    table[i] = table[i - 1] * i
  }
  return table[n]
}

console.log(factorial(0))
console.log(factorial(1))
console.log(factorial(2))
console.log(factorial(3))
console.log(factorial(4))
console.log(factorial(5))