// 주몽

let input = require('fs').readFileSync('./input.txt').toString().trim().split('\n')
const N = Number(input[0])
const M = Number(input[1])
input = input[2]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b)

let count = 0
let left = 0
let right = N - 1

while (left < right) {
  const result = input[left] + input[right]

  if (result === M) count++

  if (result <= M) left++
  else if (result >= M) right--
}

console.log(count)
