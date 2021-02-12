import React from "react";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import { useStateValue } from "../StateProvider/StateProvider";
import Subtotal from "../Subtotal/Subtotal";
import "./Checkout.css";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/VG-2019Dec/Media-Vgsw/1500-X-600-BB-FEB._CB659564401_.jpg"
          alt=""
        />
        <h3>Hello: {user?.email}</h3>
        <h1>Your Shopping Basket</h1>
        {basket.map((item) => (
          <CheckoutProduct
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
          />
        ))}
      </div>
      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
