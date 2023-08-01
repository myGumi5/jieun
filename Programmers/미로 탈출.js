function solution(maps) {
  const [N, M] = [maps.length, maps[0].length];
  let [sy, sx] = [0, 0];
  let [ly, lx] = [0, 0];
  const [dy, dx] = [
    [-1, 0, 1, 0],
    [0, 1, 0, -1],
  ];

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      // 시작 지점, 레버 위치 파악
      if (maps[i][j] === "S") {
        sy = i;
        sx = j;
      } else if (maps[i][j] === "L") {
        ly = i;
        lx = j;
      }
    }
  }

  const toLeverTime = BFS(sy, sx, "L");
  const toEndTime = BFS(ly, lx, "E");

  function BFS(y, x, target) {
    const queue = [];
    queue.push([y, x, 0]);

    const visited = Array.from(Array(N), () => Array(M).fill(false));
    visited[y][x] = true;

    while (queue.length) {
      const [cy, cx, time] = queue.shift();

      if (maps[cy][cx] === target) return time;

      for (let d = 0; d < 4; d++) {
        const ny = cy + dy[d];
        const nx = cx + dx[d];

        if (rangeCheck(ny, nx) && !visited[ny][nx] && maps[ny][nx] !== "X") {
          queue.push([ny, nx, time + 1]);
          visited[ny][nx] = true;
        }
      }
    }

    return -1;
  }

  function rangeCheck(y, x) {
    if (y >= 0 && x >= 0 && y < N && x < M) return true;
    return false;
  }

  return toLeverTime === -1 || toEndTime === -1 ? -1 : toLeverTime + toEndTime;
}

const maps = ["SOOOL", "XXXXO", "OOOOO", "OXXXX", "OOOOE"];
console.log(solution(maps));

// 가장 빠른(최소 시간) 방법을 찾는 거니까 BFS로 접근
// 단순 BFS는 시간 초과 발생
// lever, end까지 가는 BFS를 두 개 돌려도 시간 초과 발생
// BFS로 배열을 직접 변형하지 않고 visited배열로 처리하니 통과
