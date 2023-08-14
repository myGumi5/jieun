function solution(cap, n, deliveries, pickups) {
  let distance = 0;

  while (deliveries.length || pickups.length) {
    // 택배, 수거 별로 뒷집부터 방문하지 않아도 될 곳은 버리기
    while (deliveries.length && !deliveries[deliveries.length - 1]) deliveries.pop();
    while (pickups.length && !pickups[pickups.length - 1]) pickups.pop();

    distance += Math.max(deliveries.length, pickups.length) * 2; // 미리 이동할 거리 추가

    let curCount = 0;
    // 편도로 배달하기
    while (deliveries.length) {
      const endHouseCount = deliveries.pop();

      if (curCount + endHouseCount <= cap) curCount += endHouseCount;
      else {
        deliveries.push(curCount + endHouseCount - cap);
        break;
      }
    }

    curCount = 0;
    // 편도로 수거하기
    while (pickups.length) {
      const endHouseCount = pickups.pop();

      if (curCount + endHouseCount <= cap) curCount += endHouseCount;
      else {
        pickups.push(curCount + endHouseCount - cap);
        break;
      }
    }
  }

  return distance;
}

const cap = 4;
const n = 5;
const deliveries = [1, 0, 3, 1, 2];
const pickups = [0, 3, 0, 4, 0];
console.log(solution(cap, n, deliveries, pickups));
