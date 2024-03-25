import "./styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Section = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <div className="section-div">
      <div className="background">
        <div className="swan-banner-text-container">
          <div className="swan-banner-text">
            <p className="swan-banner-title swan-font-primary swan-font-weight-bold">
              My Name, My Pride
            </p>
            <div className="swan-banner-description">
              <div>
                <strong>100 Visiting Cards at Rs 190</strong>
              </div>
            </div>
            <div className="swan-banner-links">
              <a
                href="/business-cards"
                className="swan-button swan-button-skin-secondary swan-link"
              >
                Shop Now
              </a>
            </div>
          </div>
        </div>

        <div className="swan-banner-image ">
          <img
            src="https://cms.cloudinary.vpsvc.com/image/upload/c_scale,dpr_auto,f_auto,w_200/India%20LOB/NVHP/New%20Home%20Page/Testing/Static%20Page/18th%20Jan/IN_VC_ZIA-fashion_Marquee_01_Left"
            srcset="https://cms.cloudinary.vpsvc.com/image/upload/c_scale,dpr_auto,f_auto,w_200/India%20LOB/NVHP/New%20Home%20Page/Testing/Static%20Page/18th%20Jan/IN_VC_ZIA-fashion_Marquee_01_Left 400w, https://cms.cloudinary.vpsvc.com/image/upload/c_scale,dpr_auto,f_auto,w_400/India%20LOB/NVHP/New%20Home%20Page/Testing/Static%20Page/18th%20Jan/IN_VC_ZIA-fashion_Marquee_01_Left 800w, https://cms.cloudinary.vpsvc.com/image/upload/c_scale,dpr_auto,f_auto,w_960/India%20LOB/NVHP/New%20Home%20Page/Testing/Static%20Page/18th%20Jan/IN_VC_ZIA-fashion_Marquee_01_Left 1920w"
            alt=""
            data-testid="banner-secondary-image'"
            loading="eager"
            className="swan-fluid-image"
          />
        </div>
      </div>
      <div className="categories">
        <div className="heading">
          <h1
            id="Explore all categories-undefined"
            className="swan-heading swan-text-5 swan-font-weight-bold"
          >
            Explore all categories
          </h1>
        </div>
        <div className="categories-images">
          <Slider {...settings}>
            <div className="cat-image-details">
              <div>
                <img
                  src="/assets/first-row/1.webp"
                  alt="first-image"
                  className="cat-image"
                />
              </div>

              <div className="swan-text-xm1 swan-font-weight-bold">
                Visiting Cards
              </div>
            </div>
            <div className="cat-image-details">
              <div>
                <img
                  src="/assets/first-row/2.webp"
                  alt="second-image"
                  className="cat-image"
                />
              </div>

              <div className="swan-text-xm1 swan-font-weight-bold">
                Clothing & Bags
              </div>
            </div>
            <div className="cat-image-details">
              <div>
                <img
                  src="/assets/first-row/3.webp"
                  alt="third-image"
                  className="cat-image"
                />
              </div>

              <div className="swan-text-xm1 swan-font-weight-bold">
                Custom Polo T-shirts
              </div>
            </div>
            <div className="cat-image-details">
              <div>
                <img
                  src="/assets/first-row/4.webp"
                  alt="fourth-image"
                  className="cat-image"
                />
              </div>

              <div className="swan-text-xm1 swan-font-weight-bold">
                Custom T-shirts
              </div>
            </div>
            <div className="cat-image-details">
              <div>
                <img
                  src="/assets/first-row/5.webp"
                  alt="fifth-image"
                  className="cat-image"
                />
              </div>

              <div className="swan-text-xm1 swan-font-weight-bold">
                Custom Caps
              </div>
            </div>
            <div className="cat-image-details">
              <div>
                <img
                  src="/assets/first-row/6.webp"
                  alt="sixth-image"
                  className="cat-image"
                />
              </div>

              <div className="swan-text-xm1 swan-font-weight-bold">
                Posters & Marketing
              </div>
            </div>
            <div className="cat-image-details">
              <div>
                <img
                  src="/assets/first-row/7.webp"
                  alt="seventh-image"
                  className="cat-image"
                />
              </div>

              <div className="swan-text-xm1 swan-font-weight-bold">
                Stamps & Ink
              </div>
            </div>
            <div className="cat-image-details">
              <div>
                <img
                  src="/assets/first-row/8.webp"
                  alt="eighth-image"
                  className="cat-image"
                />
              </div>

              <div className="swan-text-xm1 swan-font-weight-bold">
                Custom Stationery
              </div>
            </div>
          </Slider>
        </div>
      </div>
      <div className="popular-products">
        <div className="title-popular">
          <h1 className="swan-heading">Our Most Popular Products</h1>
        </div>
        <div className="popular-all-cards">
          <Slider {...settings}>
            <div className="popular-cards">
              <div className="image-popular">
                <img
                  src="assets/second-row/1.webp"
                  height="189px"
                  width="189px"
                />
              </div>
              <div className="popular-contents">
                <div className="name">Visiting Cards</div>
                <div className="arrow">
                  <span className="material-symbols-outlined">
                    arrow_forward
                  </span>
                </div>
              </div>
            </div>
            <div className="popular-cards">
              <div className="image-popular">
                <img
                  src="assets/second-row/2.webp"
                  height="189px"
                  width="189px"
                />
              </div>
              <div className="popular-contents">
                <div className="name">Custom Polo T-shirts</div>
                <div className="arrow">
                  <span className="material-symbols-outlined">
                    arrow_forward
                  </span>
                </div>
              </div>
            </div>
            <div className="popular-cards">
              <div className="image-popular">
                <img
                  src="assets/second-row/3.webp"
                  height="189px"
                  width="189px"
                />
              </div>
              <div className="popular-contents">
                <div className="name">Custom T-shirts</div>
                <div className="arrow">
                  <span className="material-symbols-outlined">
                    arrow_forward
                  </span>
                </div>
              </div>
            </div>
            <div className="popular-cards">
              <div className="image-popular">
                <img
                  src="assets/second-row/4.webp"
                  height="189px"
                  width="189px"
                />
              </div>
              <div className="popular-contents">
                <div className="name">Custom Stamps & Ink</div>
                <div className="arrow">
                  <span className="material-symbols-outlined">
                    arrow_forward
                  </span>
                </div>
              </div>
            </div>
            <div className="popular-cards">
              <div className="image-popular">
                <img
                  src="assets/second-row/5.webp"
                  height="189px"
                  width="189px"
                />
              </div>
              <div className="popular-contents">
                <div className="name">Photo Albums</div>
                <div className="arrow">
                  <span className="material-symbols-outlined">
                    arrow_forward
                  </span>
                </div>
              </div>
            </div>
            <div className="popular-cards">
              <div className="image-popular">
                <img
                  src="assets/second-row/6.webp"
                  height="189px"
                  width="189px"
                />
              </div>
              <div className="popular-contents">
                <div className="name">Letterheads</div>
                <div className="arrow">
                  <span className="material-symbols-outlined">
                    arrow_forward
                  </span>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Section;
