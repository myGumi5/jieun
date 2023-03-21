function solution(elements) {
  const set = new Set();
  const SIZE = elements.length;

  for (let size = 1; size <= SIZE; size++) {
    let sum = 0;
    for (let start = 0; start < SIZE; start++) {
      // 시작점이 0인 윈도우의 경우
      if (start === 0) {
        // 직접 합 구하기
        for (let i = 0; i < size; i++) sum += elements[i];
      }
      // 나머지 윈도우에 대해서
      else {
        sum -= elements[start - 1]; // 이전 윈도우의 제일 처음 원소를 빼주고
        sum += elements[(start + size - 1) % SIZE]; // 원순열이기 때문에 modlue연산을 이용해 이번 윈도우의 새로운 값을 추가
      }
      set.add(sum);
    }
  }

  return set.size;
}

const elements = [7, 9, 1, 1, 4];
console.log(solution(elements));
