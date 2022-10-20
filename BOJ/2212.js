let input = require("fs")
  .readFileSync("./input.txt") // "/dev/stdin"
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]); // 센서 개수
const K = Number(input[1]); // 집중국 개수
let sensors = input[2]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b); // 센서 위치 오름차순 정렬
let answer = 0;

// 센서의 수가 집중국의 수보다 많을 때만
if (N > K) {
  let diff = [];

  // 센서들의 위치 차이를 저장
  for (let i = 1; i < N; i++) {
    diff.push(sensors[i] - sensors[i - 1]);
  }

  answer = diff
    .sort((a, b) => b - a) // 위치 차이를 내림차순 정렬하여
    .splice(K - 1) // 위치 차이가 큰 K-1개를 자르고
    .reduce((acc, cur) => acc + cur); // 나머지의 합을 구하기
}
console.log(answer);
