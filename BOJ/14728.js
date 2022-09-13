let input = require("fs")
  .readFileSync("./input.txt") // "/dev/stdin"
  .toString()
  .trim()
  .split("\n");

const [N, T] = input.shift().split(" ").map(Number); // 단원의 수 , 공부할 수 있는 총 시간
input = input.map((el) => el.split(" ").map(Number));
input.unshift(0); // index 맞추기
DP = Array.from(Array(N + 1), () => Array(T + 1).fill(0));

for (let subject = 1; subject <= N; subject++) {
  for (let time = 0; time <= T; time++) {
    const requiredTime = input[subject][0];
    const score = input[subject][1];

    // 현재 과목을 공부할 시간이 있으면
    if (time >= requiredTime) {
      // 현재 과목을 공부하지 않았을때와 했을때의 시간을 비교해 max값을 저장
      DP[subject][time] = Math.max(
        DP[subject - 1][time],
        DP[subject - 1][time - requiredTime] + score
      );
    }
    // 현재 과목을 공부할 시간이 없다면 이전 과목의 시간을 할당받음
    else {
      DP[subject][time] = DP[subject - 1][time];
    }
  }
}
console.log(DP[N][T]);
