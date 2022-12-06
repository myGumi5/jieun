let input = require("fs")
  .readFileSync("./input.txt") // "/dev/stdin"
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());
const map = new Map();
const passed = new Array(N).fill(false);

let output = input.slice(N);
input = input.slice(0, N);
// 각 차량에 번호 달기
input.map((car, idx) => {
  map.set(car, idx);
});

let cur = 0, // 현재 통과돼야 할 차량 번호
  answer = 0;

output.map((car) => {
  if (map.get(car) > cur) {
    let flag = false;

    // 추월한 차량인지 확인
    for (let i = 0; i < map.get(car); i++) {
      if (!passed[i]) {
        flag = true;
        answer++;
        break;
      }
    }

    if (!flag) cur++;
  }

  passed[map.get(car)] = true; // 터널 빠져나감을 표시
});

console.log(answer);
