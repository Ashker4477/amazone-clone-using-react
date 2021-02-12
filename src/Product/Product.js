import React from "react";
import "./Product.css";
import StarRateIcon from "@material-ui/icons/StarRate";
import { useStateValue } from "../StateProvider/StateProvider";

function Product({ id, title, image, price, rating }) {

  const [{basket}, dispatch] = useStateValue();

  //console.log("this is basket>>>",basket);
  const addtobasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item:{ 
        id:id,
        title:title,
        image:image,
        price:price,
        rating:rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product_info">
        <p className='product_title'>{title}</p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => {
              return (
                <p>
                  <StarRateIcon />
                </p>
              );
            })}
        </div>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
      </div>
      <img src={image} alt="" />
      <button onClick={addtobasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
