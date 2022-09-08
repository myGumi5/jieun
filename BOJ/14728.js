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
    // 이 과목의 예상 공부 시간이 time을 넘지 않으면
    if (input[subject][0] <= time) {
      DP[subject][time] = Math.max(
        DP[subject - 1][time],
        DP[subject - 1][time - input[subject][0]] + input[subject][1]
      );
    }
    // 이 과목의 예상 공부 시간이 time을 넘으면
    // 지금까지 해당 time에서의 배점을 저장
    else {
      DP[subject][time] = DP[subject - 1][time];
    }
  }
}
console.log(DP[N][T]);
