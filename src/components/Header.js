import React from "react";
import "./styles/Header.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import Checkout from "./Checkout";

const Header = () => {
  const [{ basket, user }] = useStateValue();
  return (
    <>
      <div className="header">
        <Link to="/">
          <p id="LOGO">Johnson's MotorSports</p>
        </Link>

        <div className="header__search">
          <input className="header__searchInput" type="text" />
          <SearchOutlinedIcon className="header__searchIcon" />
        </div>

        <div className="header__nav">
          <Link to="/checkout">
            <div className="header__optionBasket">
              <AddShoppingCartIcon />
              <span className="header__optionLineTwo header__basketCount">
                {basket?.length}
              </span>
            </div>
            {Checkout}
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
