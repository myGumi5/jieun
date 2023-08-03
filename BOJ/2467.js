// 용액

let input = require('fs')
  .readFileSync('./input.txt') // "/dev/stdin"
  .toString()
  .trim()
  .split('\n')

const N = Number(input[0])
input = input[1].split(' ').map(Number)
let answer = []
let zeroCloseSum = Number.MAX_SAFE_INTEGER

let left = 0
let right = N - 1

while (left < right) {
  const sum = input[left] + input[right]

  if (sum === 0) {
    answer = [input[left], input[right]]
    break
  } else if (sum > 0) {
    if (isMoreCloser(input[left], input[right])) {
      answer = [input[left], input[right]]
      zeroCloseSum = Math.abs(0 - sum)
    }
    right--
  } else {
    if (isMoreCloser(input[left], input[right])) {
      answer = [input[left], input[right]]
      zeroCloseSum = Math.abs(0 - (input[left] + input[right]))
    }
    left++
  }
}

console.log(answer.join(' '))

function isMoreCloser(v1, v2) {
  const diff1 = Math.abs(0 - (v1 + v2))
  const diff2 = Math.abs(0 - zeroCloseSum)

  return diff1 < diff2
}
