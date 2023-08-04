// 한 줄로 서기

let input = require('fs').readFileSync('./input.txt').toString().trim().split('\n')
const N = Number(input[0])
input = input[1].split(' ').map(Number)
let lines = Array(N).fill(0)

for (let height = 1; height <= N; height++) {
  let sidesCount = input[height - 1] // 키가 height인 사람 왼쪽에 몇 명 있는지
  let count = 0

  for (let i = 0; i < N; i++) {
    // i번째 자리에 아무도 없으면서
    if (!lines[i] && count === sidesCount) {
      lines[i] = height
      break
    } // i번째 자리에 아무도 없다면 카운트만 증가
    else if (!lines[i]) count++
  }
}

console.log(lines.join(' '))

// 키가 2인 사람과 키가 3인 사람의 왼쪽에 있는 사람 수가 같다면
// 키가 더 작은(2) 사람을 더 왼쪽편에 배치해야 함
