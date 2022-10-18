function solution(s) {
  let answer = 0;

  for (let i = 0; i < s.length; i++) {
    rotate();
    if (isRight()) answer++;
  }

  function rotate() {
    // 왼쪽으로 한칸씩 이동
    let sArr = s.split("");
    sArr.push(sArr.shift());
    s = sArr.join("");
  }

  function isRight() {
    let stack = [];

    for (let i = 0; i < s.length; i++) {
      // 여는 괄호면 스택에 추가
      if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
        stack.push(s[i]);
      }
      // 닫는 괄호면 스택의 마지막 요소와 비교해서 올바른 괄호인지 확인
      else {
        if (s[i] === ")") {
          if (stack[stack.length - 1] === "(") {
            stack.pop();
          } else return false;
        } else if (s[i] === "]") {
          if (stack[stack.length - 1] === "[") {
            stack.pop();
          } else return false;
        } else if (s[i] === "}") {
          if (stack[stack.length - 1] === "{") {
            stack.pop();
          } else return false;
        }
      }
    }

    if (!stack.length) return true; // 스택이 비었으면 올바른 괄호 문자열
    else return false; // 스택에 하나라도 남아있으면 올바르지 않은 괄호 문자열
  }

  return answer;
}

const s = "[](){}";
console.log(solution(s));
