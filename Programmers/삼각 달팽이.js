function solution(n) {
  let arr = Array.from(Array(n), () => Array(n).fill(0));
  let answer = [];
  const dir = [
    [1, 0], // 아래로 내려가는 방향
    [0, 1], // 오른쪽으로 이동하는 방향
    [-1, -1], // 대각선으로 올라가는 방향
  ];

  let row = -1; // dir[0][0] = 1이므로 row의 초기값은 -1
  let col = 0;
  let curDir = 0;
  let value = 1;

  for (let i = n; i > 0; i--) {
    const [dr, dc] = dir[curDir];

    for (let j = 0; j < i; j++) {
      row += dr;
      col += dc;

      arr[row][col] = value++;
    }

    curDir = (curDir + 1) % 3;
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[i][j] !== 0) answer.push(arr[i][j]);
    }
  }

  return answer;
}

const n = 4;
console.log(solution(n));
