let input = require("fs")
  .readFileSync("./input.txt") // "/dev/stdin"
  .toString()
  .trim()
  .split("\n");

let N = Number(input.shift());
let players = input.map((el) => el.split(" ").map(Number));
players.map((el) => el.unshift(0));
let lineup = Array(10).fill(0);
let visited = Array(10).fill(false);

lineup[4] = 1;
visited[4] = true;
let answer = Number.MIN_SAFE_INTEGER;

setPlayer(2);

function playing() {
  let score = 0;
  let turn = 1; // 몇 번째 타순인지

  for (let inning = 0; inning < N; inning++) {
    let outCount = 0;
    let base = Array(4).fill(false);

    while (outCount < 3) {
      let ability = players[inning][lineup[turn]];

      switch (ability) {
        // 아웃
        case 0:
          outCount += 1;
          break;
        // 안타
        case 1:
          if (base[3]) {
            base[3] = false;
            score += 1;
          }
          if (base[2]) {
            base[2] = false;
            base[3] = true;
          }
          if (base[1]) {
            base[2] = true;
          }
          base[1] = true;
          break;
        // 2루타
        case 2:
          if (base[3]) {
            base[3] = false;
            score += 1;
          }
          if (base[2]) {
            base[2] = false;
            score += 1;
          }
          if (base[1]) {
            base[1] = false;
            base[3] = true;
          }
          base[2] = true;
          break;
        // 3루타
        case 3:
          if (base[3]) {
            base[3] = false;
            score += 1;
          }
          if (base[2]) {
            base[2] = false;
            score += 1;
          }
          if (base[1]) {
            base[1] = false;
            score += 1;
          }
          base[3] = true;
          break;
        // 홈런
        case 4:
          if (base[3]) {
            base[3] = false;
            score += 1;
          }
          if (base[2]) {
            base[2] = false;
            score += 1;
          }
          if (base[1]) {
            base[1] = false;
            score += 1;
          }
          score += 1;
          break;
      }

      if (turn === 9) turn = 1;
      else turn += 1;
    }
  }

  return score;
}

function setPlayer(no) {
  // 타순을 모두 정했으면 종료
  if (no > 9) {
    const result = playing();
    answer = Math.max(answer, result);
    return;
  }

  for (let i = 1; i <= 9; i++) {
    if (!visited[i]) {
      visited[i] = true;
      lineup[i] = no;

      setPlayer(no + 1);

      visited[i] = false;
      lineup[i] = 0;
    }
  }
}

// 정답 출력
console.log(answer);
