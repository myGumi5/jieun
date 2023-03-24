const solution = (a, b, c) => {
  let answer = 0;

  for (let i = a; i <= b; i++) {
    answer += [...("" + i)].filter((v) => +v === c).length;
  }

  return answer;
};
