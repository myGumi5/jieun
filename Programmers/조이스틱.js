function solution(name) {
  let moveCount = 0
  let sideMoveCount = name.length - 1

  for (let i = 0; i < name.length; i++) {
    // N보다 작은 알파벳이면 위로, N이상의 알파벳이면 아래로 이동
    let alphabet = name.charCodeAt(i)
    if (alphabet < 78) moveCount += alphabet % 65
    else moveCount += 91 - alphabet

    let nextIndex = i + 1
    while (nextIndex < name.length && name.charCodeAt(nextIndex) === 65) {
      nextIndex++
    }

    // 자연스럽게 왼쪽에서 오른쪽으로 흘러가는 경우라면 오른쪽이동 커서를 사용할 일이 없음
    // 그런 경우라면 기존의 sideMoveCount에서 +1 을 따로 하지 않아도 됨
    // 왼쪽으로 이동하여 도달하는 것이 더 빠른 경우에는 출발지(0)에서 왔던만큼(i) 되돌아가고 끝(name.length)에서 멈추는 지점(nextIndex)까지의 거리를 구해주기

    sideMoveCount = Math.min(sideMoveCount, i * 2 + name.length - nextIndex)
  }

  moveCount += sideMoveCount

  return moveCount
}

console.log(solution('JEROEN'))
