function solution(queue1, queue2) {
  let sum1 = queue1.reduce((acc, cur) => acc + cur, 0);
  let sum2 = queue2.reduce((acc, cur) => acc + cur, 0);
  const goal = (sum1 + sum2) / 2;

  const q = [...queue1, ...queue2];
  let pointer1 = 0; // queue1의 포인터 시작점
  let pointer2 = queue1.length; // queue2의 포인터 시작점

  for (let count = 0; count < queue1.length * 3; count++) {
    if (sum1 === goal) return count;

    if (sum1 > goal) sum1 -= q[pointer1++ % q.length];
    else sum1 += q[pointer2++ % q.length];
  }

  return -1;
}

const queue1 = [3, 2, 7, 2];
const queue2 = [4, 6, 5, 1];
console.log(solution(queue1, queue2));
