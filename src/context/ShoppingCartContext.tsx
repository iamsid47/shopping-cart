import { ReactNode, createContext, useContext, useState } from "react";

type ShoppingCartContext = {
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseItemQuantity: (id: number) => number;
  removeFromCart: (id: number) => number;
};

type ShoppingCartProviderProps = {
  children: ReactNode;
};

type CartItem = {
  id: number;
  name: string;
  quantity: number;
};

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  function getItemQuantity(id: number) {
    return cartItems.find(item => item.id === id)?.quantity || 0 
  }
  function increaseCartQuantity(id: number) {
    setCartItems(currItems => )
  }

  return (
    <ShoppingCartContext.Provider value={{getItemQuantity}}>
      {children}
    </ShoppingCartContext.Provider>
  );
}
