let input = require("fs")
  .readFileSync("./input.txt") // "/dev/stdin"
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());
let map = input.map((el) => el.split(" ").map(Number));

let sharkY, sharkX, distance, fishY, fishX, fishDistance;
let [sharkSize, eat, time] = [2, 0, 0];
const dy = [-1, 0, 1, 0];
const dx = [0, 1, 0, -1];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (map[i][j] === 9) {
      sharkY = i;
      sharkX = j;
      map[i][j] = 0;
    }
  }
}

while (true) {
  fishY = Number.MAX_SAFE_INTEGER;
  fishX = Number.MAX_SAFE_INTEGER;
  fishDistance = Number.MAX_SAFE_INTEGER;
  distance = Array.from(Array(N), () => Array(N).fill(0));

  BFS(sharkY, sharkX);

  // 먹을 수 있는 물고기가 있다면
  if (fishX !== Number.MAX_SAFE_INTEGER && fishY !== Number.MAX_SAFE_INTEGER) {
    map[fishY][fishX] = 0; // 먹힌 물고기위치 0으로 변경
    sharkY = fishY;
    sharkX = fishX;
    eat++;
    time += distance[fishY][fishX]; // 해당 물고기를 먹기까지 걸린 시간 추가

    // 아기상어의 크기와 같은 수의 물고기를 먹으면 아기상어의 크기 +1증가
    if (eat === sharkSize) {
      sharkSize++;
      eat = 0;
    }
  }
  // 먹을 수 있는 물고기가 없다면 break
  else break;
}

console.log(time);

function BFS(y, x) {
  // 아기 상어의 위치 queue에 저장
  const queue = [];
  queue.push([y, x]);

  while (queue.length) {
    const [cy, cx] = queue.shift();

    for (let d = 0; d < 4; d++) {
      const ny = cy + dy[d];
      const nx = cx + dx[d];

      // 아기상어가 지나갈 수 있으면서 방문하지 않은 곳인 경우
      if (isInRange(ny, nx) && map[ny][nx] <= sharkSize && !distance[ny][nx]) {
        distance[ny][nx] = distance[cy][cx] + 1; // 해당 좌표에 방문체크 겸 아기상어의 이동거리 표시

        // 아기상어가 먹을 수 있는 물고기가 있다면
        if (0 < map[ny][nx] && map[ny][nx] < sharkSize) {
          // 더 가까운 거리에 있는 물고기라면
          if (fishDistance > distance[ny][nx]) {
            fishDistance = distance[ny][nx];
            fishY = ny;
            fishX = nx;
          }
          // 거리가 가까운 물고기가 여러개면
          else if (fishDistance === distance[ny][nx]) {
            // 가장 위에있는 물고기로
            if (fishY > ny) {
              fishX = nx;
              fishY = ny;
            }
            // 그것도 같다면 가장 왼쪽에 있는 물고기로
            else if (fishY === ny && fishX > nx) {
              fishX = nx;
              fishY = ny;
            }
          }
        }

        // 아기상어가 지나가는 곳 queue에 저장
        queue.push([ny, nx]);
      }
    }
  }
}

function isInRange(y, x) {
  return y >= 0 && x >= 0 && y < N && x < N;
}
