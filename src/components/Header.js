import React from 'react';
import "./Header.css";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from "react-router-dom";
import { useStateValue } from './StateProvider';


const Header = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <>
      <div className="header">
        <Link to='/'>
          <p id="LOGO">Johnson's MotorSports</p>
        </Link>

    <div className="header__search">
      <input className="header__searchInput" type="text" />
      <SearchOutlinedIcon className="header__searchIcon" />
    </div>

    <div className="header__nav">
      <Link to={!user && '/api/login'}>
        <div className="header__option">
        <span className="header__optionLineOne">Hello {!user ? 'Guest' : user.email}</span>
            <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
        </div>
      </Link>
      

      
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>

        <Link to="/checkout">
        <div className="header__optionBasket">
          <AddShoppingCartIcon />
          <span className="header__optionLineTwo header__basketCount">
            {basket?.length}
          </span>
        </div>
        </Link>
    </div>
  </div>
    </>
  )
}

export default Header