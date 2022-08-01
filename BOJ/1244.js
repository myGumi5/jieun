const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let index = 0;
const switchCount = Number(input[index++]);
let switchStatus = input[index++].split(" ").map((el) => +el);
const studentCount = Number(input[index++]);
let studentStatus = [];
for (let i = 0; i < studentCount; i++) {
  studentStatus.push(input[index++].split(" ").map((el) => +el));
}

for (let i = 0; i < studentCount; i++) {
  const gender = studentStatus[i][0];
  let targetSwitch = studentStatus[i][1];

  // 남학생
  if (gender === 1) {
    for (let j = 0; j < switchCount; j++) {
      if ((j + 1) % targetSwitch === 0) {
        switchStatus[j] = switchStatus[j] === 0 ? 1 : 0;
      }
    }
  }

  // 여학생
  else if (gender === 2) {
    switchStatus[targetSwitch - 1] =
      switchStatus[targetSwitch - 1] === 0 ? 1 : 0;
    let left = targetSwitch - 2;
    let right = targetSwitch;

    while (left >= 0 && right < switchCount) {
      if (switchStatus[left] === switchStatus[right]) {
        switchStatus[left] = switchStatus[left] === 0 ? 1 : 0;
        switchStatus[right] = switchStatus[right] === 0 ? 1 : 0;
      } else break;

      left--;
      right++;
    }
  }
}

for (let i = 0; i < switchCount; i++) {
  process.stdout.write(switchStatus[i] + " ");
  if ((i + 1) % 20 === 0) console.log();
}
