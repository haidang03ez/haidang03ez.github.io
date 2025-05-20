document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form-input');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        handleClick();
    });
});

function handleClick() {
    const name = document.getElementById('name').value;
    const year = document.getElementById('year').value;
    const age = document.getElementById('age').value;
    const phone = document.getElementById('phone').value;
    const sex = document.querySelector('input[name="sex"]:checked').value;

    const result = document.getElementById('result');
    result.innerHTML = `
        Tên: ${name}<br>
        Năm sinh: ${year}<br>
        Tuổi: ${age}<br>
        Giới tính: ${sex === 'male' ? 'Nam' : 'Nữ'}<br>
        Số điện thoại: ${phone}
    `;
}