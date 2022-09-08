function solution(s) {
  let answer = [0, 0];

  while (s !== "1") {
    let newS = s.replaceAll("0", "");

    answer[0]++;
    answer[1] += s.length - newS.length;

    s = newS;
    s = Number(s.length).toString(2).toString();
  }

  return answer;
}

// 입출력
const s = "01110";
console.log(solution(s));
