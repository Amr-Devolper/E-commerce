"use client";

import React, { ReactNode, createContext, useEffect, useState } from "react";
import { getUserCart } from "../_actions/cartActions";
import { set } from "zod";

export const cartContext = createContext({});

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
