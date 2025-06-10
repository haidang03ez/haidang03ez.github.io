import React from "react";
import "./style.css";

export const HomePage = () => {
  const restaurants = [
    {
      name: "Pizza Hut Delicious Pizza",
      img: "https://superprops-next.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fsrc%2Fcommon%2Fassets%2Fimage%2FfoodDelivery%2Favailable-restaurant-1.5923122052b56e99088735cd4577e248.png&w=640&q=75",
      address: "",
      tags: ["American", "Fast Food", "Burgers"],
    },
    {
      name: "Chipotle Mexican Grill (2675 Geary Boulevard)",
      img: "https://superprops-next.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fsrc%2Fcommon%2Fassets%2Fimage%2FfoodDelivery%2Favailable-restaurant-2.f1e554b8628c824d032c38cf312c9080.png&w=640&q=75",
      address: "",
      tags: ["American", "Fast Food", "Burgers"],
    },
    {
      name: "McDonald's® Burgers (Fillmore)",
      img: "https://superprops-next.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fsrc%2Fcommon%2Fassets%2Fimage%2FfoodDelivery%2Favailable-restaurant-3.e5409d8ffc05735772125f458f68b6d2.png&w=640&q=75",
      address: "",
      tags: ["American", "Fast Food", "Burgers"],
    },
    {
      name: "The Baked Bear San Francisco",
      img: "https://superprops-next.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fsrc%2Fcommon%2Fassets%2Fimage%2FfoodDelivery%2Favailable-restaurant-4.d2320f9a227d164ab7830873d0775597.png&w=640&q=75",
      address: "",
      tags: ["American", "Fast Food", "Burgers"],
    },
    {
      name: "Shake Shack (3060 Fillmore Street)",
      img: "https://superprops-next.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fsrc%2Fcommon%2Fassets%2Fimage%2FfoodDelivery%2Favailable-restaurant-5.78a3adde3a483b2bd0885d21954d9e43.png&w=640&q=75",
      address: "",
      tags: ["American", "Fast Food", "Burgers"],
    },
    {
      name: "Chubby Noodle Chinese Takeout",
      img: "https://superprops-next.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fsrc%2Fcommon%2Fassets%2Fimage%2FfoodDelivery%2Favailable-restaurant-6.0840de1972017dbeb9cbad4e111d7e4a.png&w=640&q=75",
      address: "",
      tags: ["American", "Fast Food", "Burgers"],
    },
  ];

  return (
    <>
      {/* banner-section */}
      <section className="banner-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <h1 className="fw-bold display-5 mb-3">
                Your favorite food,
                <br />
                delivered your home
              </h1>
              <p className="text-secondary mb-4">
                Food, drinks, groceries, and more available for delivery and
                pickup.
              </p>

              <div className="input-group mb-3" style={{ maxWidth: "500px" }}>
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Enter your address.."
                />
                <button className="btn btn-dark px-4" type="button">
                  ➔
                </button>
              </div>

              <p className="mb-2 text-muted">Apps Available to download on</p>
              <div className="d-flex">
                <a
                  href="#"
                  className="btn btn-outline-dark me-3 d-flex align-items-center px-3 py-2"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                    alt="Apple"
                    style={{ width: "20px", marginRight: "8px" }}
                  />
                  <span>
                    <small>Download on the</small>
                    <br />
                    <strong>App Store</strong>
                  </span>
                </a>
                <a
                  href="#"
                  className="btn btn-outline-dark d-flex align-items-center px-3 py-2"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                    alt="Google Play"
                    style={{ width: "20px", marginRight: "8px" }}
                  />
                  <span>
                    <small>Download on the</small>
                    <br />
                    <strong>Google Play</strong>
                  </span>
                </a>
              </div>
            </div>

            <div className="col-md-6">
              <img
                src="https://superprops-next.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fsrc%2Fcommon%2Fassets%2Fimage%2FfoodDelivery%2Fbanner-1.8bbc07b6c9e491eec1addaedabfe37d0.png&w=750&q=75"
                alt="Delivery Guy"
                className="banner-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* restaurant-section */}
      <section className="restaurant-section">
        <h2 className="text-center fw-bold mb-4">
          Available Restaurant Nearby Area
        </h2>
        <div className="row">
          {restaurants.map((res, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card border-0 shadow-sm h-100">
                <img
                  src={res.img}
                  alt={res.name}
                  className="card-img-top"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h6 className="fw-semibold">{res.name}</h6>
                  <p className="text-muted mb-0" style={{ fontSize: "0.9rem" }}>
                    {res.tags.join(" • ")}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          <button className="btn btn-success px-4 py-2">
            Discover More <span className="ms-1">➜</span>
          </button>
        </div>
      </section>
    </>
  );
};
