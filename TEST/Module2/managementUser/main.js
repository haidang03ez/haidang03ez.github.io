// Đăng nhập
let currentUser = null;

const login = () => {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;
  const result = document.getElementById("loginResult");

  if (!email || !password) {
    result.textContent = "Hãy nhập đầy đủ thông tin";
    return;
  }

  const user = users.find((u) => u.email === email && u.password === password);
  if (user) {
    currentUser = user;
    result.textContent = `Xin chào ${user.first_name} ${user.last_name}`;

    document.getElementById("auth-check").style.display = "none";
    document.getElementById("main-features").style.display = "block";
  } else {
    result.textContent = "Thông tin tài khoản không chính xác";
  }
  listUsers();
  listPosts();
};

// Đăng ký
const register = () => {
  const first = document.getElementById("regFirstName").value;
  const last = document.getElementById("regLastName").value;
  const email = document.getElementById("regEmail").value;
  const password = document.getElementById("regPassword").value;
  const result = document.getElementById("registerResult");

  if (!first || !last || !email || !password) {
    result.textContent = "Hãy nhập đầy đủ thông tin";
    return;
  }

  if (users.find((u) => u.email === email)) {
    result.textContent = "Email này đã có tài khoản";
    return;
  }

  const newId = Math.max(...users.map((u) => u.id)) + 1;
  users.push({
    id: newId,
    first_name: first,
    last_name: last,
    email,
    password,
  });
  result.textContent = "Đăng ký thành công!";
};

// Đăng xuất
const logout = () => {
  currentUser = null;
  document.getElementById("auth-check").style.display = "block";
  document.getElementById("main-features").style.display = "none";

  document.getElementById("loginEmail").value = "";
  document.getElementById("loginPassword").value = "";
  document.getElementById("loginResult").textContent = "";
};

// Danh sách user
const listUsers = () => {
  const keyword = document.getElementById("userKeyword").value.toLowerCase();
  const list = document.getElementById("userList");
  list.innerHTML = "";

  const filteredUsers = users.filter((user) => {
    const fullName = `${user.first_name} ${user.last_name}`.toLowerCase();
    return (
      !keyword ||
      fullName.includes(keyword) ||
      user.email.toLowerCase().includes(keyword)
    );
  });

  if (filteredUsers.length === 0) {
    list.innerHTML =
      '<div class="alert alert-warning">Không tìm thấy người dùng nào</div>';
    return;
  }

  filteredUsers.forEach((user) => {
    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${user.id}</td>
        <td>${user.first_name} ${user.last_name}</td>
        <td>${user.email}</td>
    `;
    list.appendChild(row);
  });
};

// Danh sách post
const listPosts = () => {
  const list = document.getElementById("postList");
  list.innerHTML = "";
  posts.forEach((post) => {
    const user = users.find((u) => u.id === post.user_id);

    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${post.id}</td>
        <td>${post.title} </td>
        <td>${post.created_at}</td>
        <td>${user?.first_name} ${user?.last_name}</td>
    `;
    
    list.appendChild(row);
  });
};

// Xem chi tiết post
const viewPostDetail = () => {
  const id = parseInt(document.getElementById("detailPostId").value);
  const detail = document.getElementById("postDetail");
  detail.innerHTML = "";

  const post = posts.find((p) => p.id === id);
  if (!post) {
    detail.textContent = "Không tìm thấy bài viết";
    return;
  }

  const user = users.find((u) => u.id === post.user_id);
  detail.innerHTML = `
    <strong>ID:</strong> ${post.id}<br>
    <strong>Tiêu đề:</strong> ${post.title}<br>
    <strong>Nội dung:</strong> ${post.content}<br>
    <strong>Ảnh:</strong> <img src="${post.image}" width="150"><br>
    <strong>Tác giả:</strong> ${user?.first_name} ${user?.last_name}<br>
    <strong>Ngày tạo:</strong> ${post.created_at}<br>
    <strong>Ngày cập nhật:</strong> ${post.updated_at}
  `;
};

// Tìm kiếm post theo user
const searchPostsByUser = () => {
  const email = document.getElementById("searchPostEmail").value;
  const list = document.getElementById("userPosts");
  list.innerHTML = "";

  const user = users.find((u) => u.email === email);
  if (!user) {
    list.textContent = "Không tìm thấy người dùng";
    return;
  }

  const userPosts = posts.filter((p) => p.user_id === user.id);
  if (userPosts.length === 0) {
    list.textContent = "Người dùng chưa có bài viết nào";
    return;
  }

  userPosts.forEach((post) => {
    const div = document.createElement("div");
    div.className = "post";
    div.textContent = `ID: ${post.id} | Tiêu đề: ${post.title} | Ngày tạo: ${post.created_at}`;
    list.appendChild(div);
  });
};
