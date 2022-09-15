// You are given two interior angles (in degrees) of a triangle.

// Write a function to return the 3rd.

// Note: only positive integers will be tested.
https://en.wikipedia.org/wiki/Triangle


function otherAngle(a, b) {
  let c = 180
  return c -(a + b);
}

// Another way to solve this kata.

function otherAngle(a, b) {
  return 180-(a+b);
}

// Solution
const otherAngle = (a, b) => 180 - a - b
