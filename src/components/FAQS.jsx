import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper/modules';
import Faqs from './Reviews/Faqs';
import './FAQS.css'; 

function FAQS() {
  return (

    <>

    <div className="slider-container">
      <Swiper
       modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: true,
        }}
        slidesPerView={2}
        spaceBetween={20}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        breakpoints={{
          100: {
            slidesPerView: 1,
          },
          668: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        onSlideChange={(swiper) => console.log('slide change', swiper)}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
        <div className="review-card">
      <div className="review-content">
        <div className="stars">⭐⭐⭐⭐⭐</div>
        <div className="g-logo">
          <svg
            width="20"
            height="20"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            card-type="media"
          >
            <g clipPath="url(#google-logo)">
              <path
                d="M3.54594 9.66899L2.989 11.7481L0.953406 11.7912C0.345063 10.6628 0 9.37186 0 7.99999C0 6.67339 0.322625 5.42239 0.8945 4.32086H0.894937L2.70719 4.65311L3.50106 6.45449C3.33491 6.93889 3.24434 7.45889 3.24434 7.99999C3.24441 8.58724 3.35078 9.14989 3.54594 9.66899Z"
                fill="#fbbb00"
              ></path>
              <path
                d="M15.8602 6.50552C15.9521 6.98946 16 7.48924 16 8.00002C16 8.57277 15.9398 9.13146 15.8251 9.67037C15.4357 11.5042 14.4181 13.1055 13.0084 14.2387L13.008 14.2383L10.7253 14.1218L10.4023 12.1051C11.3377 11.5565 12.0687 10.6981 12.4537 9.67037H8.1759V6.50552H12.5161H15.8602Z"
                fill="#518ef8"
              ></path>
              <path
                d="M13.008 14.2382L13.0084 14.2387C11.6375 15.3406 9.8959 16 8.00009 16C4.95349 16 2.30471 14.2971 0.953491 11.7912L3.54602 9.66901C4.22162 11.4721 5.96096 12.7556 8.00009 12.7556C8.87655 12.7556 9.69768 12.5187 10.4023 12.105L13.008 14.2382Z"
                fill="#28b446"
              ></path>
              <path
                d="M13.1064 1.84175L10.5147 3.9635C9.7855 3.50769 8.9235 3.24437 8 3.24437C5.91472 3.24437 4.14284 4.58678 3.50109 6.4545L0.894938 4.32087H0.894501C2.22594 1.75384 4.90813 0 8 0C9.94109 0 11.7209 0.691437 13.1064 1.84175Z"
                fill="#f14336"
              ></path>
            </g>
            <defs>
              <clipPath id="google-logo">
                <rect width="16" height="16" fill="#ffffff"></rect>
              </clipPath>
            </defs>
          </svg>
        </div>
        <p>Effortless booking process, impeccable car condition, outstanding service.</p>
        <div className="reviewer" style={{ fontWeight: 'bold' }}>Linda a</div>
        <div className="reviewer">Two months ago</div>
        <div className="profile-img">
          <img
            width="30px"
            style={{ borderRadius: '50%' }}
            src="4.jpg"
            alt="profile picture"
          />
        </div>
      </div>
    </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="review-card">
      <div className="review-content">
        <div className="stars">⭐⭐⭐⭐⭐</div>
        <div className="g-logo">
          <svg
            width="20"
            height="20"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            card-type="media"
          >
            <g clipPath="url(#google-logo)">
              <path
                d="M3.54594 9.66899L2.989 11.7481L0.953406 11.7912C0.345063 10.6628 0 9.37186 0 7.99999C0 6.67339 0.322625 5.42239 0.8945 4.32086H0.894937L2.70719 4.65311L3.50106 6.45449C3.33491 6.93889 3.24434 7.45889 3.24434 7.99999C3.24441 8.58724 3.35078 9.14989 3.54594 9.66899Z"
                fill="#fbbb00"
              ></path>
              <path
                d="M15.8602 6.50552C15.9521 6.98946 16 7.48924 16 8.00002C16 8.57277 15.9398 9.13146 15.8251 9.67037C15.4357 11.5042 14.4181 13.1055 13.0084 14.2387L13.008 14.2383L10.7253 14.1218L10.4023 12.1051C11.3377 11.5565 12.0687 10.6981 12.4537 9.67037H8.1759V6.50552H12.5161H15.8602Z"
                fill="#518ef8"
              ></path>
              <path
                d="M13.008 14.2382L13.0084 14.2387C11.6375 15.3406 9.8959 16 8.00009 16C4.95349 16 2.30471 14.2971 0.953491 11.7912L3.54602 9.66901C4.22162 11.4721 5.96096 12.7556 8.00009 12.7556C8.87655 12.7556 9.69768 12.5187 10.4023 12.105L13.008 14.2382Z"
                fill="#28b446"
              ></path>
              <path
                d="M13.1064 1.84175L10.5147 3.9635C9.7855 3.50769 8.9235 3.24437 8 3.24437C5.91472 3.24437 4.14284 4.58678 3.50109 6.4545L0.894938 4.32087H0.894501C2.22594 1.75384 4.90813 0 8 0C9.94109 0 11.7209 0.691437 13.1064 1.84175Z"
                fill="#f14336"
              ></path>
            </g>
            <defs>
              <clipPath id="google-logo">
                <rect width="16" height="16" fill="#ffffff"></rect>
              </clipPath>
            </defs>
          </svg>
        </div>
        <p>
        Smooth booking experience, pristine car condition, exceptional service.
        </p>
        <div className="reviewer" style={{ fontWeight: 'bold' }}>jonathon</div>
        <div className="reviewer">a Week ago</div>
        <div className="profile-img">
          <img
            width="40px"
            style={{ borderRadius: '50%' }}
            src="3.jpg"
            alt="profile picture"
          />
        </div>
      </div>
    </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="review-card">
      <div className="review-content">
        <div className="stars">⭐⭐⭐⭐⭐</div>
        <div className="g-logo">
          <svg
            width="20"
            height="20"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            card-type="media"
          >
            <g clipPath="url(#google-logo)">
              <path
                d="M3.54594 9.66899L2.989 11.7481L0.953406 11.7912C0.345063 10.6628 0 9.37186 0 7.99999C0 6.67339 0.322625 5.42239 0.8945 4.32086H0.894937L2.70719 4.65311L3.50106 6.45449C3.33491 6.93889 3.24434 7.45889 3.24434 7.99999C3.24441 8.58724 3.35078 9.14989 3.54594 9.66899Z"
                fill="#fbbb00"
              ></path>
              <path
                d="M15.8602 6.50552C15.9521 6.98946 16 7.48924 16 8.00002C16 8.57277 15.9398 9.13146 15.8251 9.67037C15.4357 11.5042 14.4181 13.1055 13.0084 14.2387L13.008 14.2383L10.7253 14.1218L10.4023 12.1051C11.3377 11.5565 12.0687 10.6981 12.4537 9.67037H8.1759V6.50552H12.5161H15.8602Z"
                fill="#518ef8"
              ></path>
              <path
                d="M13.008 14.2382L13.0084 14.2387C11.6375 15.3406 9.8959 16 8.00009 16C4.95349 16 2.30471 14.2971 0.953491 11.7912L3.54602 9.66901C4.22162 11.4721 5.96096 12.7556 8.00009 12.7556C8.87655 12.7556 9.69768 12.5187 10.4023 12.105L13.008 14.2382Z"
                fill="#28b446"
              ></path>
              <path
                d="M13.1064 1.84175L10.5147 3.9635C9.7855 3.50769 8.9235 3.24437 8 3.24437C5.91472 3.24437 4.14284 4.58678 3.50109 6.4545L0.894938 4.32087H0.894501C2.22594 1.75384 4.90813 0 8 0C9.94109 0 11.7209 0.691437 13.1064 1.84175Z"
                fill="#f14336"
              ></path>
            </g>
            <defs>
              <clipPath id="google-logo">
                <rect width="16" height="16" fill="#ffffff"></rect>
              </clipPath>
            </defs>
          </svg>
        </div>
        <p>
        Efficient booking, flawless car condition, top-notch service. Highly recommended!
        </p>
        <div className="reviewer" style={{ fontWeight: 'bold' }}>Maria</div>
        <div className="reviewer">Two weeks ago</div>
        <div className="profile-img">
          <img
            width="40px"
            style={{ borderRadius: '50%' }}
            src="2.jpg"
            alt="profile picture"
          />
        </div>
      </div>
    </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="review-card">
      <div className="review-content">
        <div className="stars">⭐⭐⭐⭐⭐</div>
        <div className="g-logo">
          <svg
            width="20"
            height="20"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            card-type="media"
          >
            <g clipPath="url(#google-logo)">
              <path
                d="M3.54594 9.66899L2.989 11.7481L0.953406 11.7912C0.345063 10.6628 0 9.37186 0 7.99999C0 6.67339 0.322625 5.42239 0.8945 4.32086H0.894937L2.70719 4.65311L3.50106 6.45449C3.33491 6.93889 3.24434 7.45889 3.24434 7.99999C3.24441 8.58724 3.35078 9.14989 3.54594 9.66899Z"
                fill="#fbbb00"
              ></path>
              <path
                d="M15.8602 6.50552C15.9521 6.98946 16 7.48924 16 8.00002C16 8.57277 15.9398 9.13146 15.8251 9.67037C15.4357 11.5042 14.4181 13.1055 13.0084 14.2387L13.008 14.2383L10.7253 14.1218L10.4023 12.1051C11.3377 11.5565 12.0687 10.6981 12.4537 9.67037H8.1759V6.50552H12.5161H15.8602Z"
                fill="#518ef8"
              ></path>
              <path
                d="M13.008 14.2382L13.0084 14.2387C11.6375 15.3406 9.8959 16 8.00009 16C4.95349 16 2.30471 14.2971 0.953491 11.7912L3.54602 9.66901C4.22162 11.4721 5.96096 12.7556 8.00009 12.7556C8.87655 12.7556 9.69768 12.5187 10.4023 12.105L13.008 14.2382Z"
                fill="#28b446"
              ></path>
              <path
                d="M13.1064 1.84175L10.5147 3.9635C9.7855 3.50769 8.9235 3.24437 8 3.24437C5.91472 3.24437 4.14284 4.58678 3.50109 6.4545L0.894938 4.32087H0.894501C2.22594 1.75384 4.90813 0 8 0C9.94109 0 11.7209 0.691437 13.1064 1.84175Z"
                fill="#f14336"
              ></path>
            </g>
            <defs>
              <clipPath id="google-logo">
                <rect width="16" height="16" fill="#ffffff"></rect>
              </clipPath>
            </defs>
          </svg>
        </div>
        <p>
          Seamless booking, perfect car condition, top-notch service. Highly
          recommend!.
        </p>
        <div className="reviewer" style={{ fontWeight: 'bold' }}>Joseph</div>
        <div className="reviewer">Three weeks ago</div>
        <div className="profile-img">
          <img
            width="40px"
            style={{ borderRadius: '50%' }}
            src="1.jpg"
            alt="profile picture"
          />
        </div>
      </div>
    </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="review-card">
      <div className="review-content">
        <div className="stars">⭐⭐⭐⭐⭐</div>
        <div className="g-logo">
          <svg
            width="20"
            height="20"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            card-type="media"
          >
            <g clipPath="url(#google-logo)">
              <path
                d="M3.54594 9.66899L2.989 11.7481L0.953406 11.7912C0.345063 10.6628 0 9.37186 0 7.99999C0 6.67339 0.322625 5.42239 0.8945 4.32086H0.894937L2.70719 4.65311L3.50106 6.45449C3.33491 6.93889 3.24434 7.45889 3.24434 7.99999C3.24441 8.58724 3.35078 9.14989 3.54594 9.66899Z"
                fill="#fbbb00"
              ></path>
              <path
                d="M15.8602 6.50552C15.9521 6.98946 16 7.48924 16 8.00002C16 8.57277 15.9398 9.13146 15.8251 9.67037C15.4357 11.5042 14.4181 13.1055 13.0084 14.2387L13.008 14.2383L10.7253 14.1218L10.4023 12.1051C11.3377 11.5565 12.0687 10.6981 12.4537 9.67037H8.1759V6.50552H12.5161H15.8602Z"
                fill="#518ef8"
              ></path>
              <path
                d="M13.008 14.2382L13.0084 14.2387C11.6375 15.3406 9.8959 16 8.00009 16C4.95349 16 2.30471 14.2971 0.953491 11.7912L3.54602 9.66901C4.22162 11.4721 5.96096 12.7556 8.00009 12.7556C8.87655 12.7556 9.69768 12.5187 10.4023 12.105L13.008 14.2382Z"
                fill="#28b446"
              ></path>
              <path
                d="M13.1064 1.84175L10.5147 3.9635C9.7855 3.50769 8.9235 3.24437 8 3.24437C5.91472 3.24437 4.14284 4.58678 3.50109 6.4545L0.894938 4.32087H0.894501C2.22594 1.75384 4.90813 0 8 0C9.94109 0 11.7209 0.691437 13.1064 1.84175Z"
                fill="#f14336"
              ></path>
            </g>
            <defs>
              <clipPath id="google-logo">
                <rect width="16" height="16" fill="#ffffff"></rect>
              </clipPath>
            </defs>
          </svg>
        </div>
        <p>
        Seamless reservation, excellent car condition, superb service. Highly recommend!
        </p>
        <div className="reviewer" style={{ fontWeight: 'bold' }}>Franklin</div>
        <div className="reviewer">a month ago</div>
        <div className="profile-img">
          <img
            width="40px"
            style={{ borderRadius: '50%' }}
            src="5.jpg"
            alt="profile picture"
          />
        </div>
      </div>
    </div>
        </SwiperSlide>

      </Swiper>

      <button className="swiper-button-prev"></button>
      <button className="swiper-button-next"></button>
    </div>

    <Faqs/>
    </>
  );
}

export default FAQS;
