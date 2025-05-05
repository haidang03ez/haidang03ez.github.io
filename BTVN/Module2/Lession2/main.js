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

function quizzCal() {
    
}
