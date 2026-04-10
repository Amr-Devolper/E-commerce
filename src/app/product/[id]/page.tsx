import { getSpecificProduct } from "@/services/Product.service";
import StarsCount from "@/app/_components/StarsCount";
import { Button } from "@/components/ui/button";

export default async function page({ params } : { params: { id: string } }) {
  const wait = await params;

  const product = await getSpecificProduct(wait.id);

  return (
    <div className="bg-gray-100 grid grid-cols-1 md:grid-cols-4 gap-4 w-10/12 mx-auto h-screen p-3 items-center">
      <div className="col-span-1">
        <div className="mx-auto rounded-lg border border-gray-200">
          <img
            className="w-full"
            src={product?.imageCover}
            alt={product?.title}
          />
        </div>
      </div>

      <div className="col-span-3">
        <div className="flex justify-start gap-3">
          <span className="text-sm text-white p-3 bg-emerald-500 rounded-2xl me-5">
            {product?.category.name}
          </span>

          <span className="text-sm text-white p-3 bg-emerald-500 rounded-2xl">
            {product?.brand.name}
          </span>
        </div>

        <h1 className="text-2xl font-bold my-3">{product?.title}</h1>
        <div className="flex items-center">
        
          <StarsCount rating={product?.ratingsAverage || 0} />{" "}
          {product?.ratingsAverage}
        </div>
        <p className="text-gray-700 my-3">{product?.description}</p>

        <div className="flex gap-3 w-full">
            <Button className="bg-emerald-400 text-black cursor-pointer w-1/2">
          Add to Cart
        </Button>
        <Button className="bg-sky-500 text-black cursor-pointer w-1/2">
          Add to WishList
        </Button>
      
        </div>
      </div>
    </div>
  );
}
