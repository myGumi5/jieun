const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input.shift());
let Floyd = input.map((el) => el.split(" ").map((el) => +el));

for (let k = 0; k < N; k++) {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (Floyd[i][k] === 1 && Floyd[k][j] === 1) {
        Floyd[i][j] = 1;
      }
    }
  }
}

for (let i = 0; i < N; i++) {
  console.log(Floyd[i].join(" "));
}
