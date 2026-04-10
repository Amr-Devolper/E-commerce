"use server"

import { CartResType } from "@/types/Cart.types";
import { getMyToken } from "@/utils/getMyToken";

export  async  function addToCart(id : string) : Promise<CartResType>{
    console.log("added to cart");

    const token = await getMyToken();

    const response = await fetch("https://ecommerce.routemisr.com/api/v2/cart",{
        method:"POST",
        body : JSON.stringify({productId : id}),
        headers : {
            "Content-Type": "application/json",
            token : token as string
        }})

        const finalRes = await response.json();

        console.log(finalRes);
        return finalRes;
}


export async function getUserCart() : Promise<CartResType>{
    const token = await getMyToken();
    const res = await fetch ("https://ecommerce.routemisr.com/api/v2/cart", {
        headers : {
            token : token as string
        }
    })


    const finalRes = await res.json();

    return finalRes;
}