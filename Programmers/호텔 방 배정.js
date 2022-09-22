function solution(k, room_number) {
  let customersRoom = [];
  let room = 0;
  const rooms = new Map();

  const findRoom = (roomNo) => {
    if (!rooms.has(roomNo)) {
      rooms.set(roomNo, roomNo + 1);
      return roomNo;
    }

    let p = findRoom(rooms.get(roomNo));
    rooms.set(roomNo, p + 1);
    return p;
  };

  for (let i = 0; i < room_number.length; i++) {
    room = findRoom(room_number[i]);
    customersRoom.push(room);
  }

  return customersRoom;
}

// 입출력
const k = 10;
const room_number = [1, 3, 4, 1, 3, 1];
console.log(solution(k, room_number));
