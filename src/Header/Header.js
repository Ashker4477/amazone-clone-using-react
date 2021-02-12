import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./Header.css";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider/StateProvider";
import { auth } from "../Firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="header">
      <Link to="/">
        <div className="header_logo_">
          <img
            className="header_logo"
            src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG"
            alt=""
          />
        </div>
      </Link>

      <div className="header_search">
        <input type="text" className="header_searchInput"></input>
        <SearchIcon className="header_SearchIcon" />
      </div>
      <div className="header_nav">
        <Link to={!user && "/login"}>
          <div className="header_option" onClick={handleAuthentication}>
            <span className="headeroptionLineOne">
              Hello : {!user ? "Guest" : user.email}
            </span>
            <span className="headeroptionLinetwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <div className="header_option">
          <span className="headeroptionLineOne">Returns&</span>
          <span className="headeroptionLinetwo">Orders</span>
        </div>
        <div className="header_option">
          <span className="headeroptionLineOne">Your</span>
          <span className="headeroptionLinetwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header_optionBasket">
            <ShoppingBasketIcon />
            <span className="headeroptionLinetwo  header_basketCount">
              {basket.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
