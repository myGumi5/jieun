function solution(X, Y) {
  let result = "";
  const map = new Map();

  // X에서 나올 수 있는 숫자와 그 개수를 map에 저장
  for (let i = 0; i < X.length; i++) {
    map.set(X[i], (map.get(X[i]) || 0) + 1);
  }

  // map에 저장돼있는 수 중에서 Y에서 나올 수 있는 숫자는
  // result에 추가하고 그 개수를 하나 줄이기
  for (let i = 0; i < Y.length; i++) {
    if (map.get(Y[i]) >= 1) {
      map.set(Y[i], map.get(Y[i]) - 1);
      result += Y[i];
    }
  }

  if (!result.length) result = "-1";
  else if (result[0] === "0") result = "0";

  return result
    .split("")
    .sort((a, b) => b - a)
    .join("");
}

const X = "5525";
const Y = "1255";
console.log(solution(X, Y));
