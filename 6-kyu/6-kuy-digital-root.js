// my solution
function my_digital_root(n) {
  if (n.toString().length === 1) return n

  return digitalRoot(
    n
      .toString()
      .split('')
      .reduce((acc, value) => acc + parseInt(value), 0)
  )
}

// popular solution
function popular_digital_root(n) {
  return ((n - 1) % 9) + 1
}
