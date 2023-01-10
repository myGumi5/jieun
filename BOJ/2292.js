let N = parseInt(
  require("fs")
    .readFileSync("./input.txt") // "/dev/stdin"
    .toString()
    .trim()
    .split("\n")[0]
);

let i = 1, // 몇 번 지나는지
  sum = 1;

while (sum < N) {
  sum += 6 * i;
  i++;
}

console.log(i);
