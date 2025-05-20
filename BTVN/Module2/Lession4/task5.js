const storage = {
  name: "Fake Storage",
  address: "HN",
  owner: "Dung Tien",
  items: [
    {
      id: 1,
      name: "Product 1",
      category: "Furniture",
      pricce: 20,
    },
    {
      id: 2,
      name: "Product 2",
      category: "Device",
      pricce: 110,
    },
    {
      id: 3,
      name: "Product 3",
      category: "Cloth",
      pricce: 2,
    },
  ],
};

// *Xây dựng chương trình tương tác với kho hàng. Nhập vào action là yêu cầu ứng với các thao tác:
//     Action 1 -> Ý nghĩa: Sửa thông tin kho hàng
//     Action 2 -> Ý nghĩa: Tạo mặt hàng trong kho
//     Action 3 -> Ý nghĩa: Tìm kiếm mặt hàng
//     Action 4 -> Ý nghĩa: Xóa mặt hàng
// -Sau khi thực hiện xong mỗi thao tác, nhập lại action để thực hiện các thao tác khác.
// -Mô tả chi tiết
// +action = 1 → Yêu cầu nhập lại tên kho hàng, địa chỉ, người sở hữu. In ra thông tin mới của kho hàng sau khi cập nhật giá trị mới.
// +action = 2 → Yêu cầu nhập mã mặt hàng, tên, loại, giá cả. In ra thông tin các mặt hàng đang có trong kho. Nếu mã mặt hàng đã tồn tại → yêu cầu nhập lại.
// +action = 3 → Yêu cầu nhập từ khóa tìm kiếm. In ra thông tin các mặt hàng có tên chứa từ khóa tìm kiếm.  Nếu không có từ khóa tìm kiếm → in ra toàn bộ mặt hàng.
// +action = 4 → Yêu cầu nhập mã mặt hàng. Xóa mặt hàng có mã tương ứng. Nếu không tìm thấy mã mặt hàng cần xóa → kết thúc.

const editStorage = (name, address, owner) => {
  storage.name = name;
  storage.address = address;
  storage.owner = owner;
  console.log("Thông tin kho hàng đã được cập nhật:");
  return storage;
};
console.log(editStorage("Kho hàng mới", "HN", "Nguyen Van A"));

const createItem = (id, name, category, price) => {
  const newItem = { id, name, category, price };
  const checkId = storage.items.some((item) => item.id === id);
  checkId === true
    ? console.log("Mã mặt hàng đã tồn tại. Vui lòng nhập lại mã khác.")
    : price < 0
    ? console.log("Giá không hợp lệ")
    : storage.items.push(newItem);
  console.log("Kho hàng:");
  return storage.items;
};

console.log(createItem(4, "Product 4", "Device", -4));

// switch (action) {
//     case '1':
//         editStorage('Kho hàng mới', 'HN', 'Nguyen Van A');
//         console.log("Thông tin kho hàng đã được cập nhật:");
//         break;
//     case '2':
//         createItem(4, 'Product 4', 'Device', 100);
//         console.log("Thông tin mặt hàng đã được cập nhật:");
//         break;
//     case '3':

//         break;
//     case '4':

//     default:
//         console.log("Hành động không hợp lệ. Vui lòng nhập lại.");
//         break;
// }

// action = 1
