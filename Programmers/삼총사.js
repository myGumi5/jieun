function solution(number) {
  let answer = 0;
  let temp = Array(3).fill(0);

  combination(0, 0); // 조합으로 3명을 구해 각 합을 구하기

  function combination(index, depth) {
    if (depth === 3) {
      const result = temp.reduce((acc, cur) => {
        return (acc += cur);
      }, 0);

      if (result === 0) answer++;
      return;
    }

    for (let i = index; i < number.length; i++) {
      temp[depth] = number[i];
      combination(i + 1, depth + 1);
    }
  }

  return answer;
}

const number = [-3, -2, -1, 0, 1, 2, 3];
console.log(solution(number));
