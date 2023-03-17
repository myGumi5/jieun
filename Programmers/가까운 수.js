function solution(array, n) {
  array = array.sort((a, b) => a - b);
  let diff = Number.MAX_SAFE_INTEGER;
  let answer = 0;

  for (let i = 0; i < array.length; i++) {
    if (diff > Math.abs(array[i] - n)) {
      diff = Math.abs(array[i] - n);
      answer = array[i];
    }
  }

  return answer;
}

const array = [10, 11, 12];
const n = 13;
console.log(solution(array, n));
