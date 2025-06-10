//Thêm công việc
const addTask = () => {
  const newTask = {
    nameTask: document.getElementById("add-task-input").value,
    statusTask: true,
  };

  if (!newTask.nameTask) {
    alert("Vui lòng nhập tên công việc!");
    return;
  }

  let tasks = JSON.parse(localStorage.getItem("task")) || [];

  if (tasks.some((task) => task.nameTask === newTask.nameTask)) {
    alert("Công việc này đã tồi tại!");
    return;
  }

  tasks.push(newTask);
  localStorage.setItem("task", JSON.stringify(tasks));
  alert("Thêm công việc thành công!");
  getAllTask();
};

const pagination = {
  currentPage: 1,
  pageSize: 5,
  totalPage: 0,
};

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
  const tasks = JSON.parse(localStorage.getItem("task")) || [];
  switch (currentTab) {
    case "all":
      pagination.totalPage = Math.ceil(tasks.length / value);
      getAllTask();
      break;
    case "active":
      const activeTasks = tasks.filter((task) => task.statusTask === true);
      pagination.totalPage = Math.ceil(activeTasks.length / value);
      getActiveTask();
      break;
    case "completed":
      const completedTasks = tasks.filter((task) => task.statusTask === false);
      pagination.totalPage = Math.ceil(completedTasks.length / value);
      getCompleteTask();
      break;
  }
  paginationNumber();
};

// Tiến lên trang sau
const handleNextPage = () => {
  if (pagination.currentPage < pagination.totalPage) {
    pagination.currentPage++;
    getAllTask();
    getActiveTask();
    getCompleteTask();
    paginationNumber();
  } else {
    alert("Đã đến trang cuối cùng!");
  }
};

// Trở về trang trước
const handlePreviousPage = () => {
  if (pagination.currentPage > 1) {
    pagination.currentPage--;
    getAllTask();
    getActiveTask();
    getCompleteTask();
    paginationNumber();
  }
};

//Hiển thị số trang
const paginationNumber = () => {
  const numberPage = document.getElementById("pagination-numbers");
  numberPage.innerHTML = "";

  const tasks = JSON.parse(localStorage.getItem("task")) || [];
  let totalItems = 0;

  switch (currentTab) {
    case "all":
      totalItems = tasks.length;
      break;
    case "active":
      totalItems = tasks.filter((task) => task.statusTask === true).length;
      break;
    case "completed":
      totalItems = tasks.filter((task) => task.statusTask === false).length;
      break;
  }

  pagination.totalPage = Math.ceil(totalItems / pagination.pageSize);

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
  getAllTask();
  getActiveTask();
  getCompleteTask();
  paginationNumber();
};

const handleTabChange = (tab) => {
  currentTab = tab;
  pagination.currentPage = 1;
  const tasks = JSON.parse(localStorage.getItem("task")) || [];

  switch (tab) {
    case "all":
      pagination.totalPage = Math.ceil(tasks.length / pagination.pageSize);
      getAllTask();
      break;
    case "active":
      const activeTasks = tasks.filter((task) => task.statusTask === true);
      pagination.totalPage = Math.ceil(
        activeTasks.length / pagination.pageSize
      );
      getActiveTask();
      break;
    case "completed":
      const completedTasks = tasks.filter((task) => task.statusTask === false);
      pagination.totalPage = Math.ceil(
        completedTasks.length / pagination.pageSize
      );
      getCompleteTask();
      break;
  }
  paginationNumber();
};

// Hiển thị danh sách All
const getAllTask = () => {
  const tasks = JSON.parse(localStorage.getItem("task")) || [];
  const taskList = document.getElementById("data-table-all");
  taskList.innerHTML = "";

  pagination.totalPage = Math.ceil(tasks.length / pagination.pageSize);
  const startIndex = (pagination.currentPage - 1) * pagination.pageSize;
  const endIndex = startIndex + pagination.pageSize;
  const paginatedTask = tasks.slice(startIndex, endIndex);

  paginatedTask.forEach((task) => {
    const taskItem = document.createElement("div");
    taskItem.className = "d-flex align-items-center gap-2 mb-2";
    taskItem.innerHTML = `
        <div class="form-check flex-grow-1">
        <input 
          class="form-check-input" 
          type="checkbox" 
          ${!task.statusTask ? "checked" : ""}
          onchange="toggleStatus('${task.nameTask}')"
        />
        <label class="form-check-label">
          ${task.nameTask}
        </label>
      </div>
        `;
    taskList.appendChild(taskItem);
  });
  paginationNumber();
};

// Hiển thị danh sách Active
const getActiveTask = () => {
  const tasks = JSON.parse(localStorage.getItem("task")) || [];
  const activeTasks = tasks.filter((task) => task.statusTask === true);
  const taskList = document.getElementById("data-table-active");
  taskList.innerHTML = "";

  pagination.totalPage = Math.ceil(activeTasks.length / pagination.pageSize);
  const startIndex = (pagination.currentPage - 1) * pagination.pageSize;
  const endIndex = startIndex + pagination.pageSize;
  const paginatedTask = activeTasks.slice(startIndex, endIndex);

  paginatedTask.forEach((task) => {
    if (task.statusTask === true) {
      const taskItem = document.createElement("div");
      taskItem.className = "d-flex align-items-center gap-2 mb-2";
      taskItem.innerHTML = `
        <div class="form-check flex-grow-1">
            <input 
                class="form-check-input" 
                type="checkbox" 
                ${!task.statusTask ? "checked" : ""}
                onchange="toggleStatus('${task.nameTask}')"
            />
            <label class="form-check-label">
                ${task.nameTask}
            </label>
        </div>
        `;
      taskList.appendChild(taskItem);
    }
  });
  paginationNumber();
};

// Hiển thị danh sách Complete
const getCompleteTask = () => {
  const tasks = JSON.parse(localStorage.getItem("task")) || [];
  const completedTasks = tasks.filter((task) => task.statusTask === false);
  const taskList = document.getElementById("data-table-complete");
  taskList.innerHTML = "";

  pagination.totalPage = Math.ceil(completedTasks.length / pagination.pageSize);
  const startIndex = (pagination.currentPage - 1) * pagination.pageSize;
  const endIndex = startIndex + pagination.pageSize;
  const paginatedTask = completedTasks.slice(startIndex, endIndex);

  paginatedTask.forEach((task) => {
    const taskItem = document.createElement("div");
    taskItem.className = "d-flex align-items-center gap-2 mb-2";
    taskItem.innerHTML = `
      <div class="form-check flex-grow-1">
        <input 
          class="form-check-input" 
          type="checkbox" 
          ${!task.statusTask ? "checked" : ""}
          onchange="toggleStatus('${task.nameTask}')"
        />
        <label class="form-check-label">
          ${task.nameTask}
        </label>
      </div>
      <button 
        class="btn btn-danger btn-sm"
        onclick="deleteTask('${task.nameTask}')"
        >
        Xóa
      </button>
    `;
    taskList.appendChild(taskItem);
  });
  paginationNumber();
};

// Chuyển trạng thái
const toggleStatus = (taskName) => {
  let tasks = JSON.parse(localStorage.getItem("task")) || [];
  tasks = tasks.map((task) => {
    if (task.nameTask === taskName) {
      task.statusTask = !task.statusTask;
    }
    return task;
  });
  localStorage.setItem("task", JSON.stringify(tasks));
  getAllTask();
  getActiveTask();
  getCompleteTask();
};

//Load danh sách

let currentTab = "all";
window.onload = () => {
  try {
    const tasks = JSON.parse(localStorage.getItem("task")) || [];
    const selectElement = document.getElementById("select-page-numbers");
    if (selectElement) {
      selectElement.value = pagination.pageSize;
    }
    pagination.totalPage = Math.ceil(tasks.length / pagination.pageSize);
    handleTabChange("all");
  } catch (error) {
    console.error("Lỗi khởi tạo:", error);
  }
};

// Xóa công việc
const deleteTask = (taskName) => {
  if (confirm(`Bạn có chắc chắn muốn xóa công việc "${taskName}" không?`)) {
    let tasks = JSON.parse(localStorage.getItem("task")) || [];
    tasks = tasks.filter(task => task.nameTask !== taskName);
    localStorage.setItem("task", JSON.stringify(tasks));

    pagination.totalPage = Math.ceil(tasks.length / pagination.pageSize);
    
    if (pagination.currentPage > pagination.totalPage) {
      pagination.currentPage = Math.max(1, pagination.totalPage);
    }

    getAllTask();
    getActiveTask();
    getCompleteTask();
    paginationNumber();
  }
};

// Xóa toàn bộ
const deleteAllTask = () => {
  if (confirm("Bạn có chắc chắn muốn xóa tất cả công việc không?")) {
    localStorage.removeItem("task");
    
    pagination.currentPage = 1;
    pagination.totalPage = 0;

    getAllTask();
    getActiveTask();
    getCompleteTask();
    paginationNumber();
  }
};
