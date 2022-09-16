// DESCRIPTION:
// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]


function digitize(n) {
  //code here
  return Array.from(String(n), Number).reverse()
}

// Another good way to solve this.
function digitize(n) {
  return String(n).split('').reverse().map(Number)
}
