// 안전 영역

let input = require('fs').readFileSync('./input.txt').toString().trim().split('\n')
const N = Number(input.shift())
input = input.map((el) => el.split(' ').map((el) => Number(el)))

const dy = [-1, 0, 1, 0]
const dx = [0, 1, 0, -1]
let MAX_HEIGHT = 0
let MAX_AREA = 0

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    MAX_HEIGHT = Math.max(MAX_HEIGHT, input[i][j])
  }
}

for (let h = 0; h < MAX_HEIGHT; h++) {
  const visited = Array.from({ length: N }, () => new Array(N).fill(false))
  let area = 0

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (!visited[i][j] && input[i][j] > h) {
        BFS(h, i, j, visited)
        area++
      }
    }
  }

  MAX_AREA = Math.max(MAX_AREA, area)
}

console.log(MAX_AREA)

function BFS(height, y, x, visited) {
  const queue = []
  queue.push([y, x])
  visited[y][x] = true

  while (queue.length) {
    const [cy, cx] = queue.shift()

    for (let d = 0; d < 4; d++) {
      const ny = cy + dy[d]
      const nx = cx + dx[d]

      if (rangeCheck(ny, nx) && !visited[ny][nx] && input[ny][nx] > height) {
        queue.push([ny, nx])
        visited[ny][nx] = true
      }
    }
  }

  function rangeCheck(y, x) {
    if (y >= 0 && x >= 0 && y < N && x < N) return true
    return false
  }
}
