// Tạo user 
const createUser = () => {
  const newUser = {
    userId: document.getElementById("user-id").value,
    name: document.getElementById("user-name").value,
    gender: document.querySelector('input[name="gender"]:checked').value,
    mathScore: document.getElementById("math-score").value,
    englishScore: document.getElementById("english-score").value,
    literatureScore: document.getElementById("literature-score").value,
  };

  let users = JSON.parse(localStorage.getItem("users")) || [];
  if (users.some((user) => user.userId === newUser.userId)) {
    alert("Mã người dùng đã tồn tại!");
    return;
  }

  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));
  alert("Thêm thành công!");
};

// Lất tất cả người dùng
const getAllUser = () => {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const userList = document.getElementById("user-table-body");
  userList.innerHTML = "";

  users.forEach((user) => {
    const userItem = document.createElement("tr");
    userItem.innerHTML = `
    <table>
      <thead>
        <tr>
          <td>${user.userId}</td>
          <td>${user.name}</td>
          <td>${user.gender === "male" ? "Nam" : "Nữ"}</td>
          <td>${user.mathScore}</td>
          <td>${user.englishScore}</td>
          <td>${user.literatureScore}</td>
        </tr>
      </thead>
    </table>`;
    userList.appendChild(userItem);
  });
  return users;
};

// Tự động hàm getAllUser để lấy danh sách người dùng từ localStorage và hiển thị chúng trong bảng
( () => {
  try {
    const users =  getAllUser();
    if (users.length === 0) {
      console.log("Không có người dùng nào.");
    } else {
      console.log("Danh sách người dùng:", users);
    }
  } catch (error) {
    console.error("Lỗi:", error);
  }
})();


const findUser = (event) => {
  event.preventDefault();
  
  const searchScore = Number(document.getElementById("search-score").value);
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const resultList = document.getElementById("search-result");
  resultList.innerHTML = "";

  try {
    const filteredUsers = users.filter(user => Number(user.mathScore) === searchScore);
    if (filteredUsers.length === 0) {
      resultList.innerHTML = `
        <div class="alert alert-warning">
          Không tìm thấy học sinh nào có điểm ${searchScore}
        </div>`;
      return;
    }

    const table = document.createElement("table");
    table.className = "table table-striped mt-3";
    table.innerHTML = `
      <thead>
        <tr>
          <th>ID</th>
          <th>Họ tên</th>
          <th>Giới tính</th>
          <th>Điểm Toán</th>
          <th>Điểm Anh</th>
          <th>Điểm Văn</th>
        </tr>
      </thead>
      <tbody>
        ${filteredUsers.map(user => `
          <tr>
            <td>${user.userId}</td>
            <td>${user.name}</td>
            <td>${user.gender === "male" ? "Nam" : "Nữ"}</td>
            <td>${user.mathScore}</td>
            <td>${user.englishScore}</td>
            <td>${user.literatureScore}</td>
          </tr>
        `).join('')}
      </tbody>
    `;

    resultList.appendChild(table);
    console.log(`Tìm thấy ${filteredUsers.length} học sinh có điểm ${searchScore}`);

  } catch (error) {
    console.error("Lỗi tìm kiếm:", error);
    resultList.innerHTML = `
      <div class="alert alert-danger">
        Đã xảy ra lỗi khi tìm kiếm. Vui lòng thử lại.
      </div>`;
  }
};

const updateUser = () => {};

const deleteUser = () => {};
