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
  getAllTask();
  getActiveTask();
  getCompleteTask();
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

let currentTab = "all";

const handleTabChange = (tab) => {
  currentTab = tab;
  pagination.currentPage = 1;

  switch (tab) {
    case "all":
      getAllTask();
      break;
    case "active":
      getActiveTask();
      break;
    case "completed":
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
  const paginatedTask = tasks.slice(startIndex, endIndex);

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
    `;
    taskList.appendChild(taskItem);
  });
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
};

//Load danh sách
window.onload = () => {
  try {
    getAllTask();
    getActiveTask();
    paginationNumber();
  } catch (error) {
    console.error("Error loading tasks:", error);
  }
};

// Xóa công việc
const deleteTask = () => {};

// Xóa toàn bộ
const deleteAllTask = () => {};
