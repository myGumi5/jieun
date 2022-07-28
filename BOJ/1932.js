const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [N, ...triangle] = input;
N = Number(N);
triangle = triangle.map((el) => el.split(" ").map((el) => Number(el)));

for (let i = 1; i < N; i++) {
  for (let j = 0; j < triangle[i].length; j++) {
    if (j === 0) triangle[i][j] += triangle[i - 1][j];
    else if (j === triangle[i].length - 1)
      triangle[i][j] += triangle[i - 1][j - 1];
    else {
      triangle[i][j] += Math.max(triangle[i - 1][j - 1], triangle[i - 1][j]);
    }
  }
}

console.log(Math.max(...triangle[N - 1]));
