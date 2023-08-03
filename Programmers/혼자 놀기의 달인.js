function solution(cards) {
  let answer = 0

  for (let i = 0; i < cards.length; i++) {
    const isOpened = Array(cards.length).fill(false)
    const group1Count = openBoxes(i, isOpened)

    for (let j = 0; j < cards.length; j++) {
      if (isOpened[j]) continue

      const group2Count = openBoxes(j, isOpened)
      answer = Math.max(answer, group1Count * group2Count)
    }
  }

  function openBoxes(start, isOpened) {
    let boxIndex = start
    let count = 0

    while (!isOpened[boxIndex]) {
      isOpened[boxIndex] = true
      boxIndex = cards[boxIndex] - 1
      count++
    }

    return count
  }

  return answer
}

const cards = [8, 6, 3, 7, 2, 5, 1, 4]
console.log(solution(cards))

// 임의의 상자를 하나 선택한다고 했지만 사실 어디서부터 시작하든 결과는 같음
// cards에는 중복되는 수가 없고 모두 사이클을 돌고 있기 때문에! 속지말자
