// 문자열 교환

let input = require('fs').readFileSync('./input.txt').toString().trim().split('\n')[0]
let aCount = 0 // 슬라이딩윈도우 크기
let moveCount = Number.MAX_SAFE_INTEGER

for (let i = 0; i < input.length; i++) {
  if (input[i] === 'a') aCount++
}

for (let i = 0; i < input.length; i++) {
  let bCount = 0

  for (let j = i; j < i + aCount; j++) {
    const idx = j % input.length // 원형으로 반복되므로
    if (input[idx] === 'b') bCount++
  }

  moveCount = Math.min(moveCount, bCount)
}

console.log(moveCount)
