import image1 from "@/assets/images/image.png";
import image2 from "@/assets/images/image.webp";
import image3 from "@/assets/images/image2.webp";
import { getAllProducts } from "@/services/Product.service";
import { getMyToken } from "@/utils/getMyToken";
import MySlider from "./_components/MySlider";
import ProductCard from "./_components/ProductCard";

export default async function page() {
  const products = await getAllProducts();

  const images = [image1.src, image2.src, image3.src];

  getMyToken();

  return (
    <>
        <MySlider listOfImages={images} slidesPerView={1} />
        <h2 className="border-x-green-800 border-x-10  px-2 rounded-sm m-2 text-center text-2xl mx-auto w-fit">
          Featured <span className="text-green-800">Products</span>
        </h2>
        <div className="container w-10/12 mx-auto p-5 grid gap-5 md:grid-cols-4 xl:grid-cols-5">
          {products?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
    </>
  );
}
