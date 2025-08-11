"use client";
import { createContext, useContext, useState } from "react";

type CartItem = {
  id: number;
  name: string;
  img: string;
  price: string;
  quantity: string;
};

type CartContextType = {
  isCartVisible: boolean;
  toggleCartVisibility: () => void;
  cartItems: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: number) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [isCartVisible, setIsCartVisible] = useState(false);

  const toggleCartVisibility = () => setIsCartVisible((prev) => !prev);

  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Asgaard sofa",
      img: "/cart/asgaard sofa.png",
      price: "250,000.00",
      quantity: "1",
    },
    {
      id: 2,
      name: "Casaliving Wood",
      img: "/cart/casaliving wood.png",
      price: "270,000.00",
      quantity: "1",
    },
  ]);

  const addItem = (newItem: CartItem) => {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (item) => item.id === newItem.id
      );
      if (existingItemIndex !== -1) {
        // update quantity if exists
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += newItem.quantity;
        return updatedItems;
      }
      // else add new item
      return [...prevItems, newItem];
    });
  };

  const removeItem = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const clearCart = () => setCartItems([]);

  return (
    <CartContext.Provider
      value={{
        isCartVisible,
        toggleCartVisibility,
        cartItems,
        addItem,
        removeItem,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
}
