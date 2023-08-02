function solution(board) {
  const [N, M] = [board.length, board[0].length]
  let [ry, rx] = [0, 0]
  const [dy, dx] = [
    [-1, 0, 1, 0],
    [0, 1, 0, -1],
  ]

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (board[i][j] === 'R') {
        ry = i
        rx = j
      }
    }
  }

  return BFS()

  function BFS() {
    const queue = [[ry, rx, 0]]
    const visited = Array.from({ length: N }, () => new Array(M).fill(false))
    visited[ry][rx] = true

    while (queue.length) {
      const [cy, cx, time] = queue.shift()

      for (let d = 0; d < 4; d++) {
        let ny = cy + dy[d]
        let nx = cx + dx[d]

        // 벽이나 끝에 부딪힐 때까지 미끄러지기
        while (rangeCheck(ny, nx) && board[ny][nx] !== 'D') {
          ny += dy[d]
          nx += dx[d]
        }

        // 현재 위치로 변경
        ny -= dy[d]
        nx -= dx[d]

        if (board[ny][nx] === 'G') return time + 1

        // 다 미끄러지고 나면 해당 위치 방문 표시와 좌표 저장
        if (!visited[ny][nx]) {
          visited[ny][nx] = true
          queue.push([ny, nx, time + 1])
        }
      }
    }

    return -1
  }

  function rangeCheck(y, x) {
    if (y >= 0 && x >= 0 && y < N && x < M) return true
    return false
  }
}

const board = ['...D..R', '.D.G...', '....D.D', 'D....D.', '..D....']
console.log(solution(board))
