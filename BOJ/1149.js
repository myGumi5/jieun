// RGB거리

let [N, ...RGB] = require("fs").readFileSync("./input.txt").toString().trim().split("\n");
N = Number(N);
RGB = RGB.map((el) => el.split(" ").map(Number));

for (let i = 1; i < N; i++) {
  RGB[i][0] += Math.min(RGB[i - 1][1], RGB[i - 1][2]);
  RGB[i][1] += Math.min(RGB[i - 1][0], RGB[i - 1][2]);
  RGB[i][2] += Math.min(RGB[i - 1][0], RGB[i - 1][1]);
}

console.log(Math.min(...RGB[N - 1]));
