const averageScore = (mathScore, englishScore, literatureScore) => {
  return (
    (Number(mathScore) + Number(englishScore) + Number(literatureScore)) / 3
  );
};

const generateUserId = () => {
  return Date.now() + "_" + Math.floor(Math.random() * 1000);
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

  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));
  alert("Thêm thành công!");
};

const paginationValue = {
  currentPage: 1,
  itemsPerPage: 2,
  totalPages: 1,
};

const getPageData = (data, page) => {
  const start = (page - 1) * paginationValue.itemsPerPage;
  const end = start + paginationValue.itemsPerPage;
  return data.slice(start, end);
};

const updatePaginationUI = () => {
  const { currentPage } = paginationValue;

  // Cập nhật trạng thái active
  document.querySelectorAll(".page-item").forEach((item) => {
    item.classList.remove("active");
  });
  document
    .querySelector(`#page-${currentPage}`)
    .parentElement.classList.add("active");

  // Cập nhật trạng thái nút Previous/Next
  document
    .querySelector("#prev-page")
    .parentElement.classList.toggle("disabled", currentPage === 1);
  document
    .querySelector("#next-page")
    .parentElement.classList.toggle("disabled", currentPage === 2);
};


const getAllUser = () => {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const userList = document.getElementById("user-table-body");
  userList.innerHTML = "";

  // Lấy dữ liệu theo trang hiện tại
  const pageData = getPageData(users, paginationValue.currentPage);

  pageData.forEach((user) => {
    const userItem = document.createElement("tr");
    userItem.innerHTML = `
      <td>${user.userId}</td>
      <td>${user.name}</td>
      <td>${user.gender === "male" ? "Nam" : "Nữ"}</td>
      <td>${user.mathScore}</td>
      <td>${user.englishScore}</td>
      <td>${user.literatureScore}</td>
      <td>${user.averageScore.toFixed(2)}</td>
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

  updatePaginationUI();
};

(() => {
  try {
    const users = getAllUser();
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
        <td>${user.averageScore.toFixed(2)}</td>
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

const resetSearch = (event) => {
  event.preventDefault();
  document.getElementById("search-gender").value = "";
  document.getElementById("search-subject").value = "math";
  document.getElementById("search-score").value = "";
  document.getElementById("search-name").value = "";
  getAllUser();
};

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
    getAllUser();
    alert("Xóa thành công!");
  }
};

const prevPage = () => {
  if (paginationValue.currentPage > 1) {
    paginationValue.currentPage--;
    getAllUser();
  }
};

const nextPage = () => {
  if (paginationValue.currentPage < 2) {
    paginationValue.currentPage++;
    getAllUser();
  }
};

const goToPage = (page) => {
  paginationValue.currentPage = page;
  getAllUser();
};
