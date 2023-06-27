// https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript

// my solution
function myMakeNegative(num) {
  return num <= 0 ? num : -num
}

// popular solution
function popularMakeNegative(num) {
  return -Math.abs(num)
}
