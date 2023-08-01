function solution(maps) {
  let answer = Number.MAX_SAFE_INTEGER;
  const [N, M] = [maps.length, maps[0].length];
  const [dy, dx] = [
    [-1, 0, 1, 0],
    [0, 1, 0, -1],
  ];

  BFS();

  function BFS() {
    const queue = [];
    queue.push([0, 0, 1]); // y, x, time

    while (queue.length) {
      const [cy, cx, time] = queue.shift();

      if (cy === N - 1 && cx === M - 1) {
        answer = Math.min(answer, time);
        break;
      }

      for (let d = 0; d < 4; d++) {
        const ny = cy + dy[d];
        const nx = cx + dx[d];

        if (rangeCheck(ny, nx) && maps[ny][nx] === 1) {
          queue.push([ny, nx, time + 1]);
          maps[ny][nx] = 0;
        }
      }
    }
  }

  function rangeCheck(y, x) {
    if (y >= 0 && x >= 0 && y < N && x < M) return true;
    return false;
  }

  return answer === Number.MAX_SAFE_INTEGER ? -1 : answer;
}

const maps = [
  [1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 0, 1],
  [0, 0, 0, 0, 1],
];
console.log(solution(maps));

// 최단거리 문제이므로 BFS로 접근
