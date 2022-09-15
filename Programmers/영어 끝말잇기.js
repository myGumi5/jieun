function solution(n, words) {
  let answer = [0, 0];

  for (let i = 1; i < words.length; i++) {
    let no = (i % n) + 1; // 몇 번째 사람인지
    let turn = Math.ceil((i + 1) / n); // 몇 번째 턴인지

    let cur = words[i]; // 현재 단어
    let curFirstChar = cur.split("").shift(); // 현재 단어의 첫번째 문자
    let prevLastChar = words[i - 1].split("").pop(); // 이전 단어의 마지막 문자

    // 이미 나온 단어이거나 이전 단어의 마지막 문자와 같지 않다면 종료
    if (i > words.indexOf(cur) || curFirstChar !== prevLastChar) {
      answer = [no, turn];
      break;
    }
  }

  return answer;
}

// 입출력
const n = 2;
const words = ["hello", "one", "even", "never", "now", "world", "draw"];
console.log(solution(n, words));
