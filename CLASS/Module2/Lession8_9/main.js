// Hàm tính điểm trung bình
const averageScore = (mathScore, englishScore, literatureScore) => {
  return (
    (Number(mathScore) + Number(englishScore) + Number(literatureScore)) / 3
  );
};

// Hàm tạo mã người dùng duy nhất
const generateUserId = () => {
  return Date.now() + "_" + Math.floor(Math.random() * 1000);
};

const pagination = {
  currentPage: 1,
  pageSize: 5,
  totalPage: 0,
};

// Hàm điểu khiển phân trang

// Thay đổi số lượng hiển thị
const handlePageSizeChange = () => {
  const selectElement = document.getElementById("select-page-numbers");

  if (!selectElement || !selectElement.value.trim()) {
    alert("Vui lòng nhập số lượng");
    return;
  }

  const value = Number(selectElement.value);
  if (isNaN(value) || value < 1) {
    alert("Vui lòng nhập số lượng hợp lệ (lớn hơn 0)!");
    return;
  }

  pagination.pageSize = value;
  pagination.currentPage = 1;
  getAllUser();
  paginationNumber();
};

// Tiến lên trang sau
const handleNextPage = () => {
  if (pagination.currentPage < pagination.totalPage) {
    pagination.currentPage++;
    getAllUser();
    paginationNumber();
  } else {
    alert("Đã đến trang cuối cùng!");
  }
};

// Trở về trang trước
const handlePreviousPage = () => {
  if (pagination.currentPage > 1) {
    pagination.currentPage--;
    getAllUser();
    paginationNumber();
  }
};

//Hiển thị số trang
const paginationNumber = () => {
  const numberPage = document.getElementById("pagination-numbers");
  numberPage.innerHTML = "";
  
  let startPage = Math.max(1, pagination.currentPage - 2);
  let endPage = Math.min(pagination.totalPage, startPage + 4);
  
  if (endPage - startPage < 4) {
    startPage = Math.max(1, endPage - 4);
  }

  for (let i = startPage; i <= endPage; i++) {
    numberPage.innerHTML += `
      <li class="page-item ${i === pagination.currentPage ? "active" : ""}">
        <button class="page-link" onclick="handlePageChange(${i})">
          ${i}
        </button>
      </li>
    `;
  }
};

// Chuyển tới trang được chọn
const handlePageChange = (pageNumber) => {
  pagination.currentPage = pageNumber;
  getAllUser();
  paginationNumber();
};

// Tạo user
const createUser = () => {
  const newUser = {
    userId: generateUserId(),
    name: document.getElementById("user-name").value,
    gender: document.querySelector('input[name="gender"]:checked').value,
    mathScore: document.getElementById("math-score").value,
    englishScore: document.getElementById("english-score").value,
    literatureScore: document.getElementById("literature-score").value,
    averageScore: averageScore(
      document.getElementById("math-score").value,
      document.getElementById("english-score").value,
      document.getElementById("literature-score").value
    ),
  };

  let users = JSON.parse(localStorage.getItem("users")) || [];
  if (users.some((user) => user.userId === newUser.userId)) {
    alert("Mã người dùng đã tồn tại!");
    return;
  }

  if (newUser.englishScore < 0 || newUser.englishScore > 10) {
    alert("Điểm tiếng anh không hợp lệ");
  } else if (newUser.mathScore < 0 || newUser.mathScore > 10) {
    alert("Điểm toán không hợp lệ");
  } else if (newUser.literatureScore < 0 || newUser.literatureScore > 10) {
    alert("Điểm văn không hợp lệ");
  } else {
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    getAllUser();
    alert("Thêm thành công!");
  }
};

// Hàm lấy tất cả người dùng
const getAllUser = () => {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const userList = document.getElementById("user-table-body");
  userList.innerHTML = "";

  pagination.totalPage = Math.ceil(users.length / pagination.pageSize); // Tính tổng số trang (sử dụng Ceil làm tròn lên số nguyên)
  const startIndex = (pagination.currentPage - 1) * pagination.pageSize; // Tính điểm khởi đầu khi lấy dữ liệu trong danh sách data
  const endIndex = startIndex + pagination.pageSize; // Tính điểm kết thúc khi lấy dữ liệu trong danh sách data
  const paginatedUsers = users.slice(startIndex, endIndex); // Lấy dữ liệu trong danh sách data theo điểm bắt đầu và kết thúc

  paginatedUsers.forEach((user) => {
    const userItem = document.createElement("tr");
    userItem.innerHTML = `
      <td>${user.userId}</td>
      <td>${user.name}</td>
      <td>${user.gender === "male" ? "Nam" : "Nữ"}</td>
      <td>${user.mathScore}</td>
      <td>${user.englishScore}</td>
      <td>${user.literatureScore}</td>
      <td>${user.averageScore}</td>
      <td>
        <button class="btn btn-primary" onclick="updateUser('${
          user.userId
        }')">Sửa</button>
        <button class="btn btn-danger" onclick="deleteUser('${
          user.userId
        }')">Xóa</button>
      </td>
    `;
    userList.appendChild(userItem);
  });
};

// Gọi hàm lấy tất cả người dùng khi trang được tải
(() => {
  try {
    const users = getAllUser();
    paginationNumber();
    if (users.length === 0) {
      console.log("Không có người dùng nào.");
    } else {
      console.log("Danh sách người dùng:", users);
    }
  } catch (error) {
    console.error("Lỗi:", error);
  }
})();

// Hàm tìm kiếm người dùng
const findUser = (event) => {
  event.preventDefault();

  const searchGender = document.getElementById("search-gender").value;
  const searchSubject = document.getElementById("search-subject").value;
  const searchName = document.getElementById("search-name").value.trim();
  const searchScore = Number(document.getElementById("search-score").value);

  const users = JSON.parse(localStorage.getItem("users")) || [];
  const userList = document.getElementById("user-table-body");
  userList.innerHTML = "";

  try {
    let filteredUsers = users;
    if (searchGender) {
      filteredUsers = filteredUsers.filter(
        (user) => user.gender === searchGender
      );
    }

    if (searchScore) {
      switch (searchSubject) {
        case "math":
          filteredUsers = filteredUsers.filter(
            (user) => Number(user.mathScore) === searchScore
          );
          break;
        case "literature":
          filteredUsers = filteredUsers.filter(
            (user) => Number(user.literatureScore) === searchScore
          );
          break;
        case "english":
          filteredUsers = filteredUsers.filter(
            (user) => Number(user.englishScore) === searchScore
          );
          break;
      }
    }

    if (searchName) {
      filteredUsers = filteredUsers.filter((user) =>
        user.name.toLowerCase().includes(searchName.toLowerCase())
      );
    }

    if (filteredUsers.length === 0) {
      userList.innerHTML = `
        <div class="alert alert-warning">
          Không tìm thấy học sinh nào phù hợp với tiêu chí tìm kiếm
        </div>`;
      return;
    }

    filteredUsers.forEach((user) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${user.userId}</td>
        <td>${user.name}</td>
        <td>${user.gender === "male" ? "Nam" : "Nữ"}</td>
        <td>${user.mathScore}</td>
        <td>${user.englishScore}</td>
        <td>${user.literatureScore}</td>
        <td>${user.averageScore}</td>
        <td>
          <button class="btn btn-primary" onclick="updateUser('${
            user.userId
          }')">Sửa</button>
          <button class="btn btn-danger" onclick="deleteUser('${
            user.userId
          }')">Xóa</button>
        </td>
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

// Hàm reset tìm kiếm
const resetSearch = (event) => {
  event.preventDefault();
  document.getElementById("search-gender").value = "";
  document.getElementById("search-subject").value = "math";
  document.getElementById("search-score").value = "";
  document.getElementById("search-name").value = "";
  getAllUser();
};

// Hàm cập nhật người dùng
const updateUser = (userId) => {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find((u) => u.userId === userId);

  if (!user) {
    alert("Không tìm thấy học sinh!");
    return;
  }
  document.getElementById("user-id").value = userId;
  document.getElementById("user-name").value = user.name;
  document.querySelector(
    `input[name="gender"][value="${user.gender}"]`
  ).checked = true;
  document.getElementById("math-score").value = user.mathScore;
  document.getElementById("english-score").value = user.englishScore;
  document.getElementById("literature-score").value = user.literatureScore;

  const submitBtn = document.getElementById("submit-btn");
  submitBtn.textContent = "Cập nhật";
  submitBtn.onclick = (e) => {
    e.preventDefault();

    const updatedUser = {
      userId: userId,
      name: document.getElementById("user-name").value,
      gender: document.querySelector('input[name="gender"]:checked').value,
      mathScore: document.getElementById("math-score").value,
      englishScore: document.getElementById("english-score").value,
      literatureScore: document.getElementById("literature-score").value,
      averageScore: averageScore(
        document.getElementById("math-score").value,
        document.getElementById("english-score").value,
        document.getElementById("literature-score").value
      ),
    };

    const userIndex = users.findIndex((u) => u.userId === userId);
    users[userIndex] = updatedUser;
    localStorage.setItem("users", JSON.stringify(users));

    document.getElementById("input-form").reset();
    submitBtn.textContent = "Thêm người dùng";
    submitBtn.onclick = createUser;

    getAllUser();
    alert("Cập nhật thành công!");
  };
};

// Hàm xóa người dùng
const deleteUser = (userId) => {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find((u) => u.userId === userId);
  if (!user) {
    alert("Không tìm thấy học sinh!");
    return;
  }
  const confirmDelete = confirm(
    `Bạn có chắc chắn muốn xóa học sinh ${user.name}?`
  );
  if (confirmDelete) {
    const updatedUsers = users.filter((u) => u.userId !== userId);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    pagination.currentPage = 1;
    getAllUser();
    paginationNumber();
    alert("Xóa thành công!");
  }
};
