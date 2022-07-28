const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [N, ...RGB] = input;
N = Number(N);
RGB = RGB.map((el) => el.split(" ").map((color) => Number(color)));

for (let i = 1; i < N; i++) {
  RGB[i][0] += Math.min(RGB[i - 1][1], RGB[i - 1][2]);
  RGB[i][1] += Math.min(RGB[i - 1][0], RGB[i - 1][2]);
  RGB[i][2] += Math.min(RGB[i - 1][0], RGB[i - 1][1]);
}

console.log(Math.min(...RGB[N - 1]));
