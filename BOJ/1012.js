// 유기농 배추

let input = require('fs').readFileSync('./input.txt').toString().trim().split('\n')
let index = 0
let T = Number(input[index++])

const dy = [-1, 0, 1, 0]
const dx = [0, 1, 0, -1]
let answer = []

while (T--) {
  const [M, N, K] = input[index++].split(' ').map(Number)
  const map = Array.from({ length: M }, () => new Array(N).fill(0))

  for (let i = 0; i < K; i++) {
    const [y, x] = input[index++].split(' ').map(Number)
    map[y][x] = 1
  }

  let area = 0
  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (map[i][j]) {
        DFS(i, j)
        area++
      }
    }
  }

  answer.push(area)

  function DFS(y, x) {
    map[y][x] = 0

    for (let d = 0; d < 4; d++) {
      const ny = y + dy[d]
      const nx = x + dx[d]

      if (rangeCheck(ny, nx) && map[ny][nx]) DFS(ny, nx)
    }
  }

  function rangeCheck(y, x) {
    if (y >= 0 && x >= 0 && y < M && x < N) return true
    return false
  }
}

console.log(answer.join('\n'))
