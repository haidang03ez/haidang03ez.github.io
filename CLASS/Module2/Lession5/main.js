let items = document.querySelectorAll(".favorite-list-item");
items.forEach((item) => {
  item.textContent = "I love this thing";
  item.style.color = "red";
});

let input = prompt("Nhập món đồ yêu thích:");
let newItem = document.createElement("li");
newItem.className = "favorite-list-item";
newItem.textContent = input;
document.getElementById("favorite-list").appendChild(newItem);
