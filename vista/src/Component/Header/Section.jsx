import React from "react";
import "./styles.css";
const Section = () => {
  return (
    <div>
      <div className="background">
        <div class="swan-banner-text-container">
          <div class="swan-banner-text">
            <p class="swan-banner-title swan-font-primary swan-font-weight-bold">
              My Name, My Pride
            </p>
            <div class="swan-banner-description">
              <div>
                <strong>100 Visiting Cards at Rs 190</strong>
              </div>
            </div>
            <div class="swan-banner-links">
              <a
                href="/business-cards"
                class="swan-button swan-button-skin-secondary swan-link"
              >
                Shop Now
              </a>
            </div>
          </div>
        </div>

        <div class="swan-banner-image ">
          <img
            src="https://cms.cloudinary.vpsvc.com/image/upload/c_scale,dpr_auto,f_auto,w_200/India%20LOB/NVHP/New%20Home%20Page/Testing/Static%20Page/18th%20Jan/IN_VC_ZIA-fashion_Marquee_01_Left"
            srcset="https://cms.cloudinary.vpsvc.com/image/upload/c_scale,dpr_auto,f_auto,w_200/India%20LOB/NVHP/New%20Home%20Page/Testing/Static%20Page/18th%20Jan/IN_VC_ZIA-fashion_Marquee_01_Left 400w, https://cms.cloudinary.vpsvc.com/image/upload/c_scale,dpr_auto,f_auto,w_400/India%20LOB/NVHP/New%20Home%20Page/Testing/Static%20Page/18th%20Jan/IN_VC_ZIA-fashion_Marquee_01_Left 800w, https://cms.cloudinary.vpsvc.com/image/upload/c_scale,dpr_auto,f_auto,w_960/India%20LOB/NVHP/New%20Home%20Page/Testing/Static%20Page/18th%20Jan/IN_VC_ZIA-fashion_Marquee_01_Left 1920w"
            alt=""
            data-testid="banner-secondary-image'"
            loading="eager"
            class="swan-fluid-image"
          />
        </div>
      </div>
      <div className="categories">
        <div className="heading">
          <h1
            id="Explore all categories-undefined"
            class="swan-heading swan-text-5 swan-font-weight-bold"
          >
            Explore all categories
          </h1>
        </div>
        <div className="categories-images">
          <div className="cat-image-details">
            <img
              src="/assets/first-row/1.webp"
              alt="first-image"
              className="cat-image"
            />
            <div class="swan-text-xm1 swan-font-weight-bold">
              Visiting Cards
            </div>
          </div>
          <div className="cat-image-details">
            <img
              src="/assets/first-row/2.webp"
              alt="second-image"
              className="cat-image"
            />
            <div class="swan-text-xm1 swan-font-weight-bold">
              Clothing & Bags
            </div>
          </div>
          <div className="cat-image-details">
            <img
              src="/assets/first-row/3.webp"
              alt="third-image"
              className="cat-image"
            />
            <div class="swan-text-xm1 swan-font-weight-bold">
              Custom Polo T-shirts
            </div>
          </div>
          <div className="cat-image-details">
            <img
              src="/assets/first-row/4.webp"
              alt="fourth-image"
              className="cat-image"
            />
            <div class="swan-text-xm1 swan-font-weight-bold">
              Custom T-shirts
            </div>
          </div>
          <div className="cat-image-details">
            <img
              src="/assets/first-row/5.webp"
              alt="fifth-image"
              className="cat-image"
            />
            <div class="swan-text-xm1 swan-font-weight-bold">Custom Caps</div>
          </div>
          <div className="cat-image-details">
            <img
              src="/assets/first-row/6.webp"
              alt="sixth-image"
              className="cat-image"
            />
            <div class="swan-text-xm1 swan-font-weight-bold">
              Posters & Marketing
            </div>
          </div>
          <div className="cat-image-details">
            <img
              src="/assets/first-row/7.webp"
              alt="seventh-image"
              className="cat-image"
            />
            <div class="swan-text-xm1 swan-font-weight-bold">Stamps & Ink</div>
          </div>
          <div className="cat-image-details">
            <img
              src="/assets/first-row/8.webp"
              alt="eighth-image"
              className="cat-image"
            />
            <div class="swan-text-xm1 swan-font-weight-bold">
              Custom Stationery
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;