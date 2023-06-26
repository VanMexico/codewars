// https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript

// my solution
function myHighAndLow(numbers) {
  numbers = numbers
    .split(' ')
    .map((number) => +number)
    .sort((a, b) => a - b)

  return `${numbers[numbers.length - 1]} ${numbers[0]}`
}

// popular solution
function popularHighAndLow(numbers) {
  numbers = numbers.split(' ')
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`
}
