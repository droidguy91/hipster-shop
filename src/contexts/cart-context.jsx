import { createContext, useState } from "react";

export const CartContext = createContext({
  cartItems: [],
});

export const CartOpenContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
});

export const CartProvider = ({ children }) => {
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const value = { cartItems, setCartItems, cartIsOpen, setCartIsOpen };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
