var numbers = [1, 56, 2, 4, 1, 99, 3, 5]
var multiply = function (a, b) {
  return a * b
}
// Your code here!
var total = numbers.reduce(multiply)
// Write something that takes the above array and returns the product of all the numbers
// via multiplication
console.log(total)
