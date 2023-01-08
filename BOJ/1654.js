let input = require("fs")
  .readFileSync("./input.txt") // "/dev/stdin"
  .toString()
  .trim()
  .split("\n");

const [K, N] = input.shift().split(" ").map(Number);
input = input.map(Number);

let min = 1;
let max = Math.max(...input);

while (min <= max) {
  let mid = parseInt((min + max) / 2);

  const count = getCount(mid); // mid값의 길이로 얻을 수 있는 랜선의 개수

  if (count < N) max = mid - 1; // 개수가 N개보다 부족하면 자르는 단위를 줄여야하므로 max값을 줄이기
  else if (count >= N) min = mid + 1; // 개수가 N개와 크거나 같으면 자르는 단위를 키워야하므로 min값을 키우기 (랜선의 최대 길이를 출력해야하므로)
}

console.log(max); // 랜선의 최대길이 출력

function getCount(length) {
  let count = 0;

  input.forEach((len) => {
    count += parseInt(len / length);
  });

  return count;
}
