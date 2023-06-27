// 숫자 카드
// 이분 탐색

let input = require("fs")
  .readFileSync("./input.txt") // "/dev/stdin"
  .toString()
  .trim()
  .split("\n");

const sangkeunCards = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
const compareCards = input[3].split(" ").map(Number);

for (let i = 0; i < compareCards.length; i++) {
  const result = binarySearch(compareCards[i]);

  if (result) compareCards[i] = 1;
  else compareCards[i] = 0;
}

console.log(compareCards.join(" "));

function binarySearch(n) {
  let startIndex = 0;
  let middleIndex = 0;
  let endIndex = sangkeunCards.length - 1;

  while (startIndex <= endIndex) {
    middleIndex = Math.floor((startIndex + endIndex) / 2);

    if (n < sangkeunCards[middleIndex]) endIndex = middleIndex - 1;
    else if (n > sangkeunCards[middleIndex]) startIndex = middleIndex + 1;
    else if (n === sangkeunCards[middleIndex]) return true;
  }

  return false;
}
