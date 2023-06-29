// 예산
// 이분 탐색

let input = require("fs")
  .readFileSync("./input.txt") // "/dev/stdin"
  .toString()
  .trim()
  .split("\n");

const reqBudget = input[1].split(" ").map(Number);
const M = Number(input[2]);
let answer = [0, 0]; // middle, sum

const maxLimit = Math.max(...reqBudget);
binarySearch(maxLimit);

console.log(answer[0]);

function binarySearch(n) {
  let left = 0;
  let middle = 0;
  let right = maxLimit;
  let sum = 0;

  while (left <= right) {
    middle = Math.floor((left + right) / 2);
    sum = reqBudget.reduce((acc, cur) => acc + (cur < middle ? cur : middle), 0);

    if (sum <= M) {
      left = middle + 1;

      // M에 가장 근접한 sum값을 가지는 middle값을 저장해놓고 정답으로 출력
      if (sum > answer[1]) {
        answer[0] = middle;
        answer[1] = sum;
      }
    } else {
      right = middle - 1;
    }
  }
}
