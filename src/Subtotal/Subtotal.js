import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../StateProvider/StateProvider";
import { getBasketTotal } from "../Reducer/reducer";
import { useHistory } from "react-router-dom";

function Subtotal() {
  const [{ basket, user }, dispatch] = useStateValue();
  const history = useHistory();
  const proced = (e) => {
    e.preventDefault();
    if (!user) {
      history.push("/login");
    } else {
      history.push("/payment");
    }
  };
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal({basket.length} items):<strong>{value}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeperator={true}
        prefix={"$"}
      />
      <button onClick={proced}>Procced to checkout</button>
    </div>
  );
}

export default Subtotal;
