// const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let b = 3;

//Thêm phần tử vào mảng
//Cuối mảng
// function addLast(arr, value) {
//     arr[arr.length] = value;
//     return arr;
// }
// console.log("Hàm xây: ",addLast(a, b));

// a.push(b)
// console.log("Hàm có sẵn: ", a);

// //Đầu mảng
// function addFirst(arr, value) {
//     for(let i = arr.length; i > 0; i--) {
//         arr[i] = arr[i-1];
//     }
//     arr[0] = value;
//     return arr;
// }
// console.log("Hàm xây: ",addFirst(a, b));

// a.unshift(b)
// console.log("Hàm có sẵn: ", a);

//Xóa phần tử trong mảng
//Cuối mảng
// function removeLast(arr) {
//     arr.length = arr.length - 1;
//     return arr;
// }
// console.log("Hàm xây: ",removeLast(a));


// //Đầu mảng
// function removeFirst(arr) {
//     for(let i = 0; i < arr.length - 1; i++) {
//         arr[i] = arr[i+1];
//     }  
//     arr.length = arr.length - 1;
//     return arr;
// }
// console.log("Hàm xây: ",removeFirst(a));

// Câu 1
const a = [1, 2, 3, 4];

console.log(a[0], a[3]); 
console.log(a[1] + a[2]);

let temp;
temp = a[1];
a[1] = a[3];
a[3] = temp;
console.log(a);

// Câu 2
const b = Array(5).fill(0).map(() => Math.floor(Math.random() * 10));
console.log(b);

b.filter((item) => item % 2 === 0).forEach((item) => console.log(item));

let sum = 0;
for (let i = 0; i < b.length; i++) {
    sum += b[i];
}
console.log(sum);

console.log(c = Math.min(...b));

// Câu 3
let d = [];
let n = parseInt(prompt("Nhập số phần tử của mảng: "));
if (isNaN(n) || n <= 0) {
    console.log("Số phần tử không hợp lệ");
} else {
    for (let i = 0; i < n; i++) {
        let value = parseInt(prompt(`Nhập phần tử thứ ${i + 1}: `));
        if (isNaN(value)) {
            console.log("Giá trị không hợp lệ");
            i--;
        } else {
            d.push(value);
        }
    }
}
console.log("Câu 3", d);