"use client";

import React from "react";
import Image from "next/image";
import { useCart } from "../context/CartContext";

function CartSidebar() {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    clearCart,
    cartCount,
    cartTotal,
    isCartOpen,
    setIsCartOpen,
  } = useCart();

  return (
    <>
      <div
        className={`cart-overlay ${isCartOpen ? "cart-overlay--open" : ""}`}
        onClick={() => setIsCartOpen(false)}
      />
      <aside
        className={`cart-sidebar ${isCartOpen ? "cart-sidebar--open" : ""}`}
      >
        <div className="cart-header">
          <h2>Panier ({cartCount})</h2>
          <button className="cart-close" onClick={() => setIsCartOpen(false)}>
            ✕
          </button>
        </div>

        {cartItems.length === 0 ? (
          <p className="cart-empty">Votre panier est vide.</p>
        ) : (
          <>
            <ul className="cart-list">
              {cartItems.map((item) => {
                const unitPrice = parseFloat(
                  item.price.replace("€", "").replace(",", "."),
                );
                const itemTotal = unitPrice * item.quantity;

                return (
                  <li key={item.slug} className="cart-item">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={70}
                      height={70}
                    />
                    <div className="cart-item-details">
                      <span className="cart-item-title">{item.title}</span>
                      <span className="cart-item-price">
                        {itemTotal.toFixed(2).replace(".", ",")}€
                      </span>
                      <div className="cart-item-quantity">
                        <button
                          onClick={() =>
                            updateQuantity(item.slug, item.quantity - 1)
                          }
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() =>
                            updateQuantity(item.slug, item.quantity + 1)
                          }
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <button
                      className="cart-item-remove"
                      onClick={() => removeFromCart(item.slug)}
                    >
                      ✕
                    </button>
                  </li>
                );
              })}
            </ul>

            <div className="cart-footer">
              <div className="cart-total">
                <span>Total</span>
                <span className="price">
                  {cartTotal.toFixed(2).replace(".", ",")}€
                </span>
              </div>
              <button className="cart-clear" onClick={clearCart}>
                Vider le panier
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}

export default CartSidebar;
