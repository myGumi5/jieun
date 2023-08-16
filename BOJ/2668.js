// 숫자고르기

let input = require('fs').readFileSync('./input.txt').toString().trim().split('\n').map(Number)
const N = input[0]
input[0] = 0

let cycle = []
const visited = Array(N + 1).fill(false)

for (let i = 1; i <= N; i++) {
  visited[i] = true
  DFS(i, i)
  visited[i] = false
}

function DFS(start, target) {
  if (!visited[input[start]]) {
    visited[input[start]] = true
    DFS(input[start], target)
    visited[input[start]] = false
  }

  if (input[start] === target) cycle.push(target)
}

cycle = cycle.sort((a, b) => a - b)
console.log(cycle.length + '\n' + cycle.join('\n'))
