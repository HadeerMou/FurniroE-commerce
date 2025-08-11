"use client";
import { createContext, useContext, useState } from "react";

type CartContextType = {
  isCartVisible: boolean;
  toggleCartVisibility: () => void;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [isCartVisible, setIsCartVisible] = useState(false);

  const toggleCartVisibility = () => setIsCartVisible((prev) => !prev);

  return (
    <CartContext.Provider value={{ isCartVisible, toggleCartVisibility }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
}
