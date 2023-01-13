let N = parseInt(
  require("fs")
    .readFileSync("./input.txt") // "/dev/stdin"
    .toString()
    .trim()
    .split("\n")[0]
);

for (let i = N; i >= 1; i--) {
  console.log("*".repeat(i));
}
