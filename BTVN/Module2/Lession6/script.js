// const promise = new Promise((resolve, reject) => {
//     const isSuccess = true;
//     if (isSuccess) {
//         setTimeout(() => {
//             resolve("Success!");
//         }, 2000);
//     } else {
//         reject("Error occurred!");
//     }
// })

// promise
//     .then((message) => {
//         console.log("Promise resolved with message:", message);
//     })
//     .catch((error) => {
//         console.error("Promise rejected with error:", error);
//     })

// fetch("https://api.openweathermap.org/data/2.5/forecast?q=Hanoi&appid=09a71427c59d38d6a34f89b47d75975c&units=metric")
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(error => console.error("Fetch error:", error));

//Fetch trả về một Promise, vì vậy ta có thể sử dụng then/catch để xử lý kết quả hoặc lỗi

const getData = async (event) => {
  event.preventDefault();
  try {
    const city = document.getElementById("city").value;
    const apiKey = "09a71427c59d38d6a34f89b47d75975c";
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`
    );
    const data = await res.json();
    console.log(data);
    
    const result = document.getElementById("data-result");
    result.innerHTML = ""; 

    data.list.forEach((item) => {
    //   const milliseconds = item.dt * 1000;
    //   const date = new Date(milliseconds).toLocaleDateString();
      
      result.innerHTML += `
        <div class="card-header">
        <p><i class="bi bi-buildings"></i> Thành phố: ${data.city.name}</p>
        <p><i class="bi bi-globe"></i> Quốc gia: ${data.city.country}</p>
        <p><i class="bi bi-calendar3"></i> Ngày: ${item.dt_txt}</p>
        <p><i class="bi bi-thermometer-half"></i> Nhiệt độ trung bình: ${item.main.temp}°C</p>
        <p><i class="bi bi-thermometer-half"></i> Nhiệt độ cảm nhận: ${item.main.feels_like}°C</p>
        <p><i class="bi bi-cloud"></i> Thời tiết: ${item.weather[0].description}</p>
        </div>   
  `;
    });
  } catch (error) {
    console.error("Lỗi :", error);
  }
};
