function solution(plans) {
  plans = plans
    .map((plan) => {
      plan[1] = plan[1].split(':')
      plan[1] = Number(plan[1][0]) * 60 + Number(plan[1][1])
      plan[2] = Number(plan[2])
      return plan
    })
    .sort((a, b) => a[1] - b[1]) // 시작시간 기준 오름차순으로 정렬
  plans.push(['temp', 1440, 1440]) // 의도적으로 겹치지 않을 수 넣기

  const answer = [] // 완료한 과제를 담을 배열
  const pause = [] // 멈춰둔 과제를 담을 배열

  for (let i = 0; i < plans.length - 1; i++) {
    const cur = plans[i]
    const next = plans[i + 1]

    let restTime = next[1] - cur[1] - cur[2]

    // 현재 과제와 다음 과제가 겹치지 않는다면
    if (restTime >= 0) {
      answer.push(cur[0]) // 현재 과제 끝내고

      // 현재 과제와 다음 과제 사이의 남는 시간이 있고, 현재 멈춰둔 과제가 있다면
      while (restTime && pause.length) {
        // 가장 마지막으로 멈춰둔 과제의 시작시간이 남는 시간보다 많으면 시간 차 만큼만 빼놓기 (잠깐이라도 멈춰둔 과제를 수행함)
        if (pause[pause.length - 1][1] > restTime) {
          pause[pause.length - 1][1] -= restTime
          restTime = 0
        }
        // 마지막으로 멈춰둔 과제를 남는시간동안 다 수행할 수 있으므로
        else {
          answer.push(pause[pause.length - 1][0]) // 해당 과제 끝내고
          restTime -= pause.pop()[1] // 남는 시간에서 과제 수행한 시간만큼 빼기
        }
      }
    }
    // 현재 과제와 다음 과제가 겹치면
    else {
      // 현재 과제를 멈춰두고 남은 시간(새로운 시작시간이 됨)을 저장해두기
      pause.push([cur[0], -restTime])
    }
  }

  for (let i = pause.length - 1; i >= 0; i--) {
    answer.push(pause[i][0])
  }

  return answer
}

const plans = [
  ['music', '12:20', '40'],
  ['computer', '12:30', '100'],
  ['science', '12:40', '50'],
  ['history', '15:00', '30'],
]
console.log(solution(plans))

// music (12:20 - 13:00)
//   computer (12:30    -    14:10)
//        sciend (12:40 - 13:30)
//            history                 (15:00 - 15:30)
