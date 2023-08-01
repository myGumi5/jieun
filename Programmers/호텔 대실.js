function solution(book_time) {
  // 예약 내역 숫자로 변환
  book_time = book_time.map((book) =>
    book.map((time) => {
      time = time.split(":");
      time[0] = Number(time[0]) * 60;
      time[1] = Number(time[1]);

      return time[0] + time[1];
    })
  );

  // 원본 배열 변형 방지
  const startSort = [...book_time].map((time) => time[0]).sort((a, b) => a - b);
  const endSort = [...book_time].map((time) => time[1]).sort((a, b) => a - b);

  let room = 1;
  let checkIdx = 0;

  for (let time = 1; time < startSort.length; time++) {
    if (startSort[time] < endSort[checkIdx]) {
      room++;
    } else {
      if (startSort[time] >= endSort[checkIdx] + 10) {
        checkIdx++;
      } else room++;
    }
  }

  return room;
}

const book_time = [
  ["00:01", "00:10"],
  ["00:19", "00:29"],
];
console.log(solution(book_time));
