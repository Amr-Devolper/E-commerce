"use client";

import { Button } from "@/components/ui/button";
import { addToCart } from "../_actions/cartActions";
import { toast } from "sonner";
import { useContext } from "react";
import  { cartContext } from "../context/CartContextProvider";


export default function AddToCartBtn({ productId }: { productId: string }) {
  // @ts-ignore
    const { setNumberOfCartItems } = useContext(cartContext)

  async function handleAddCart() {
    const res = await addToCart(productId);

    if (res.status == "success") {
      toast.success(res.message, {
        position: "top-center",
        richColors: true,
      });

      console.log("fokak mny 3shan m3orksh",res.numOfCartItems)
      setNumberOfCartItems(res.numOfCartItems);
    }
  }

  return (
    <>
      <Button
        onClick={handleAddCart}
        className={
          "rounded-full text-2xl font-semibold cursor-pointer bg-emerald-500 w-10 h-10 hover:bg-emerald-600"
        }
      >
        +
      </Button>
    </>
  );
}
