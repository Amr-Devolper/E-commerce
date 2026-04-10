import { FaRegEye, FaStar } from "react-icons/fa";
import StarsCount from "@/app/_components/StarsCount";
import { Button } from "@/components/ui/button";
import { CiHeart } from "react-icons/ci";
import { LuRefreshCw } from "react-icons/lu";
import { ProductType } from "@/types/Product.types";
import Link from "next/link";
import AddToCartBtn from "./AddToCartBtn";


interface ProductCardPropsType {
    product : ProductType
}



export default function ProductCard({product}: ProductCardPropsType) {
  return (
     <div className="w-fit p-3 border-1 rounded-md relative">
            <div className="absolute top-4 right-4">
              <div className="cursor-pointer bg-white rounded-full text-xl p-1 shadow-2xl border flex items-center justify-between">
                <CiHeart className="text-gray-600"/>
              </div>
              <Link href={`/product/${product.id}`} className="cursor-pointer bg-white rounded-full text-xl p-1 shadow-2xl border flex items-center justify-between mt-3">
                <FaRegEye className="text-gray-600"/>
              </Link>
              <div className="cursor-pointer bg-white rounded-full text-xl p-1 shadow-2xl border flex items-center justify-between mt-3">
                <LuRefreshCw className="text-gray-600"/>
              </div>
            </div>

            <div></div>

            <img
              src={product.imageCover}
              alt={product.title}
              className="w-full bg-gray-700"
            />
            <p className="text-gray-600 text-xs mt-3">
              {product.category.name}
            </p>
            <h3 className="text-lg font-semibold">
              {product.title.split(" ").length > 5
                ? `${product.title.split(" ").slice(0, 5).join(" ")}...`
                : product.title}
            </h3>

            <div className="flex items-center">
              <StarsCount rating={product.ratingsAverage} />
              {product.ratingsAverage}
            </div>
            <div className="flex items-center justify-between mt-3">
              {product.priceAfterDiscount ? (
                <div className="flex gap-2 items-center">
                  <h4 className="text-emerald-500 text-xl font-semibold">
                    {product.priceAfterDiscount} EGP
                  </h4>
                  <span className="text-sm text-gray-500 line-through">
                    {product.price} EGP
                  </span>
                </div>
              ) : (
                <h4>{product.price} EGP</h4>
              )}
              <AddToCartBtn productId = {product.id}/>
            </div>
          </div>
  )
}
