import React, { useContext } from "react";
import PropTypes from "prop-types";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { toggleCart } = useContext(CartContext);

  return (
    <div className="cart">
      <div>
        <div>
          <h3>Panier</h3>
          <div className="croce" onClick={toggleCart}>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <div className="cart-bilan">
        <div>
          <p>Total</p>
          <span>165.54€</span>
        </div>
        <div>
          <button>Vider le panier</button>
          <button>Commander</button>
        </div>
      </div>
    </div>
  );
}

Cart.propTypes = {};

export default Cart;
