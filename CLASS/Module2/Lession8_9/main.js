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
          <td>
            <button class="btn btn-primary" onclick="updateUser('${user.userId}')">Sửa</button>
            <button class="btn btn-danger" onclick="deleteUser('${user.userId}')">Xóa</button>
          </td>
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

//Tìm kiếm 
const findUser = (event) => {
  event.preventDefault();
  
  const searchScore = Number(document.getElementById("search-score").value);
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const userList = document.getElementById("user-table-body");
  userList.innerHTML = "";

  try {
    const filteredUsers = users.filter(user => Number(user.literatureScore) === searchScore);
    if (filteredUsers.length === 0) {
      userList.innerHTML = `
        <div class="alert alert-warning">
          Không tìm thấy học sinh nào có điểm ${searchScore}
        </div>`;
      return;
    }

    filteredUsers.forEach(user => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${user.userId}</td>
        <td>${user.name}</td>
        <td>${user.gender === "male" ? "Nam" : "Nữ"}</td>
        <td>${user.mathScore}</td>
        <td>${user.englishScore}</td>
        <td>${user.literatureScore}</td>
      `;
      userList.appendChild(row);
    });
  } catch (error) {
    console.error("Lỗi tìm kiếm:", error);
    userList.innerHTML = `
      <div class="alert alert-danger">
        Đã xảy ra lỗi khi tìm kiếm. Vui lòng thử lại.
      </div>`;
  }
};

const updateUser = (userId) => {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find(u => u.userId === userId);
  
  if (!user) {
    alert("Không tìm thấy học sinh!");
    return;
  }
  document.getElementById("user-id").value = user.userId;
  document.getElementById("user-name").value = user.name;
  document.querySelector(`input[name="gender"][value="${user.gender}"]`).checked = true;
  document.getElementById("math-score").value = user.mathScore;
  document.getElementById("english-score").value = user.englishScore;
  document.getElementById("literature-score").value = user.literatureScore;

  const submitBtn = document.getElementById("submit-btn");
  submitBtn.textContent = "Cập nhật";
  submitBtn.onclick = (e) => {
    e.preventDefault();
    
    const updatedUser = {
      userId: document.getElementById("user-id").value,
      name: document.getElementById("user-name").value,
      gender: document.querySelector('input[name="gender"]:checked').value,
      mathScore: document.getElementById("math-score").value,
      englishScore: document.getElementById("english-score").value,
      literatureScore: document.getElementById("literature-score").value,
    };

    const userIndex = users.findIndex(u => u.userId === userId);
    users[userIndex] = updatedUser;
    localStorage.setItem("users", JSON.stringify(users));
    
    document.getElementById("input-form").reset();
    submitBtn.textContent = "Thêm người dùng";
    submitBtn.onclick = createUser;
    

    getAllUser();
    alert("Cập nhật thành công!");
  };
};

const deleteUser = (userId) => {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find(u => u.userId === userId);
  if (!user) {
    alert("Không tìm thấy học sinh!");
    return;
  }
  const confirmDelete = confirm(`Bạn có chắc chắn muốn xóa học sinh ${user.name}?`);
  if (confirmDelete) {
    const updatedUsers = users.filter(u => u.userId !== userId);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    getAllUser();
    alert("Xóa thành công!");
  }
};
