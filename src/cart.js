import { createContext, useState, useCallback } from "react";

export const DEFAULT_CART = {
  cart: [],
  setCart: () => {},
  token: null,
  login: (token) => {},
  logout: () => {},
};

export const CartContext = createContext(DEFAULT_CART);

export const useCart = () => {
  const [cart, setCart] = useState([]);
  const [token, setToken] = useState(null);

  const setCurrentCart = useCallback((currentCart) => {
    setCart(currentCart);
  }, []);

  const login = (token) => setToken(token);
  const logout = () => setToken(null);

  return {
    cart,
    setCurrentCart,
    token,
    logout,
    login,
  };
};
