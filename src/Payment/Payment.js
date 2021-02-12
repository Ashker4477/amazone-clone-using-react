import React, { useEffect, useState } from "react";
import "./Payment.css";
import { Link, useHistory } from "react-router-dom";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import { useStateValue } from "../StateProvider/StateProvider";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../Reducer/reducer";
import axios from "axios";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const history = useHistory();

  const stripe = useStripe();
  const elements = useElements();  

  const [succeeded, setSucceded] = useState(false);
  const [processing, setprocessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setclientsecret] = useState(true);

 useEffect(() => {
    //generate the special stripe secret which allows us to charge a customer
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        url: `/payment/create?total=${getBasketTotal(basket) * 100}`,
      });
      setclientsecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [basket])
  console.log('The Secret is>>',clientSecret);

  const handlesubmit = async (e) => {
    //do all the fancy stripe stuff
    e.preventDefault();
    setprocessing(true);
    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        }
      })
      .then(({ paymentIntent }) => {
        //paymentIntent = payment confirmation
        setSucceded(true);
        setError(null);
        setprocessing(false);

        history.replace("/orders");
      })
      .catch((err) => console.log(err));
  };

  const handlechange = (e) => {
    //Listen for changes in card Element
    //and display any errors as customer types their card details
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment_container">
        <h1>
          Checkout(
          <Link to="/checkout"> {basket?.length} items </Link>)
        </h1>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Delivery Address:</h3>
          </div>
          <div className="payment_address">
            <p>{user?.email}</p>
            <p>Palluruthy,MLA Road, Kochi-6</p>
            <p>Ernakulam,Kerala</p>
          </div>
        </div>

        <div className="payment_section">
          <div className="payment_title">
            <h3>Review Items And Delivery:</h3>
          </div>
          <div className="payment_items">
            {basket.map((item) => {
              return (
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  rating={item.rating}
                  price={item.price}
                />
              );
            })}
          </div>
        </div>

        <div className="payment_section">
          <div className="payment_title">
            <h3>Payment Method:</h3>
          </div>
          <div className="payment_details">
            <form onSubmit={handlesubmit}>
              <div className="payment_price_container">
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total: {value}</h3>}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeperator={true}
                  prefix={"$"}
                />
                <CardElement onChange={handlechange} className="card_element" />

                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
