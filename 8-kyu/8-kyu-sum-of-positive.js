// https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript

// my and popular solution
function positiveSum(arr) {
  return arr.filter((n) => n > 0).reduce((acc, cur) => cur + acc, 0)
}
