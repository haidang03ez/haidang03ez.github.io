import React from "react";
import { Header } from "../component/headerComponent/Header";
import { Banner } from "../component/BannerComponent/Banner";
import { Footer } from "../component/FooterComponent/Footer";
import { CartItem } from "../component/CartItem/CartItem";

export const HomeScreen = () => {
  const restaurant = [
    {
      id: 1,
      title: "Bún bò Huế",
      origin: "Nóng hổi, chuẩn vị miền Trung",
      image: "https://source.unsplash.com/400x300/?bunbohue",
      category: "Miền Trung",
    },
    {
      id: 2,
      title: "Cơm tấm sườn",
      origin: "Món đặc trưng Sài Gòn",
      image: "https://source.unsplash.com/400x300/?comtam",
      category: "Miền Nam",
    },
    {
      id: 3,
      title: "Phở bò tái",
      origin: "Tinh hoa ẩm thực Hà Nội",
      image: "https://source.unsplash.com/400x300/?pho",
      category: "Miền Bắc",
    },
  ];
  return (
    <>
      <Header brandName="HaiDang Restaurant" />
      <Banner bannerText="Food, drinks, groceries, and more available for delivery and pickup." />

      <div className="container my-5">
        <h2 className="mb-4">Danh sách món ăn nổi bật</h2>
        <div className="row g-4">
          {restaurant.map((item) => (
            <div className="col-md-4" key={item.id}>
              <CartItem
                title={item.title}
                origin={item.origin}
                image={item.image}
                category={item.category}
              />
            </div>
          ))}
        </div>
      </div>
      
      <Footer companyName="Hải Đăng LTD" brandName="HaiDang Restaurant" />
    </>
  );
};
