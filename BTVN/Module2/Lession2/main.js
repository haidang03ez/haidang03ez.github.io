function countString() {
    const inputString = document.getElementById('input-quizz-1-0').value;
    const stringWithoutSpaces = inputString.replace(/\s/g, '');
    const resultDiv = document.getElementById('result-quizz-1-0');
    
    if (!inputString) {
        alert("Vui lòng nhập chuỗi!");
    }
    
    if (stringWithoutSpaces.length >= 8) {
        resultDiv.textContent = "Chuỗi này ok";
    } else {
        resultDiv.textContent = "Ngắn quá, dài thêm tí nữa";
    }
}

function checkAge() {
    let ageInput = parseInt(document.getElementById('input-quizz-1-1').value);
    if (!ageInput) {
        alert("Vui lòng nhập tuổi!");
    }
    let resultDiv = document.getElementById('result-quizz-1-1');
    if (ageInput >= 18) {
        resultDiv.textContent = "Bạn đã đủ tuổi";
    } else {
        resultDiv.textContent = "Bạn chưa đủ tuổi";
    }
}

function quizzCalc() {
    let select = document.getElementById('input-quizz-2').value;
    let resultDiv = document.getElementById('result-quizz-2');
    if (!select) {
        alert("Vui lòng chọn");
    }
    switch (select) {
        case '1':
            let sum = 0;
            for(let i = 1; i <= 50; i++) {
                sum += i;
            }
            output = `Tổng các số từ 1 đến 50 là: ${sum}`;
            break;
        case '2':
            let evenSum = 0;
            for(let i = -10; i <= 50; i++) {
                if(i % 2 === 0) evenSum += i;
            }
            output = `Tổng các số chẵn từ -10 đến 50 là: ${evenSum}`;
            break;
        case '3':
            let divisibleBy9 = [];
            for(let i = -100; i <= 100; i++) {
                if(i % 9 === 0) divisibleBy9.push(i);
            }
            output = `Các số chia hết cho 9 từ -100 đến 100 là: ${divisibleBy9.join(', ')}`;
            break;
        case '4':
            output = 'Các số từ 1 đến 200 đã được in ra console';
            let i = 1;
            while(i <= 200) {
                console.log(i);
                i++;
            }
            break;

        case '5':
            const s = document.getElementById('stringInput').value;
            const l = parseInt(document.getElementById('lengthInput').value);
            let result = s;
            while(result.length < l) {
                result += 'a';
            }
            output = `Chuỗi sau khi thêm ký tự 'a': ${result}`;
            break;

        case '6':
            let x = parseInt(document.getElementById('xInput').value);
            let y = parseInt(document.getElementById('yInput').value);
            if(x < 0 || y > 100 || x >= y) {
                output = 'Giá trị không hợp lệ!';
            } else {
                let steps = [];
                while(x < y) {
                    steps.push(`x = ${x}, y = ${y}`);
                    x++;
                    y--;
                }
                output = `Các bước thực hiện:<br>${steps.join('<br>')}`;
            }
            break;
        default:
            output = 'Không có lựa chọn nào!';   
    }
    resultDiv.innerHTML = output;
}
