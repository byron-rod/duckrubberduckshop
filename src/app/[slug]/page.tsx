import Add from "@/components/Add";
import CustomizeProducts from "@/components/CustomizeProducts";
import ProductImages from "@/components/ProductImages";
import React from "react";

const SinglePage = () => {
  return (
    <div className="px-8 md:px-12 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16 mt-16">
      {/* img */}
      <div className="w-full lg:w-1/2 lg:sticky top-[6rem] h-max">
        <ProductImages />
      </div>

      {/* text */}
      <div className="w-full lg:w-1/2 flex flex-col ">
        <h1 className="text-4xl font-medium">Product Name</h1>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          velit libero enim aliquid quibusdam voluptatum. Voluptas perferendis
          officia consectetur odio!
        </p>
        <div className="h-[2px] bg-gray-100 mt-2" />
        <div className="flex items-center gap-4">
          <h3 className="text-xl text-gray-500 line-through">$59</h3>
          <h2 className="font-medium text-2xl">$49</h2>
        </div>
        <div className="h-[2px] bg-gray-100 mt-2" />
        <CustomizeProducts />
        <Add />
        <div className="h-[2px] bg-gray-100 mt-2" />
        <div className="text-sm mb-4">
          <h4 className="font-medium mb-4">Title</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            nemo hic minima. Dicta nemo tempore aut dolore quis ut accusamus
            aperiam quas iste laborum tenetur ducimus iusto minima rerum velit
            eaque, sint natus ipsa vitae.
          </p>
        </div>
        <div className="text-sm">
          <h4 className="font-medium mb-4">Title</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            nemo hic minima. Dicta nemo tempore aut dolore quis ut accusamus
            aperiam quas iste laborum tenetur ducimus iusto minima rerum velit
            eaque, sint natus ipsa vitae.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
