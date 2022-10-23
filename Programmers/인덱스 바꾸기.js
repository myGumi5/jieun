function solution(my_string, num1, num2) {
  my_string = my_string.split("");
  [my_string[num1], my_string[num2]] = [my_string[num2], my_string[num1]];
  return my_string.join("");
}

const my_string = "I love you";
const num1 = 3;
const num2 = 6;
console.log(solution(my_string, num1, num2));

// 자바스크립트의 문자열은 immutable형이라 특정 인덱스의 수정이 불가
