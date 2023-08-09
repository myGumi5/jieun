// 상근이의 여행

let input = require('fs').readFileSync('./input.txt').toString().trim().split('\n')
let T = Number(input.shift())
let index = 0
let answer = []

while (T--) {
  const [N, M] = input[index++].split(' ').map(Number)
  index += M
  answer.push(N - 1)
}

console.log(answer.join('\n'))
