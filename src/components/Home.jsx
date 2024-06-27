import React, { useState } from 'react';
import TypingEffect from './TypingEffect';

import "./Navbar.css";
import "./Home.css";
const Home = () => {

    return (
        
        <div>



            
            <header>
                <div className="header-content">
                <h1><TypingEffect /></h1>

                    <button className="book-now">Book Now!</button>
                </div>
            </header>

            <section id="sec-service">
    <div className="sec-service-inner">
        <h1>Rent a Car in just a few taps</h1>
        <p><span>Unlock cars 24/7</span> with your phone, and go!</p>
        <input type="text" id="input-location" value="Your City" />
       <div id="dates"> <input type="date" id="input-date-start" />
        <input type="date" id="input-date-end" /></div>
        <button className="btn" id="btn-service-search">Search</button>
    </div>
</section>


<section id="sec-offers">
    <h1>Latest Best Offers</h1>
    <section id="sec-offers-card">
        <div className="offer-card">
            <h2>SUZUKI</h2>
            <h2>Model</h2>
            <img src="offer-card.png" alt="" />
            <h2>DAILY</h2>
            <h2>Rs. <span>5000</span></h2>
            <h2>PER DAY</h2>
        </div>
        <div className="offer-card">
            <h2>SUZUKI</h2>
            <h2>Model</h2>
            <img src="offer-card.png" alt="" />
            <h2>DAILY</h2>
            <h2>Rs. <span>5000</span></h2>
            <h2>PER DAY</h2>
        </div>
        <div className="offer-card">
            <h2>SUZUKI</h2>
            <h2>Model</h2>
            <img src="offer-card.png" alt="" />
            <h2>DAILY</h2>
            <h2>Rs. <span>5000</span></h2>
            <h2>PER DAY</h2>
        </div>
        <div className="offer-card">
            <h2>SUZUKI</h2>
            <h2>Model</h2>
            <img src="offer-card.png" alt="" />
            <h2>DAILY</h2>
            <h2>Rs. <span>5000</span></h2>
            <h2>PER DAY</h2>
        </div>
        <div className="offer-card">
            <h2>SUZUKI</h2>
            <h2>Model</h2>
            <img src="offer-card.png" alt="" />
            <h2>DAILY</h2>
            <h2>Rs. <span>5000</span></h2>
            <h2>PER DAY</h2>
        </div>
        <div className="offer-card">
            <h2>SUZUKI</h2>
            <h2>Model</h2>
            <img src="offer-card.png" alt="" />
            <h2>DAILY</h2>
            <h2>Rs. <span>5000</span></h2>
            <h2>PER DAY</h2>
        </div>
    </section>
</section>

<section id="sec-experience">
    <h1>Latest Best Offers</h1>
    <section id="sec-experience-card">
        <div className="experience-card">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                    <path fillRule="evenodd" clipRule="evenodd"
                        d="M2 14.803v6.447c0 .414.336.75.75.75h1.614a.75.75 0 0 0 .74-.627L5.5 19h13l.395 2.373a.75.75 0 0 0 .74.627h1.615a.75.75 0 0 0 .75-.75v-6.447a5.954 5.954 0 0 0-1-3.303l-.78-1.17a1.994 1.994 0 0 1-.178-.33h.994a.75.75 0 0 0 .671-.415l.25-.5A.75.75 0 0 0 21.287 8H19.6l-.31-1.546a2.5 2.5 0 0 0-1.885-1.944C15.943 4.17 14.141 4 12 4c-2.142 0-3.943.17-5.405.51a2.5 2.5 0 0 0-1.886 1.944L4.399 8H2.714a.75.75 0 0 0-.67 1.085l.25.5a.75.75 0 0 0 .67.415h.995a1.999 1.999 0 0 1-.178.33L3 11.5c-.652.978-1 2.127-1 3.303zm15.961-4.799a4 4 0 0 0 .34.997H5.699c.157-.315.271-.65.34-.997l.632-3.157a.5.5 0 0 1 .377-.39C8.346 6.157 10 6 12 6c2 0 3.654.156 4.952.458a.5.5 0 0 1 .378.389l.631 3.157zM5.5 16a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM20 14.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
                        fill="#b8b8b8"></path>
                </g>
            </svg>
            <h2>Book Now</h2>
            <p>Choose your dates and reserve your exact EV. No Lines, no Wait, no back and forth with "Hosts"</p>
        </div>

        <div className="experience-card">
            <svg fill="#B8B8B8" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg" stroke="#B8B8B8">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                    <path
                        d="M12.5 15h13c.277 0 .5.223.5.5s-.223.5-.5.5h-13c-.277 0-.5-.223-.5-.5s.223-.5.5-.5zm0 3h13c.277 0 .5.223.5.5s-.223.5-.5.5h-13c-.277 0-.5-.223-.5-.5s.223-.5.5-.5zm0-6h13c.277 0 .5.223.5.5s-.223.5-.5.5h-13c-.277 0-.5-.223-.5-.5s.223-.5.5-.5zm-8-1c-.822 0-1.5.678-1.5 1.5v6c0 .822.678 1.5 1.5 1.5h4c.822 0 1.5-.678 1.5-1.5v-6c0-.822-.678-1.5-1.5-1.5zm0 1h4c.286 0 .5.214.5.5v6c0 .286-.214.5-.5.5h-4c-.286 0-.5-.214-.5-.5v-6c0-.286.214-.5.5-.5zm2-10c.277 0 .5.223.5.5v4c0 .277-.223.5-.5.5S6 6.777 6 6.5v-4c0-.277.223-.5.5-.5zm17 0c.277 0 .5.223.5.5v4c0 .277-.223.5-.5.5s-.5-.223-.5-.5v-4c0-.277.223-.5.5-.5zm-22 2C.678 4 0 4.678 0 5.5v20c0 .822.678 1.5 1.5 1.5h27c.822 0 1.5-.678 1.5-1.5v-20c0-.822-.678-1.5-1.5-1.5h-3c-.66 0-.664 1 0 1h3c.286 0 .5.214.5.5v20c0 .286-.214.5-.5.5h-27c-.286 0-.5-.214-.5-.5v-20c0-.286.214-.5.5-.5h3c.67 0 .654-1 0-1zm7 0c-.63 0-.683 1 0 1h13c.66 0 .66-1 0-1z">
                    </path>
                </g>
            </svg>
            <h2>Verify Instantly</h2>
            <p>After you book, we send you a link to verify your identity on the post</p>
        </div>

        <div className="experience-card">
    <svg viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink" fill="#B8B8B8">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
            <title>unlock-filled</title>
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="icon" fill="#B8B8B8" transform="translate(85.333333, 42.666667)">
                    <path d="M341.333333,426.666667 L341.333333,213.333333 L85.333333,213.333333 L85.333333,126.933333 C85.333333,80.59584 123.33568,42.6666667 170.666667,42.6666667 C217.9968,42.6666667 256,80.59584 256,126.933333 L298.666667,126.933333 C298.666667,56.6282667 241.156267,0 170.666667,0 C100.176853,0 42.6666667,56.6282667 42.6666667,126.933333 L42.6666667,213.333333 L0,213.333333 L0,426.666667 L341.333333,426.666667 Z"
                        id="unlocked"></path>
                </g>
            </g>
        </g>
    </svg>
    <h2>Arrive and Go</h2>
    <p>Receive your exact pickup instructions 1 hour before your start time, then get in and go! Always Contactless.</p>
</div>

    </section>


    
</section>


<section id="sec-cities">
    <h1>Cities We are Available</h1>
    <section id="sec-city-image">
        <div className="city-image">
            <img src="https://i.ibb.co/xf27tCV/gujrat.png" alt="" />
            <h2>Gujrat</h2>
        </div>
        <div className="city-image">
            <img src="https://i.ibb.co/QPvLV9j/wazirabad.png" alt="" />
            <h2>Wazirabad</h2>
        </div>
        <div className="city-image">
            <img src="https://i.ibb.co/gZnPwDn/lalamusa.png" alt="" />
            <h2>LalaMusa</h2>
        </div>
        <div className="city-image">
            <img src="https://i.ibb.co/hWbxsgw/kharian.jpg" alt="" />
            <h2>Kharian</h2>
        </div>
        <div className="city-image">
            <img src="https://i.ibb.co/GCf5kLL/lahore.png" alt="" />
            <h2>Lahore</h2>
        </div>
        <div className="city-image">
            <img id='jdhjdjd' src="https://i.ibb.co/qpbP8KK/islamabad.png" alt="" />
            <h2>Islamabad</h2>
        </div>
    </section>
</section>



<section id="sec-growth">
    <h1>Latest Best Offers</h1>
    <section id="sec-growth-card">
        <div className="growth-card">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#00802d" strokeWidth="1.68">
                <path d="M12 12V19M12 19L9.75 16.667M12 19L14.25 16.667M6.6 17.833C4.612 17.833 3 16.192 3 14.167C3 12.498 4.094 11.09 5.592 10.646C5.656 10.627 5.7 10.568 5.7 10.5C5.7 7.462 8.118 5 11.1 5C14.082 5 16.5 7.462 16.5 10.5C16.5 10.558 16.554 10.601 16.609 10.589C16.864 10.531 17.128 10.5 17.4 10.5C19.388 10.5 21 12.142 21 14.167C21 16.192 19.388 17.833 17.4 17.833" stroke="#00802d" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <h2>200K+</h2>
            <p>DOWNLOADS</p>
        </div>
        <div className="growth-card">
            <svg fill="#00802d" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.844 20H6.5C5.121 20 4 18.879 4 17.5S5.121 15 6.5 15h7c1.93 0 3.5-1.57 3.5-3.5S15.43 8 13.5 8H8.639a9.812 9.812 0 0 1-1.354 2H13.5c.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5h-7C4.019 13 2 15.019 2 17.5S4.019 22 6.5 22h9.593a10.415 10.415 0 0 1-1.249-2zM5 2C3.346 2 2 3.346 2 5c0 3.188 3 5 3 5s3-1.813 3-5c0-1.654-1.346-3-3-3zm0 4.5a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 5 6.5z" />
                <path d="M19 14c-1.654 0-3 1.346-3 3 0 3.188 3 5 3 5s3-1.813 3-5c0-1.654-1.346-3-3-3zm0 4.5a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 19 18.5z" />
            </svg>
            <h2>2M+</h2>
            <p>TRIPS</p>
        </div>
        <div className="growth-card">
            <svg fill="#00802d" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 260 241" enableBackground="new 0 0 260 241" xmlSpace="preserve">
                <polygon points="230.941,22.852 227.355,11.398 207.899,2.141 194.54,5.727 178.267,7.744 158.654,22.067 165.02,30.697 157.892,57.347 142.269,57.773 146.73,70.549 135.657,74.965 132.049,95.048 127.566,100.181 114.789,97.043 102.349,107.847 87.309,112.599 84.238,131.786 51.334,138.644 26.364,137.053 2,127.684 16.345,151.869 29.054,162.337 28.135,186.32 13.431,192.708 8.679,209.497 38.961,212.59 74.017,211.021 86.413,206.852 90.47,219.404 97.732,223.573 105.241,238.859 123.015,236.102 123.06,230.387 143.256,232.516 160.829,223.169 144.511,200.419 145.923,190.691 134.873,185.849 146.17,166.595 156.323,169.845 172.439,165.138 180.217,150.166 188.174,145.683 194.876,129.41 208.863,111.545 215.43,91.193 201.981,71.401 204.761,42.98 226.906,46.364 258,28.527" />
            </svg>
            <h2>6</h2>
            <p>CITIES</p>
        </div>
    </section>
</section>












          
        </div>
    );
};

export default Home;
