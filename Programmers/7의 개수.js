function solution(array) {
  let answer = 0;
  array.map((el) =>
    el
      .toString()
      .split("")
      .map((el) => (el == 7 ? answer++ : answer))
  );
  return answer;
}
