// 꽃길

let input = require('fs').readFileSync('./input.txt').toString().trim().split('\r\n')
const N = Number(input.shift())
input = input.map((el) => el.split(' ').map(Number))

let answer = Number.MAX_SAFE_INTEGER
const dy = [-1, 0, 1, 0]
const dx = [0, 1, 0, -1]
const visited = Array.from({ length: N }, () => Array(N).fill(false))

recur(0, 0)

console.log(answer)

function recur(count, cost) {
  if (count === 3) {
    answer = Math.min(answer, cost)
    return
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (visited[i][j] || !checkFourDir(i, j)) continue

      visited[i][j] = true
      recur(count + 1, cost + calcCost(i, j))
      visited[i][j] = false
      resetFourDir(i, j)
    }
  }
}

function checkFourDir(y, x) {
  for (let d = 0; d < 4; d++) {
    const ny = y + dy[d]
    const nx = x + dx[d]

    if (!checkRange(ny, nx) || visited[ny][nx]) return false
  }

  return true
}

function calcCost(y, x) {
  let cost = input[y][x]

  for (let d = 0; d < 4; d++) {
    const ny = y + dy[d]
    const nx = x + dx[d]

    cost += input[ny][nx]
    visited[ny][nx] = true
  }

  return cost
}

function resetFourDir(y, x) {
  for (let d = 0; d < 4; d++) {
    const ny = y + dy[d]
    const nx = x + dx[d]

    visited[ny][nx] = false
  }
}

function checkRange(y, x) {
  return y >= 0 && x >= 0 && y < N && x < N
}
