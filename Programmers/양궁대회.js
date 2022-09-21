function solution(n, info) {
  let ryanBoard = Array(11).fill(0);
  let maxDiff = 0;

  const getMaxPoint = (index, shotCount, apeachScore, ryanScore, arr) => {
    // n개의 화살을 모두 다 쓰면 백트래킹
    if (shotCount > n) return;

    // 10점까지 모든 경우의 수를 탐색했다면
    if (index > 10) {
      let diff = ryanScore - apeachScore;
      if (diff > maxDiff) {
        arr[10] = n - shotCount;
        maxDiff = diff;
        ryanBoard = arr;
      }
      return;
    }

    // 라이언이 이기면
    if (shotCount < n) {
      let cur = [...arr];
      cur[10 - index] = info[10 - index] + 1;
      getMaxPoint(
        index + 1,
        shotCount + info[10 - index] + 1,
        apeachScore,
        ryanScore + index,
        cur
      );
    }
    // 어피치가 이기면
    if (info[10 - index] > 0)
      getMaxPoint(index + 1, shotCount, apeachScore + index, ryanScore, arr);
    // 둘다 점수를 못 얻으면
    else getMaxPoint(index + 1, shotCount, apeachScore, ryanScore, arr);
  };

  getMaxPoint(0, 0, 0, 0, ryanBoard);

  return maxDiff <= 0 ? [-1] : ryanBoard;
}

// 입출력
const n = 5;
const info = [2, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0];
console.log(solution(n, info));
