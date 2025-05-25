// Tạo 1 ứng dụng đồng đồ  hồ đếm ngược với các chức nắng sau:
// 1. Nhập thời gian đếm ngược
// 2. Bắt đầu đếm ngược
// 3. Dừng đếm ngược
// 4. Tiếp tục đếm ngược
// 5. Đặt lại thời gian đếm ngược ( reset )

function startCount() {
  const minutes = parseInt(document.getElementById("minutes").value) || 0;
  const seconds = parseInt(document.getElementById("seconds").value) || 0;
  let timeLeft = minutes * 60 + seconds;
  const result = document.getElementById("result");

  setInterval(() => {
    const min = Math.floor(timeLeft / 60);
    const sec = timeLeft % 60;

    result.innerHTML = `Thời gian còn lại: ${min} phút ${sec} giây`;

    if (timeLeft <= 0) {
      clearInterval();
      result.innerHTML = "Thời gian đã hết!";
    }
    timeLeft--;
  }, 1000);
}

const pauseCount = () => {
  clearInterval();
  const result = document.getElementById("result");
  result.innerHTML = "Đã tạm dừng!";
};
