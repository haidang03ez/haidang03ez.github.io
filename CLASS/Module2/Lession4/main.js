const data = Array.from({ length: 10 }, (_, index) => ({
  id: index + 1,
  name: getRandomName(),
  age: getRandomInt(18, 32),
  math: getRandomFloat(0, 10),
  literature: getRandomFloat(0, 10),
  english: getRandomFloat(0, 10),
}));

function getRandomName() {
  const names = [
    "An",
    "Bình",
    "Chi",
    "Dũng",
    "Hà",
    "Huy",
    "Lan",
    "Minh",
    "Ngọc",
    "Phúc",
    "Quang",
    "Trang",
    "Tú",
    "Vân",
    "Yến",
  ];
  return names[Math.floor(Math.random() * names.length)];
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomFloat(min, max) {
  return +(Math.random() * (max - min) + min).toFixed(2);
}

console.log(data);

// 1. sắp xếp thử tự điểm toán theo thứ tự tăng dần
function sortMath(students) {
  for (let i = 0; i < students.length - 1; i++) {
    for (let j = 0; j < students.length - i - 1; j++) {
      if (students[j].math > students[j + 1].math) {
        const temp = students[j];
        students[j] = students[j + 1];
        students[j + 1] = temp;
      }
    }
  }
  return students;
}
// 2. in ra màn hình người có điểm số cao nhất ( điểm tính bằng cách lấy TB của 3 môn toán, văn , anh )
function avgScore(students) {
  let avg = 0;
  for (let i = 0; i < students.length; i++) {
    avg = (students[i].math + students[i].literature + students[i].english) / 3;
    students[i].avg = avg;
  }
  return students;
}

function maxScore(students) {
  avgScore(students);
  let max = students[0];
  for (let i = 0; i < students.length - 1; i++) {
    if (students[i].avg > max.avg) {
      max = students[i];
    }
  }
  return max;
}
// 3. in ra màn hình thứ tự giảm dần của trung bình 3 môn
function sortAvg(students) {
  avgScore(students);
  for (let i = 0; i < students.length - 1; i++) {
    for (let j = 0; j < students.length - i - 1; j++) {
      if (students[j].avg < students[j + 1].avg) {
        const temp = students[j];
        students[j] = students[j + 1];
        students[j + 1] = temp;
      }
    }
  }
  return students;
}
// 4. sau khi sắp xếp xong thì thêm vào từng object 1 thuộc tính level ( sẽ là xếp loại học lực của người đó vd: yếu giỏi tb tuỳ theo điểm trung bình 3 môn)
function getLevel(students) {
  sortAvg(students);
  const level = ["Yếu", "Trung Bình", "Giỏi"];
  for (let i = 0; i < students.length; i++) {
    if (students[i].avg < 5) {
      students[i].level = level[0];
    } else if (students[i].avg > 5 && students[i].avg < 8) {
      students[i].level = level[1];
    } else {
      students[i].level = level[2];
    }
  }
  return students;
}

console.log("====================Sắp xếp theo điểm toán====================");
sortMath(data).forEach(student => {
  console.log(`${student.name}: ${student.math}`);
});

console.log("====================Người có điểm số cao nhất====================");
const topStudent = maxScore(data);
console.log(`${topStudent.name}: ${topStudent.avg.toFixed(2)}`);

console.log("====================Sắp xếp theo điểm trung bình 3 môn====================");
sortAvg(data).forEach(student => {
  console.log(`${student.name}: ${student.avg.toFixed(2)}`);
});

// console.log("====================Xếp loại học lực====================");
// getLevel(data).forEach(student => {
//   console.log(`${student.name}: ${student.avg.toFixed(2)} - ${student.level}`);
// });
console.log("====================Xếp loại học lực====================");
console.log(getLevel(data));