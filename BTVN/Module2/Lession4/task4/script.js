// // Quizzes 1
// // 1. Khai báo 1 đối tượng để mô tả bản thân bao gồm: tên, tuổi, địa chỉ, giới tính, sở thích (nhiều sở thích), chiều cao, cân nặng, tình trạng hôn nhân, số điện thoại.
// const human = {
//   name: "john",
//   age: 3,
//   address: "Hanoi",
//   sex: "male",
//   hobbies: ["reading", "swimming"],
//   height: 175,
//   weight: 70,
//   statusMarried: false,
//   phoneNumber: "0987654321",
// };
// // 2. Khai báo 1 đối tượng là bạn trai/bạn gái của bạn: tên, tuổi, sự tốt bụng (1 - 10), nhà giàu (boolean).
// const gf = {
//   name: "hanna",
//   age: 30,
//   character: "kind",
//   kindness: 9,
//   isRich: true,
// };
// // 3. Viết chương trình kiểm tra nếu tuổi của bạn và bạn gái (trai) đều lớn hơn 20, in ra màn hình “Tầm này cưới được rồi”. Ngược lại, in ra “Chờ thêm chút nữa”
// function checkAge(person) {
//   let temp =
//     person.age > 20
//       ? `${person.name} đã đủ tuổi`
//       : `${person.name} chưa đủ tuổi`;
//   return temp;
// }

// console.log(checkAge(human));
// console.log(checkAge(gf));

// // 1. Khai báo 1 function với đầu vào là 3 số a, b, c (a khác 0). Hãy tìm nghiệm của phương trình a.x^2 + b.x + c = 0 và đưa ra kết quả dưới dạng 1 mảng gồm các nghiệm của phương trình.
// const solveQuadraticEquation = (a, b, c) => {
//   let delta = b * b - 4 * a * c;
//   let temp =
//     a === 0
//       ? `a = 0 đây là phương trình bậc nhất có nghiệm ${-c / b}`
//       : delta < 0
//       ? "Vô nghiệm"
//       : delta > 0
//       ? `x1 = ${(-b + Math.sqrt(delta)) / (2 * a)} và x2 = ${
//           (-b - Math.sqrt(delta)) / (2 * a)
//         }`
//       : `x1 = x2 = ${-b / (2 * a)}`;
//   return temp;
// };
// console.log("-----------------------------Quizz 1 - 1-----------------------------");
// console.log(solveQuadraticEquation(1, -3, 2));
// console.log(solveQuadraticEquation(0, 2, -4));
// console.log(solveQuadraticEquation(1, 2, 5));

// // 2. Khai báo 1 function với đầu vào là 3 số a, b, c. Kiểm tra xem a, b, c có tạo thành 3 cạnh của tam giác không. Nếu tạo thành tam giác, đầu ra là true. Ngược lại, đầu ra là false.
// const checkTriangle = (a, b, c) => {
//   let temp = a + b > c && a + c > b && b + c > a ? "Đúng" : "Sai";
//   return temp;
// };
// console.log("-----------------------------Quizz 1 - 2-----------------------------");
// console.log(checkTriangle(3, 4, 5));
// console.log(checkTriangle(1, 2, 3));

// // 3. Khai báo 1 function với đầu vào là day, month, year. Kiểm tra xem 3 giá trị đó có tạo thành 1 ngày, tháng năm hợp lệ không.
// const checkDate = (day, month, year) => {
//   let temp =
//     month > 0 && month < 13 && day > 0 && day < 32 && year > 0
//       ? "Hợp lệ"
//       : "Không hợp lệ";
//   return temp;
// };
// console.log("-----------------------------Quizz 1 - 3-----------------------------");
// console.log(checkDate(31, 12, 2023));
// console.log(checkDate(31, 13, 2023));

// // Quizzes 2
// // 1. Khai báo 1 function nhận đầu vào là chuỗi name, thực hiện in ra màn hình “Hello world, ” + name.
// const sayHello = (name) => {
//   let temp = `Hello world, ${name}`;
//   return temp;
// };
// console.log("-----------------------------Quizz 2 - 1-----------------------------");
// console.log(sayHello("John"));

// // 2. Khai báo 1 function nhận đầu vào là 2 số a, b. Đầu ra là kết quả của phép tính (a + b)^2 .
// const calculateSquare = (a, b) => {
//   let temp = Math.pow(a + b, 2);
//   return temp;
// };
// console.log("-----------------------------Quizz 2 - 2-----------------------------");
// console.log(calculateSquare(2, 3));

// // 3. Khai báo 1 function để nhập vào a từ bàn phím, tiếp tục nhập đến khi a là một số lớn hơn 0. Đầu ra là giá trị số vừa nhập.
// const inputNumber = () => {
//   let a;
//   do {
//     a = prompt("Nhập vào số lớn hơn 0");
//     if (a <= 0) {
//       console.log("Số không hợp lệ. Vui lòng nhập lại.");
//     }
//   } while (a <= 0);
//   return a;
// }
// console.log("-----------------------------Quizz 2 - 3-----------------------------");
// console.log(inputNumber());


// 4. Cho bộ dữ liệu về users như sau: data.js
const { data } = require("./data.js");

// -Nhập vào 1 số n. Hãy tìm 1 user có id bằng n
const findUserById = (id) => {
  let user = data.find((user) => user.id === id);
  return user ? user : "Không tìm thấy user";
};
console.log(
  "-----------------------------Câu 4.1-----------------------------"
);
console.log(findUserById(1));
console.log(findUserById(100));

// -Nhập vào 1 chuỗi keyword. Hãy lấy ra email của các user có tên (first_name + last_name) chứa keyword.
const findUserByName = (keyword) => {
  let temp = data.find(
    (user) => user.first_name === keyword || user.last_name === keyword
  );
  return temp ? temp.email : "Không tìm thấy user";
};
console.log(
  "-----------------------------Câu 4.2-----------------------------"
);
console.log(findUserByName("Kenton"));
console.log(findUserByName("Smith"));

// -Đếm số lượng user có age > 50.
const countUserByAge = (age) => {
  let count = data.filter((user) => user.age > age);
  return count ? count.length : "Không có user lớn hơn 50 tuổi";
};

console.log(
  "-----------------------------Câu 4.3-----------------------------"
);
console.log(countUserByAge(50));

// -Đếm số lượng user đã kết hôn và chưa kết hôn.
const countUserByMarried = (status) => {
  let count = data.filter((user) => user.is_married === status);
  return count.length;
};
console.log(
  "-----------------------------Câu 4.4-----------------------------"
);
console.log(countUserByMarried(true));
console.log(countUserByMarried(false));

// -Đếm số lượng user theo từng ngành nghề tương ứng.
const countUserByAllJob = () => {
  let jobCount = {};
  data.forEach((user) => {
    if (jobCount[user.job]) {
      jobCount[user.job]++;
    } else {
      jobCount[user.job] = 1;
    }
  });
  return jobCount;
};
console.log(
  "-----------------------------Câu 4.5-----------------------------"
);
console.log(countUserByAllJob());

//     Output:
//     {
//         "Dentist": 5,
//         "Developer": 13,
//         "Doctor": 6,
//         "Farmer": 8,
//         "Project Manager": 5,
//         "Teacher": 9,
//         "Worker" : 4
//     }
