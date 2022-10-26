let input = require("fs")
  .readFileSync("./input.txt") // "/dev/stdin"
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
let cranes = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => b - a);
const M = Number(input[2]);
let boxes = input[3]
  .split(" ")
  .map(Number)
  .sort((a, b) => b - a);

if (cranes[0] < boxes[0])
  console.log(-1); // 박스의 최대무게가 크레인 최대무게제한을 넘어서면 -1
else {
  let time = 0;

  while (boxes.length) {
    let idx = 0; // 박스 배열의 인덱스

    // 박스 N개를 크레인 N개씩 비교하기
    for (let i = 0; i < N; ) {
      if (idx === M - 1) break; // 모든 박스를 다 확인해봤으면 종료
      // i번째 크레인에 idx번째 박스를 넣을 수 있다면
      if (cranes[i] >= boxes[idx]) {
        // 박스배열에서 해당 박스를 없애고 다음 크레인 확인
        boxes.splice(idx, 1);
        // 박스는 하나 없어졌으니 크레인 index만 늘려주기
        i++;
      }
      // 못 넣는다면 다음 박스는 넣을 수 있는지 확인하기
      else idx++;
    }

    time++;
  }

  console.log(time);
}
