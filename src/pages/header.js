import React, { useState, useEffect } from "react";
import '../styles/header.css';
import Cart from "./cart";
import { NavLink, Link } from "react-router-dom";

const Header = () => {

  const [openCart, setOpenCart] = useState(false);

    const handleCartOpen = () => {
      setOpenCart(!openCart);
    }

   
         return (
        <>
<nav class="navbar navbar-expand-lg bg-light">
 <div class="container-fluid">
    <Link class="navbar-brand" to="/">DCOUTURE</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
     <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
        <Link class="nav-link" to="/" aria-current="page"> HOME</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/product">SHOP</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link" to="/">ABOUT US</Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link" to="/">CONTACT</Link>
        </li>
      </ul>
      <span class="navbar-text">

      <i class="fa-solid fa-bag-shopping" onClick={handleCartOpen}></i>
      </span>
      </div>
      {openCart && (
        <>
         <Cart />
        </>
      )}
   </div>
</nav>
        </>
    );
}
export default Header;