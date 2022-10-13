function solution(board) {
  let count = 0;
  const dy = [-1, -1, 0, 1, 1, 1, 0, -1];
  const dx = [0, 1, 1, 1, 0, -1, -1, -1];
  let visited = Array.from(Array(board.length), () =>
    Array(board.length).fill(false)
  );

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (!visited[i][j] && board[i][j] === 1) {
        visited[i][j] = true;

        for (let d = 0; d < 8; d++) {
          const ny = i + dy[d];
          const nx = j + dx[d];

          if (isInRange(ny, nx) && board[ny][nx] === 0) {
            visited[ny][nx] = true;
            board[ny][nx] = 1;
          }
        }
      }
    }
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] === 0) count++;
    }
  }

  function isInRange(y, x) {
    if (y >= 0 && x >= 0 && y < board.length && x < board.length) return true;
    return false;
  }

  return count;
}

const board = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0],
];
console.log(solution(board));
