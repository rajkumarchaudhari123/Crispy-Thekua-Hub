"use client";
import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product, variant) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => 
        item.productId === product.id && item.variant.qty === variant.qty
      );
      
      if (existingItem) {
        return prevCart.map(item =>
          item.productId === product.id && item.variant.qty === variant.qty
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, {
          productId: product.id,
          productName: product.title,
          variant,
          quantity: 1,
          img: product.img
        }];
      }
    });
  };

  const removeFromCart = (productId, variantQty) => {
    setCart(prevCart => 
      prevCart.filter(item => 
        !(item.productId === productId && item.variant.qty === variantQty)
      )
    );
  };

  const updateQuantity = (productId, variantQty, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId, variantQty);
      return;
    }
    
    setCart(prevCart =>
      prevCart.map(item =>
        item.productId === productId && item.variant.qty === variantQty
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.variant.price * item.quantity), 0);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      updateQuantity,
      getTotalItems,
      getTotalPrice,
      clearCart,
      isCartOpen,
      setIsCartOpen
    }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};