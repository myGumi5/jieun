// 영역 구하기

let input = require('fs').readFileSync('./input.txt').toString().trim().split('\n')
const [M, N, K] = input.shift().split(' ').map(Number)
const graph = Array.from({ length: M }, () => new Array(N).fill(0))
const visited = Array.from({ length: M }, () => new Array(N).fill(false))

let answer = []
let area = 0
const dy = [-1, 0, 1, 0]
const dx = [0, 1, 0, -1]

for (let i = 1; i <= K; i++) {
  const [lx, ly, rx, ry] = input[i - 1].split(' ').map(Number)

  for (let y = ly; y < ry; y++) {
    for (let x = lx; x < rx; x++) {
      graph[y][x] = i
    }
  }
}

for (let i = 0; i < M; i++) {
  for (let j = 0; j < N; j++) {
    if (graph[i][j] || visited[i][j]) continue
    DFS(i, j)
    answer.push(area)
    area = 0
  }
}

function DFS(y, x) {
  visited[y][x] = true
  area++

  for (let d = 0; d < 4; d++) {
    const ny = y + dy[d]
    const nx = x + dx[d]

    if (rangeCheck(ny, nx) && !graph[ny][nx] && !visited[ny][nx]) {
      DFS(ny, nx)
    }
  }
}

function rangeCheck(y, x) {
  if (y >= 0 && x >= 0 && y < M && x < N) return true
  return false
}

console.log(answer.length + '\n' + answer.sort((a, b) => a - b).join(' '))
