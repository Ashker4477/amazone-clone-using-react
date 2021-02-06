import React from "react";
import "./Home.css";
import Product from "../Product/Product";

function Home() {
  return (
    <div className="home">
      <div className="home_Container">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
          className="home_image"
          alt="errorr"
        />

        <div className="home__row">
          <Product
            id="121"
            title="Queen Mattress, Novilla 10 inch Gel Memory Foam Queen Size Mattress for Cool Sleep & Pressure Relief, Medium Firm Bed Mattresses, Bliss"
            image="https://m.media-amazon.com/images/I/71bH8kdkQmL._AC_UL320_.jpg"
            price={29.99}
            rating={5}
          />
          <Product
            id="122"
            title="New Apple iPhone 12 Pro (512GB, Pacific Blue) [Locked] + Carrier Subscription"
            image="https://m.media-amazon.com/images/I/71DVgBTdyLL._AC_UY218_.jpg"
            price={8.99}
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="123"
            title="Lenovo Tab M8 Tablet, 8' HD Android Tablet, Quad-Core Processor, 2GHz, 16GB Storage, Full Metal Cover, Long Battery Life, Android 9 Pie, ZA5G0102US, Slate Black"
            image="https://m.media-amazon.com/images/I/71xqSzI2YlL._AC_UY218_.jpg"
            price={89.99}
            rating={5}
          />
          <Product
            id="124"
            title=" Simple Mobile Samsung Galaxy A10e 4G LTE Prepaid Smartphone (Locked) - Black - 32GB - SIM Card Included - GSM"
            image="https://m.media-amazon.com/images/I/81+cdd8NQtL._AC_UY218_.jpg"
            price={5}
            rating={3}
          />
          <Product
            id="125"
            title="Lenovo Legion 5 Gaming Laptop, 15.6'FHD (1920x1080) IPS Screen, AMD Ryzen 7 4800H Processor, Windows 10, 82B1000AUS"
            image="https://m.media-amazon.com/images/I/81w+3k4U8PL._AC_UY218_.jpg"
            price={10.99}
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="126"
            title="SAMSUNG QN32Q50RAFXZA Flat 32' QLED 4K 32Q50 Series Smart TV"
            image="https://m.media-amazon.com/images/I/51NKhnjhpGL._AC_UY218_.jpg"
            price={50.0}
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
