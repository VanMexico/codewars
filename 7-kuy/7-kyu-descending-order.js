// https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/javascript

// my solution
function myDescendingOrder(n) {
  return +n
    .toString()
    .split('')
    .sort((a, b) => b - a)
    .join('')
}

// popular solution
function popularDescendingOrder(n) {
  return parseInt(String(n).split('').sort().reverse().join(''))
}
