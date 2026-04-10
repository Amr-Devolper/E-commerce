import { ProductType } from "@/types/Product.types";

export async function getAllProducts(): Promise<ProductType[] | null> {
  try {
    let response = await fetch(
      `https://ecommerce.routemisr.com/api/v1/products`, 
       {
        cache : "force-cache",

       }
    );
    let finalRes = await response.json();
    return finalRes.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return null;
  }
}

export async function getSpecificProduct(id: string) : Promise<ProductType | null> {
  try {
    let response = await fetch(
      `https://ecommerce.routemisr.com/api/v1/products/${id}`,
      {
        cache : "force-cache",
      }
    );
    let finalRes = await response.json();
    return finalRes.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}
