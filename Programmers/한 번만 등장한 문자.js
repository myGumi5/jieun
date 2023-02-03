function solution(s) {
  let arr = s.split("");
  let answer = [];

  arr.forEach((el) => {
    if (s.indexOf(el) === s.lastIndexOf(el)) {
      answer.push(el);
    }
  });

  return answer.sort().join("");
}
