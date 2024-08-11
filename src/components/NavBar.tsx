import Link from "next/link";
import Menu from "./Menu";
import Image from "next/image";
import SearchBar from "./SearchBar";
import NavIcons from "./NavIcons";

const NavBar = () => {
  return (
    <nav className="h-[6rem] px-8 md:px-12 lg:px-16 xl:px-32 2xl:px-64 relative pt-4 pb-4 z-20 border-b-2 border-black">
      {/* mobile menu */}
      <div className="h-full flex items-center justify-between md:hidden">
        <Link href="/">
          <Image
            src="/ducklogo.png"
            alt="Duck Logo"
            width={150}
            height={150}
            className="z-20"
            priority
            style={{ width: "auto", height: "auto" }}
          />
        </Link>
        <Menu />
      </div>
      {/* bigger screens */}
      <div className="hidden md:flex items-center h-full justify-between gap-8">
        {/* left */}
        <div className="w-1/3 xl:w-1/2 flex items-center gap-12 z-20">
          <Link href="/" className="flex items-center">
            <Image
              src="/ducklogo.png"
              alt="Duck Logo"
              width={120}
              height={120}
              className="z-20 image-auto img"
              priority
              style={{ width: "120", height: "120" }}
            />
          </Link>
          <div className="hidden xl:flex gap-4">
            <Link href="/">Home</Link>
            <Link href="/">Shop</Link>
            <Link href="/">Deals</Link>
            <Link href="/">About</Link>
            <Link href="/">Contact</Link>
          </div>
        </div>
        {/* right */}
        <div className="w-2/3 xl:w-1/2 flex items-center justify-between gap-8">
          <SearchBar />
          <NavIcons />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
