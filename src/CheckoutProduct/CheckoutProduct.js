import React from "react";
import StarRateIcon from "@material-ui/icons/StarRate";
import "./CheckoutProduct.css"
import { useStateValue } from "../StateProvider/StateProvider";

function CheckoutProduct({ id, image, title, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();
    const removefrombasket = ()=>{
           dispatch({
              type:"REMOVE_FROM_BASKET",
              id:id, 
           });
    }
  return (
    <div className="checkoutproduct">
      <img className="checkoutproduct_image" src={image} alt="" />
      <div className="checkoutproduct_info">
        <p className="checkoutproduct_title">{title}</p>
        <p className="checkoutproduct_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutproduct_rating">
          {Array(rating)
            .fill()
            .map((_,i) => (
              <p>
                <StarRateIcon />
              </p>
            ))}
        </div>
        <button onClick={removefrombasket}>Remove from basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
