function solution(sides) {
  let x = 0; // 미지의 수
  const [min, max] = sides.sort((a, b) => a - b); // 최소 최대
  let set = new Set();

  // max가 가장 클 때
  x = max;
  while (x <= max && x + min > max) set.add(x--);
  // x가 가장 클 때
  x = max;
  while (x >= max && x < max + min) set.add(x++);

  return set.size;
}

const sides = [3, 6];
console.log(solution(sides)); // 5
