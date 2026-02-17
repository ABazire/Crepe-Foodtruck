"use client";

import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Charger le panier depuis localStorage au montage
  useEffect(() => {
    const saved = localStorage.getItem("cart");
    if (saved) {
      setCartItems(JSON.parse(saved));
    }
  }, []);

  // Sauvegarder dans localStorage à chaque changement
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  function addToCart(product, quantity = 1) {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.slug === product.slug);
      if (existing) {
        return prev.map((item) =>
          item.slug === product.slug
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        );
      }
      return [
        ...prev,
        {
          slug: product.slug,
          title: product.title,
          image: product.image,
          price: product.price,
          quantity,
        },
      ];
    });
    setIsCartOpen(true);
  }

  function removeFromCart(slug) {
    setCartItems((prev) => prev.filter((item) => item.slug !== slug));
  }

  function updateQuantity(slug, quantity) {
    if (quantity < 1) {
      removeFromCart(slug);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) => (item.slug === slug ? { ...item, quantity } : item)),
    );
  }

  function clearCart() {
    setCartItems([]);
  }

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const cartTotal = cartItems.reduce((sum, item) => {
    const price = parseFloat(item.price.replace("€", "").replace(",", "."));
    return sum + price * item.quantity;
  }, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        cartTotal,
        isCartOpen,
        setIsCartOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
