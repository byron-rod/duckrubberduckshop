import CategoryList from "@/components/CategoryList";
import ProductList from "@/components/ProductList";
import Slider from "@/components/Slider";
import { wixClientServer } from "@/lib/wixClientServer";
import { Suspense, useEffect } from "react";
import { useWixClient } from "../hooks/useWixClient";
import Skeleton from "@/components/Skeleton";

const HomePage = async () => {
  // const wixClient = useWixClient();

  // useEffect(() => {
  //   const getProducts = async () => {
  //     try {
  //       const res = await wixClient.products.queryProducts().find();
  //       console.log(res);
  //     } catch (error) {
  //       console.error("Error fetching products:", error);
  //     }
  //   };

  //   getProducts();
  // }, [wixClient]);

  // const wixClient = await wixClientServer();

  // const res = await wixClient.products.queryProducts().find();

  // console.log(res);

  return (
    <div className="">
      <Slider />
      <div className="mt-24 px-8 md:px-12 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl font-semibold">
          Featured <span className="text-yellow-500 text-2xl">Products</span>
        </h1>
        <Suspense fallback={<Skeleton />}>
          <ProductList
            categoryId={process.env.FEATURED_COLLECTION_ID!}
            limit={4}
          />
        </Suspense>
      </div>
      <div className="mt-24">
        <h1 className="text-2xl font-semibold px-8 md:px-12 lg:px-16 xl:px-32 2xl:px-64 mb-12">
          Categories
        </h1>
        <CategoryList />
      </div>
      <div className="mt-24 px-8 md:px-12 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl font-semibold">
          New <span className="text-yellow-500 text-2xl">Products</span>
        </h1>
      </div>
    </div>
  );
};

export default HomePage;
