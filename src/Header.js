import React from "react";
import "./Header.css";
// import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import SearchIcon from "@mui/icons-material/Search";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import StorefrontIcon from "@mui/icons-material/Storefront";

function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <StorefrontIcon className="header__logoImage" fontSize="large" />
        <h2 className="header__logoTitle">AmaznStore</h2>
      </div>

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        {/* nav signin  */}
        <div className="nav__sec">
          <span className="nav__secTop">Hello Joe</span>
          <span className="nav__secBtm">Sign In</span>
        </div>
        {/* nav shop */}
        <div className="nav__sec">
          <span className="nav__secTop">Your</span>
          <span className="nav__secBtm">Shop</span>
        </div>
        {/* nav for basket */}
        <div className="nav__itemBasket">
          <LocalGroceryStoreOutlinedIcon className="" />
          <div className="nav__secBtm nav__basketCount">0</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
