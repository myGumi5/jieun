const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input[0]);
let nums = input[1].split(" ").map(Number);
let DP = Array(N).fill(1); // 증가수열 개수 1로 세팅

// nums의 모든 수들에 대해
for (let cur = 0; cur < N; cur++) {
  // cur 이전의 수들과 비교
  for (let prev = 0; prev < cur; prev++) {
    // 현재 수가 prev번째 수보다 크고
    // prev번째의 증가수열 개수보다 작거나 같으면
    if (nums[cur] > nums[prev] && DP[cur] <= DP[prev]) {
      // 현재 수의 증가수열 개수 갱신
      DP[cur] = DP[prev] + 1;
    }
  }
}

console.log(Math.max(...DP)); // 증가수열 개수의 최대값 출력
