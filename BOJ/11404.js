const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input.shift());
const m = Number(input.shift());
input = input.map((el) => el.split(" ").map((el) => +el));

let nosun = Array.from(new Array(n + 1), () => Array(n + 1).fill(Infinity));

for (let i = 0; i < m; i++) {
  const from = input[i][0];
  const to = input[i][1];
  const cost = input[i][2];

  nosun[from][to] = Math.min(cost, nosun[from][to]);
}

for (let k = 0; k < n + 1; k++) {
  for (let i = 0; i < n + 1; i++) {
    for (let j = 0; j < n + 1; j++) {
      if (i === j) nosun[i][j] = 0;
      else {
        nosun[i][j] = Math.min(nosun[i][j], nosun[i][k] + nosun[k][j]);
      }
    }
  }
}

for (let i = 1; i < n + 1; i++) {
  for (let j = 1; j < n + 1; j++) {
    if (nosun[i][j] === Infinity) nosun[i][j] = 0;
  }
  nosun[i] = nosun[i].slice(1);
  console.log(nosun[i].join(" "));
}
