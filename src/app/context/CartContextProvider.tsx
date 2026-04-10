"use client";
import { getUserCart } from "../_actions/cartActions";
import React, { ReactNode, createContext, useState, Dispatch, SetStateAction,useEffect } from "react";


interface CartContextType {
  numberOfCartItems: number;
  setNumberOfCartItems: Dispatch<SetStateAction<number>>;
}


export const cartContext = createContext<CartContextType>({
  numberOfCartItems: 0,
  setNumberOfCartItems: () => {}, // Default empty function
});



export default function CartContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [numberOfCartItems, setNumberOfCartItems] = useState(0);
  useEffect(() => {
    getDataFromApi();
  }, []);
  async function getDataFromApi() {
    const userCart = await getUserCart();
    setNumberOfCartItems(userCart.numOfCartItems);
  }
  return (
    <cartContext.Provider value={{ numberOfCartItems, setNumberOfCartItems }}>
      {children}
    </cartContext.Provider>
  );
}
