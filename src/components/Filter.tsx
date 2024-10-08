"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Filter = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const handleFilterChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    const params = new URLSearchParams(searchParams);
    params.set(name, value);
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="mt-12 flex flex-col md:flex-row justify-between">
      <div className="flex gap-6 flex-wrap">
        <select
          name="type"
          id=""
          className="py-2 px-4 rounded-2xl text-sm font-medium bg-yellow-100"
          onChange={handleFilterChange}
        >
          <option>Type</option>
          <option value="physical">Physical</option>
          <option value="digital">Digital</option>
        </select>

        {/* TODO: Filter Categories */}
        <select
          name="category"
          className="py-2 px-4 rounded-2xl text-sm font-medium bg-yellow-100"
          onChange={handleFilterChange}
        >
          <option value="">Category</option>
          <option value="home">Home</option>
          <option value="new-arrivals">New Arrivals</option>
          <option value="shoes">Shoes</option>
          <option value="t-shirts">T-shirts</option>
          <option value="accessories">Accessories</option>
          <option value="featured">Featured</option>
        </select>
        <select
          name=""
          id=""
          className="py-2 px-4 rounded-2xl text-sm font-medium bg-yellow-100"
        >
          <option>All Filters</option>
        </select>
        <input
          type="text"
          name="min"
          placeholder="min price"
          className="text-xs rounded-2xl pl-2 py-2 w-24 ring-1 ring-gray-400"
          onChange={handleFilterChange}
        />
        <input
          type="text"
          name="max"
          placeholder="max price"
          className="text-xs rounded-2xl pl-2 py-2 w-24 ring-1 ring-gray-400"
          onChange={handleFilterChange}
        />
      </div>
      <div className="mt-5 md:mt-0">
        <select
          name="sort"
          id=""
          className="py-2 px-4 rounded-2xl text-sm font-medium bg-white ring-1 ring-gray-400"
          onChange={handleFilterChange}
        >
          <option>Sort By</option>
          <option value="asc price">Price (low to high)</option>
          <option value="desc price">Price (high to low)</option>
          <option value="asc lastUpdated">Newest</option>
          <option value="desc lastUpdated">Oldest</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
