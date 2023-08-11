// 스타트와 링크

let input = require("fs").readFileSync("./input.txt").toString().trim().split("\r\n");
const N = Number(input.shift());
input = input.map((el) => el.split(" ").map(Number));

const HALF = N / 2;
let answer = Number.MAX_SAFE_INTEGER;
const selected = Array(HALF).fill(0);

comb(0, 0);
console.log(answer);

function comb(start, depth) {
  if (depth === HALF) {
    const startTeam = [];
    const linkTeam = [];

    let startAbility = 0;
    let linkAbility = 0;

    // 스타트팀과 링크팀 분배
    for (let i = 0; i < N; i++) {
      if (selected.includes(i)) startTeam.push(i);
      else linkTeam.push(i);
    }

    for (let i = 0; i < HALF; i++) {
      for (let j = i + 1; j < HALF; j++) {
        startAbility += input[startTeam[i]][startTeam[j]] + input[startTeam[j]][startTeam[i]];
        linkAbility += input[linkTeam[i]][linkTeam[j]] + input[linkTeam[j]][linkTeam[i]];
      }
    }

    answer = Math.min(answer, Math.abs(startAbility - linkAbility));

    return;
  }

  for (let i = start; i < N; i++) {
    selected[depth] = i;
    comb(i + 1, depth + 1);
    selected[depth] = 0;
  }
}
