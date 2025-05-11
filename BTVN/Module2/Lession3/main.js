let growth = [
    [5,8,9,16],
    [2,7,1,9],
    [5,6,8,12],
    [10,2,1,8],
    [20,4,9,1]
]

function maxYear (arr) {
    let a = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > 0) {
            let sum = arr[i].reduce((acc, curr) => acc + curr, 0);
            let avg = sum / arr[i].length;
            a.push(avg);
        }
        else {
            console.log("Array " + i + " is empty");
        } 
    }
    return a;
}

function maxValue (arr) {
    let a = [];
    let transArr = arr[0].map((_, colIndex) => arr.map(row => row[colIndex]));
    for (let i = 0; i < transArr.length; i++) {
        let max = Math.max(transArr[i]);
        a.push(max);
    }
    return a;
}

const transArr = growth[0].map((_, colIndex) => growth.map(row => row[colIndex]));
console.log("Mảng ban đầu: " + growth);
console.log("Mảng đã chuyển vị: " + transArr);
console.log(transArr.length);

// const max1 = maxYear(growth);
// console.log("Trung bình tăng trưởng của từng năm: " + max1);
// console.log("Giá trị tăng trưởng trung bình theo năm lớn nhất: " + Math.max(...max1));
console.log("Giá trị tăng trưởng tăng trưởng theo quý lớn nhất: " + maxValue(growth));