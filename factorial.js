 // return the factorial of a number
 // !0 = 1
 // !1 = 1
 // !2 = 2 * 1 * 1
 // !3 = 3 * 2 * 1 * 1
 // n * factorial(n-1)

 // recursion solution
const factorial = (n) => {
  if (n <= 1) return 1
  return n * factorial(n-1)
}

console.log(factorial(0))
console.log(factorial(1))
console.log(factorial(2))
console.log(factorial(3))
console.log(factorial(4))
console.log(factorial(5))