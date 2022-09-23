function solution(k, room_number) {
  let customersRoom = [];
  let room = 0;
  const selectedRoom = new Map();

  const findRoom = (roomNo) => {
    // roomNo 번째 방이 선택되지 않았다면
    if (!selectedRoom.has(roomNo)) {
      // roomNo -> roomNo + 1 의 쌍을 map 에 저장하고 선택한 방 번호 반환
      selectedRoom.set(roomNo, roomNo + 1);
      return roomNo;
    }

    // roomNo 번째 방이 이미 선택됐다면 재귀를 통해
    // 아직 선택되지 않은 방 중 가장 가까운 방 찾기
    let p = findRoom(selectedRoom.get(roomNo));
    // 기존의 roomNo 번째 방에서 가장 가까운 방을
    // p + 1 로 해줌으로써 이미 선택된 방은 제외
    selectedRoom.set(roomNo, p + 1);
    return p;
  };

  // 손님의 수만큼 반복
  for (let i = 0; i < room_number.length; i++) {
    // 각 손님의 방을 찾아 출력용 배열에 저장
    room = findRoom(room_number[i]);
    customersRoom.push(room);
    console.log(selectedRoom);
  }

  return customersRoom;
}

// 입출력
const k = 10;
const room_number = [1, 3, 4, 1, 3, 1];
console.log(solution(k, room_number));
