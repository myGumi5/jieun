function solution(fees, records) {
  let map = new Map();
  let answer = [];

  records.map((record) => {
    record = record.split(" ");
    map.set(record[1], [0, "00:00", false]);
  });

  map = new Map([...map].sort((a, b) => a[0] - b[0])); // 차량 번호 오름차순

  // 차량시간 계산
  for (let i = 0; i < records.length; i++) {
    const [time, num, flag] = records[i].split(" ");

    // 입차 시엔 시간 기록
    if (flag === "IN") {
      map.get(num)[1] = time;
      map.get(num)[2] = false;
    }
    // 출차 시엔 누적 시간 저장
    else {
      let [ih, im] = map.get(num)[1].split(":").map(Number); // 입차 시간
      let [oh, om] = time.split(":").map(Number); // 출차 시간

      const itime = ih * 60 + im;
      const otime = oh * 60 + om;

      map.get(num)[0] += otime - itime;
      map.get(num)[2] = true;
    }
  }

  for (let car of map.keys()) {
    if (!map.get(car)[2]) {
      let [ih, im] = map.get(car)[1].split(":").map(Number);
      const itime = ih * 60 + im;
      const otime = 23 * 60 + 59;
      map.get(car)[0] += otime - itime;
    }

    let cost = fees[1]; // 기본 요금
    let time = map.get(car)[0];

    if (time > fees[0]) cost += Math.ceil((time - fees[0]) / fees[2]) * fees[3];

    answer.push(cost);
  }

  return answer;
}

const fees = [180, 5000, 10, 600]; // 기본시간, 기본요금, 단위시간, 단위요금
const records = [
  // 시각 차량번호 내역
  "05:34 5961 IN",
  "06:00 0000 IN",
  "06:34 0000 OUT",
  "07:59 5961 OUT",
  "07:59 0148 IN",
  "18:59 0000 IN",
  "19:09 0148 OUT",
  "22:59 5961 IN",
  "23:00 5961 OUT",
];
console.log(solution(fees, records));
