let input = require("fs")
  .readFileSync("./input.txt") // "/dev/stdin"
  .toString()
  .trim()
  .split("\n");

let T = Number(input.shift());
let answer = [];
let index = 0;
let result = 0;
let position = [];
let selected = [];
let map = [];

while (T--) {
  result = Number.MIN_SAFE_INTEGER;
  position = Array(11).fill(0);
  selected = Array(11).fill(false);

  for (let i = 0; i < 11; i++) {
    map.push(input[index++].split(" ").map(Number));
  }

  selectPlayer(0);

  answer.push(result);
}

function selectPlayer(depth) {
  if (depth === 11) {
    let ability = 0;
    for (let i = 0; i < 11; i++) {
      ability += map[position[i]][i];
    }
    result = Math.max(result, ability);
    return;
  }

  for (let player = 0; player < 11; player++) {
    if (!selected[player] && map[player][depth] !== 0) {
      selected[player] = true;
      position[depth] = player;
      selectPlayer(depth + 1);
      selected[player] = false;
    }
  }
}

console.log(answer.join("\n"));
