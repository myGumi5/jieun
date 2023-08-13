// 주유소

let input = require('fs').readFileSync('./input.txt').toString().trim().split('\n');
const N = Number(input[0]);
const distance = input[1].split(' ').map(BigInt);
const price = input[2].split(' ').map(BigInt);

let cost = 0n;
let curPrice = price[0];

for (let i = 0; i < N - 1; i++) {
  cost += curPrice * distance[i];
  if (curPrice > price[i + 1]) curPrice = price[i + 1];
}

console.log(cost.toString());
