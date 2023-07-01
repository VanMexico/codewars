// https://www.codewars.com/kata/517abf86da9663f1d2000003/train/javascript

//my solution
function myToCamelCase(str) {
  return str
    .split(/[-_\s]/)
    .map((word, idx) =>
      idx ? word.charAt(0).toUpperCase() + word.slice(1) : word
    )
    .join('')
}

// popular solution
function popularToCamelCase(str) {
  return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase())
}
