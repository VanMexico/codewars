// https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript

// the original solution
function highAndLowOriginal(numbers) {
  numbers = numbers
    .split(' ')
    .map((number) => +number)
    .sort((a, b) => a - b)

  return `${numbers[numbers.length - 1]} ${numbers[0]}`
}

// the optimal solution
function highAndLowOptimal(numbers) {
  numbers = numbers.split(' ')
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`
}
