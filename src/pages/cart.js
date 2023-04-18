import React, { useState } from "react";
import '../styles/cart.css'
const Cart = () => {

    const [close, setClose] = useState(true);

    const handleCartClose = () => {
        setClose(false);
    }
    return (
        <>

        {close && (
            <div className="cart">
            <div className="cart-title d-flex">
            <p>Shopping Cart</p>
            <i class="fa-thin fa-xmark" onClick={handleCartClose}></i>
            </div>
            <hr />
            <p className="cart-message">No products in the cart.</p>
          </div>

         )}
          
        </>
    );
}
export default Cart;