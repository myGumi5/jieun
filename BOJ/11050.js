let [N, K] = require("fs")
  .readFileSync("./input.txt") // "/dev/stdin"
  .toString()
  .trim()
  .split("\n")[0]
  .split(" ")
  .map(Number);

function algorithm(n, k) {
  if (k > n) return 0;
  if (k === 0 || k === n) return 1;
  return algorithm(n - 1, k - 1) + algorithm(n - 1, k);
}

console.log(algorithm(N, K));
