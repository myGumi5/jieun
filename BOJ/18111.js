let input = require("fs")
  .readFileSync("./input.txt") // "/dev/stdin"
  .toString()
  .trim()
  .split("\n");

const [N, M, B] = input.shift().split(" ").map(Number);
const map = input.map((el) => el.split(" ").map(Number));
const answer = [];

function getTime(height) {
  let add = 0;
  let remove = 0;
  let block = B;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      // 기준 높이보다 크면 인벤토리에 블럭 넣기
      if (map[i][j] > height) {
        remove += map[i][j] - height;
        block += map[i][j] - height;
      }
      // 기준 높이보다 작으면 인벤토리에서 블럭 가져오기
      else if (map[i][j] < height) {
        add += height - map[i][j];
        block -= height - map[i][j];
      }
    }
  }

  const time = add + remove * 2;

  if (block < 0) return [Number.MAX_SAFE_INTEGER, height];
  return [time, height];
}

for (let i = 256; i >= 0; i--) {
  answer.push(getTime(i));
}

answer.sort((a, b) => {
  if (a[0] === b[0]) return b[1] - a[1];
  else return a[0] - b[0];
});

console.log(answer[0].join(" "));
