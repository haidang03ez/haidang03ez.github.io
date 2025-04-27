// let month = 3; 

// if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
//     console.log(`Tháng ${month} có 31 ngày`);
// } else if (month === 4 || month === 6 || month === 9 || month === 11) {
//     console.log(`Tháng ${month} có 30 ngày`); 
// } else if (month === 2) {
//     console.log("Tháng 2 có 28 hoặc 29 ngày tùy năm nhuận");
// } else {
//     console.log("Tháng không hợp lệ");
// }


// switch (month) {
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//         console.log(`Tháng ${month} có 31 ngày`);
//         break;
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//         console.log(`Tháng ${month} có 30 ngày`);
//         break;
//     case 2:
//         console.log("Tháng 2 có 28 hoặc 29 ngày tùy năm nhuận");
//         break;
//     default:
//         console.log("Tháng không hợp lệ");
// }



// let count = 6;
// // while (count > 5) {
// //     console.log(`Count is: ${count}`);
// //     count++;
// // }


// const x = 1 = count ? ((x < count) ? console.log(x) : console.log("x not 6")) : console.log("x not 1");

function countString() {
    let input = prompt("Nhập chuỗi cần đếm: ");
    let count = input.replace(/[^a-zA-Z0-9]/g, "").length;
    const x = count < 8 ? "Ngắn" : "Okey";

    document.getElementById('result').innerHTML = `
        <p>Chuỗi đã nhập: ${input}</p>
        <p>Số ký tự: ${count}</p>
        <p>Kết quả: ${x}</p>
    `;
}

function checkAge() {
    let age = parseInt(prompt("Nhập tuổi của bạn: "));
    let result = age >= 18 ? "Đủ 18 thì quẩy thôi" : (result = age >= 16 ? "Đợi thêm ít năm" : "Còn non quá");
    document.getElementById('result-age').innerHTML = 
        `<p>${result}</p>`;

}

function sumNumbers() {
    let sl = parseInt(prompt("Nhập lựa chọn: "));
    switch (sl) {
        case (0):
            let nbhead = parseInt(prompt("Nhập điểm đầu: "));
            let nbfoot = parseInt(prompt("Nhập điểm cuối: "));
            let sum = 0;
            for(let i = nbhead; i <=  nbfoot; i++ ) {
                sum += i;
            }   
            document.getElementById('result-sum').innerHTML = 
                `<p>Tổng là: ${sum}</p>`;
            break;

        case (1):
            let nbhead1 = parseInt(prompt("Nhập điểm đầu: "));
            let nbfoot1 = parseInt(prompt("Nhập điểm cuối: "));
            let sum1 = 0;
            for(let i = nbhead1; i <=  nbfoot1; i++ ) {
                if (i % 2 === 0) {
                    sum1 += i;
                }
            }   
            document.getElementById('result-sum').innerHTML = 
                `<p>Tổng là: ${sum1}</p>`;
            break;

        case (2):
            let nbhead2 = parseInt(prompt("Nhập điểm đầu: "));
            let nbfoot2 = parseInt(prompt("Nhập điểm cuối: "));
            let a = [];
            for(let i = nbhead2; i <=  nbfoot2; i++ ) {
                if (i % 9 === 0) {
                    a.push(i);
                }
            }   
            document.getElementById('result-sum').innerHTML = 
                `<p>Các số chia hết cho 9 là: ${a}</p>`;
            break;
        case (3):
            let number = 1;
            let result = [];
            
            while (number <= 200) {
                result.push(number);
                number++;
            }
            document.getElementById('result-sum').innerHTML = `
                <div class="card mt-3">
                    <div class="card-body">
                        <h5 class="card-title">Dãy số từ 1 đến 200:</h5>
                        <p class="card-text">${result.join(', ')}</p>
                    </div>
                </div>
            `;
            break;
        default:
            break;
    }
    
}

