const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [N, M, y, x, K] = input[0].split(" ").map((el) => +el);
let map = input.slice(1, N + 1).map((el) => el.split(" ").map((el) => +el));
const commands = input[input.length - 1].split(" ").map((el) => +el);

// 동서북남
const dy = [0, 0, -1, 1];
const dx = [1, -1, 0, 0];

// 상 하 좌 우 앞 뒤
let dice = [0, 0, 0, 0, 0, 0];

// 범위 체크 함수
const rangeCheck = (row, col) => {
  if (row >= 0 && col >= 0 && row < N && col < M) return true;
  return false;
};

const move = (origin, flag) => {
  const newDice = [...origin];

  switch (flag) {
    //동
    case 1:
      newDice[0] = origin[2];
      newDice[1] = origin[3];
      newDice[2] = origin[1];
      newDice[3] = origin[0];

      return newDice;
    //서
    case 2:
      newDice[0] = origin[3];
      newDice[1] = origin[2];
      newDice[2] = origin[0];
      newDice[3] = origin[1];

      return newDice;
    //북
    case 3:
      newDice[0] = origin[4];
      newDice[1] = origin[5];
      newDice[4] = origin[1];
      newDice[5] = origin[0];

      return newDice;
    //남
    case 4:
      newDice[0] = origin[5];
      newDice[1] = origin[4];
      newDice[4] = origin[0];
      newDice[5] = origin[1];

      return newDice;
  }
};

for (const command of commands) {
  const ny = y + dy[command - 1];
  const nx = x + dx[command - 1];

  if (rangeCheck(ny, nx)) {
    y = ny;
    x = nx;
    dice = move(dice, command);

    if (map[y][x] === 0) map[y][x] = dice[1];
    else {
      dice[1] = map[y][x];
      map[y][x] = 0;
    }

    console.log(dice[0]);
  }
}
