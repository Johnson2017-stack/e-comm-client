import React from 'react';
import "./Header.css";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


const Header = () => {
  return (
    <>
       <div className="header">

        <p>Johnson's MotorSports</p>

    <div className="header__search">
      <input className="header__searchInput" type="text" />
      <SearchOutlinedIcon className="header__searchIcon" />
    </div>

    <div className="header__nav">
      
        <div className="header__option">
          <span className="header__optionLineOne">Hello Guest</span>
          <span className="header__optionLineTwo">Sign In</span>
        </div>
      

      
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>

      
        <div className="header__optionBasket">
          <AddShoppingCartIcon />
          <span className="header__optionLineTwo header__basketCount">
            
          </span>
        </div>
      
    </div>
  </div>
    </>
  )
}

export default Header