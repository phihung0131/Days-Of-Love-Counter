function updateCounterAndDate() {
  // Đặt ngày bắt đầu (11/4/2023)
  const startDate = new Date(2023, 3, 11); // Tháng bắt đầu từ 0, nên tháng 4 là 3

  // Lấy ngày hiện tại
  const currentDate = new Date();

  let day = String(startDate.getDate()).padStart(2, "0");
  let month = String(startDate.getMonth() + 1).padStart(2, "0"); // Tháng bắt đầu từ 0
  let year = String(startDate.getFullYear()).slice(-2); // Lấy 2 chữ số cuối của năm

  // Định dạng ngày
  const formattedStartDate = `${day}/${month}/${year}`;

  day = String(currentDate.getDate()).padStart(2, "0");
  month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Tháng bắt đầu từ 0
  year = String(currentDate.getFullYear()).slice(-2); // Lấy 2 chữ số cuối của năm

  // Định dạng ngày
  const formattedCurrentDate = `${day}/${month}/${year}`;

  // Tính số milliseconds giữa hai ngày
  const difference = currentDate - startDate;

  // Chuyển đổi milliseconds thành số ngày và làm tròn xuống
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));

  // Lấy thẻ div có class "counter" và "dates"
  const counterElement = document.querySelector(".counter");
  const datesElement = document.querySelector(".dates");

  // Cập nhật nội dung của thẻ div
  counterElement.textContent = `${days}`;
  datesElement.textContent = `${formattedStartDate} - ${formattedCurrentDate}`;
}

// Gọi hàm để cập nhật counter ngay khi trang web được tải
updateCounterAndDate();

// Cập nhật counter mỗi ngày (nếu cần)
setInterval(updateCounter, 24 * 60 * 60 * 1000);
