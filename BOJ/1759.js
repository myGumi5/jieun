// 암호 만들기

let input = require('fs').readFileSync('./input.txt').toString().trim().split('\n')
const [L, C] = input[0].split(' ').map(Number)
input = input[1].split(' ').sort()

let answer = []
const vowel = ['a', 'e', 'i', 'o', 'u']
const selected = Array(26).fill(false)

recur(0, 0)

function recur(start, depth) {
  if (depth === L) {
    // 유효성 확인
    const result = validCheck()
    if (result) answer.push(result)
    return
  }

  for (let i = start; i < C; i++) {
    const alp = input[i].charCodeAt() - 97

    selected[alp] = true
    recur(i + 1, depth + 1)
    selected[alp] = false
  }
}

function validCheck() {
  let str = ''
  let count = 0

  for (let i = 0; i < 26; i++) {
    if (selected[i]) {
      const alp = String.fromCharCode(i + 97)
      if (vowel.includes(alp)) count++
      str += alp
    }
  }

  if (!count || L - count < 2) return false
  return str
}

console.log(answer.join('\n'))
