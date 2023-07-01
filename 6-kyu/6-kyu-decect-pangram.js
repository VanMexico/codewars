// https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/javascript

// my solution
function myIsPangram(string) {
  for (let code = 97; code <= 122; code++) {
    if (!string.toLowerCase().includes(String.fromCharCode(code))) return false
  }
  return true
}

// popular solution
function popularIsPangram(string) {
  return (string.match(/([a-z])(?!.*\1)/gi) || []).length === 26
}
