let input = require("fs")
  .readFileSync("./input.txt") // "/dev/stdin"
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());
let shortcut = [];

for (let i = 0; i < N; i++) {
  let word = input[i].split(" ");

  // 단어의 첫 글자 확인
  for (let j = 0; j < word.length; j++) {
    let w = word[j][0].toUpperCase();

    if (!shortcut.includes(w)) {
      shortcut.push(w);
      word[j] = "[" + word[j][0] + "]" + word[j].substring(1);
      break;
    }
  }

  word = word.join(" ");
  // 단축키가 지정되지 않은 단어들만 왼쪽부터 살펴보며 지정
  if (!word.includes("[")) {
    for (let j = 0; j < word.length; j++) {
      let w = word[j].toUpperCase();
      if (!shortcut.includes(w) && w !== " ") {
        shortcut.push(w);
        word = word.substring(0, j) + "[" + word[j] + "]" + word.substring(j + 1);
        break;
      }
    }
  }

  console.log(word);
}
