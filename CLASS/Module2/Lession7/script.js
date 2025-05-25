const signUpForm = document.getElementById("signup-form");
const signInForm = document.getElementById("signin-form");

const currentUser = JSON.parse(localStorage.getItem("currentUser"));
if (currentUser) {
  result.innerHTML = `
    <h2>Thông tin người dùng:</h2>
    <p>Tên: ${currentUser.name}</p>
    <p>Email: ${currentUser.email}</p>
    <p>Giới tính: ${currentUser.sex}</p>
    <p>Ngày sinh: ${currentUser.birthdate}</p>`;
}

signUpForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const sexChecked = document.querySelector('input[name="sex"]:checked');
  const sex = sexChecked ? sexChecked.value : "";
  const birthdate = document.getElementById("birth").value;
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  let users = JSON.parse(localStorage.getItem("users")) || [];
  if (users.some((user) => user.username === username)) {
    alert("Tên đăng nhập đã tồn tại!");
    return;
  }

  users.push({
    name: name,
    email: email,
    sex: sex,
    birthdate: birthdate,
    username: username,
    password: password,
  });

  localStorage.setItem("users", JSON.stringify(users));
  alert("Đăng ký thành công!");
});

signInForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const username = document.getElementById("signin-username").value;
  const password = document.getElementById("signin-password").value;
  const result = document.getElementById("result");
  result.innerHTML = "";

  const users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    alert("Đăng nhập thành công!");
    localStorage.setItem("currentUser", JSON.stringify(user));
    result.innerHTML = `
      <h2>Thông tin người dùng:</h2>
      <p>Tên: ${user.name}</p>
      <p>Email: ${user.email}</p>
      <p>Giới tính: ${user.sex}</p>
      <p>Ngày sinh: ${user.birthdate}</p>`;
  } else {
    alert("Sai tên đăng nhập hoặc mật khẩu.");
  }
});
