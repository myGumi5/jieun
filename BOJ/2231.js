let N = parseInt(
  require("fs")
    .readFileSync("./input.txt") // "/dev/stdin"
    .toString()
    .trim()
    .split("\n")[0]
);

let answer = 0;
for (let num = 1; num <= N; num++) {
  const sum = num
    .toString()
    .split("")
    .map((i) => parseInt(i))
    .reduce((acc, cur) => acc + cur, 0);

  if (sum + num === N) {
    answer = num;
    break;
  }
}

console.log(answer);
