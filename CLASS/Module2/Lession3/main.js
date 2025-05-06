const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let b = 3;

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
function removeLast(arr) {
    arr.length = arr.length - 1;
    return arr;
}
console.log("Hàm xây: ",removeLast(a));

a.pop()
console.log("Hàm có sẵn: ", a);

//Đầu mảng
function removeFirst(arr) {
    for(let i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i+1];
    }  
    arr.length = arr.length - 1;
    return arr;
}
console.log("Hàm xây: ",removeFirst(a));

a.shift()
console.log("Hàm có sẵn: ", a);
