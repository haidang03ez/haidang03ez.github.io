import React from "react";
import "./Banner.css";

export const Banner = ({ bannerText = "banner-text"}) => {
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
                {bannerText}
              </p>

              <div className="input-group mb-3" style={{ maxWidth: "500px" }}>
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Enter your address.."
                />
                <button className="btn btn-dark px-4" type="button">
                  <i className="bi bi-telephone-fill me-2"></i>
                </button>
              </div>

              <p className="mb-2 text-muted">Apps available to download on</p>
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
    </>
  );
};
