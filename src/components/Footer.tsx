import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="py-10 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-40 text-sm mt-12 border-t-2 border-black">
      {/* TOP */}
      <div className="flex flex-col md:flex-row justify-between gap-20">
        {/* LEFT */}
        <div className="p-4 w-full md:w-1/2 lg:w-1/3 flex flex-col gap-8">
          <Link href="/">
            <Image src="/ducklogo.png" alt="logo" width={150} height={150} />
            <div className="text-2xl font-bold tracking-tight">
              Duck Rubber Duck Shop
            </div>
          </Link>
          <span className="font-semibold text-lg">
            hello@duckrubberduck.com
          </span>
          <span className="font-semibold text-lg">+1 234 567 890</span>
          <div className="flex gap-12">
            <Image src="/facebook.png" alt="" width={26} height={26} />
            <Image src="/instagram.png" alt="" width={26} height={26} />
            <Image src="/youtube.png" alt="" width={26} height={26} />
            <Image src="/pinterest.png" alt="" width={26} height={26} />
            <Image src="/x.png" alt="" width={26} height={26} />
          </div>
        </div>
        {/* CENTER */}
        <div className="hidden lg:flex gap-x-28 w-1/3 p-4">
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-xl">COMPANY</h1>
            <div className="flex flex-col gap-6">
              <Link
                href=""
                className="text-lg hover:text-yellow-500 hover:font-semibold"
              >
                About Us
              </Link>
              <Link
                href=""
                className="text-lg hover:text-yellow-500 hover:font-semibold"
              >
                Careers
              </Link>
              <Link
                href=""
                className="text-lg hover:text-yellow-500 hover:font-semibold"
              >
                Affiliates
              </Link>
              <Link
                href=""
                className="text-lg hover:text-yellow-500 hover:font-semibold"
              >
                Blog
              </Link>
              <Link
                href=""
                className="text-lg hover:text-yellow-500 hover:font-semibold"
              >
                Contact Us
              </Link>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-xl">SHOP</h1>
            <div className="flex flex-col gap-6">
              <Link
                href=""
                className="text-lg hover:text-yellow-500 hover:font-semibold"
              >
                New Arrivals
              </Link>
              <Link
                href=""
                className="text-lg hover:text-yellow-500 hover:font-semibold"
              >
                Accessories
              </Link>
              <Link
                href=""
                className="text-lg hover:text-yellow-500 hover:font-semibold"
              >
                Men
              </Link>
              <Link
                href=""
                className="text-lg hover:text-yellow-500 hover:font-semibold"
              >
                Women
              </Link>
              <Link
                href=""
                className="text-lg hover:text-yellow-500 hover:font-semibold"
              >
                All Products
              </Link>
            </div>
          </div>
        </div>
        {/* RIGHT */}
        <div className="w-full md:w-1/2 lg:w-1/3 flex flex-col gap-8 p-4">
          <h1 className="font-medium text-xl">SUBSCRIBE</h1>
          <p className="text-lg">
            Be the first to get the latest news about trends, promotions, and
            much more!
          </p>
          <div className="flex">
            <input
              type="text"
              placeholder="Email address"
              className="p-4 w-3/4"
            />
            <button className="w-1/4 bg-black text-white rounded-md ml-2">
              JOIN
            </button>
          </div>
          <span className="font-semibold">Secure Payments</span>
          <div className="flex justify-between">
            <Image src="/discover.png" alt="" width={40} height={20} />
            <Image src="/skrill.png" alt="" width={40} height={20} />
            <Image src="/paypal.png" alt="" width={40} height={20} />
            <Image src="/mastercard.png" alt="" width={40} height={20} />
            <Image src="/visa.png" alt="" width={40} height={20} />
          </div>
        </div>
      </div>
      {/* BOTTOM */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-12 mx-auto">
        <div className="">© 2024 Duck Rubber Duck Shop</div>
      </div>
    </div>
  );
};

export default Footer;
