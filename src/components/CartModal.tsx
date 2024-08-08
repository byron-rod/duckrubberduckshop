import Image from "next/image";
import React from "react";

const CartModal = () => {
  const cartItems = true;
  return (
    <div className="w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-10 right-0 flex flex-col gap-6 z-20">
      {!cartItems ? (
        <div>Cart is Empty</div>
      ) : (
        <>
          <h2 className="text-lg font-semibold">Shopping Cart</h2>
          {/* list */}
          <div className="flex flex-col gap-8">
            {/* cart item */}
            <div className="flex gap-4">
              <Image
                src="/stock-photo.jpg"
                alt=""
                width={72}
                height={96}
                className="object-cover rounded-md"
              />
              <div className="flex flex-col justify-between w-full">
                {/* top */}
                {/* title */}
                <div className="flex items-center justify-between gap-8">
                  <h3 className="font-semibold">Product Name</h3>
                  <div className="p-1 bg-gray-50 rounded-sm">$49</div>
                </div>
                {/* description */}
                <div className="text-sm text-gray-500">available</div>
                {/* bottom */}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Qty. 2</span>
                  <span className="text-blue-500">Remove</span>
                </div>
              </div>
            </div>
            {/* cart item */}
            <div className="flex gap-4">
              <Image
                src="/stock-photo.jpg"
                alt=""
                width={72}
                height={96}
                className="object-cover rounded-md"
              />
              <div className="flex flex-col justify-between w-full">
                {/* top */}
                {/* title */}
                <div className="flex items-center justify-between gap-8">
                  <h3 className="font-semibold">Product Name</h3>
                  <div className="p-1 bg-gray-50 rounded-sm">$49</div>
                </div>
                {/* description */}
                <div className="text-sm text-gray-500">available</div>
                {/* bottom */}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Qty. 2</span>
                  <span className="text-blue-500">Remove</span>
                </div>
              </div>
            </div>
          </div>
          {/* Bottom */}
          <div>
            <div className="flex items-center justify-between font-semibold">
              <span>SubTotal</span>
              <span>Amount</span>
            </div>
            <p className="text-gray-500 text-sm mt-2 mb-4">
              Shipping and taxes calculated at checkout
            </p>
            <div className="flex justify-between text-sm">
              <button className="rounded-md py-3 px-4 ring-1 ring-gray-300">
                View Cart
              </button>
              <button className="rounded-md py-3 px-4 bg-black text-white">
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartModal;
