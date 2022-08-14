const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input.shift());
let nums = input[0].split(" ").map((el) => +el);
let sums = new Array(2000000).fill(false);

const subSet = (depth, num) => {
  // 종료조건
  if (depth === N) {
    // 부분합 중 num은 있음
    sums[num] = true;
    return;
  }

  subSet(depth + 1, num); // 현재 기준을 포함하지 않는 경우
  subSet(depth + 1, num + nums[depth]); // 현재 기준을 포함하는 경우
};

subSet(0, 0);

console.log(sums.indexOf(false));
