"use client";

import FiguresProduct from "@Components/FiguresProduct";
import Pagination from "@Components/Pagination";
import ProductTable from "@Components/ProductTable";
import ChevronLeft from "@Icon/ChevronLeft";
import ChevronRight from "@Icon/ChevronRight";
import { useState } from "react";

export default function Page() {
  const totalPage = 20;
  const totalProducts = 195;
  const [currentPage, setCurrentPage] = useState(1);
  const onClickChevronLeft = () => {
    if (currentPage === 1) return;
    setCurrentPage((currentPage) => currentPage - 1);
  };
  const onClickChevronRight = () => {
    if (currentPage === totalPage) return;
    setCurrentPage((currentPage) => currentPage + 1);
  };
  const onClickNavigator = (page: number) => {
    setCurrentPage(page);
  };

  const showingPage = (currentPage: number) => {
    return (
      <span>
        Showing page {Math.floor((currentPage - 1) * 10 + 1)} - {" "}
        {Math.floor(currentPage * 10) < totalProducts ? Math.floor(currentPage * 10) : totalProducts }
        {" "}of {totalProducts}
      </span>
    );
  };
  return (
    <div className="container bg-black p-6 h-full ">
      <p className="text-3xl font-semibold text-white">Products</p>
      <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4 mt-6">
        <FiguresProduct title="Total Products" quantity={1000} />
        <FiguresProduct title="Total Categories" quantity={1000} />
        <FiguresProduct title="New Products" quantity={1000} />
        <FiguresProduct title="Pending Products" quantity={1000} />
      </div>
      <table className="w-full table-fixed">
        <thead className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b  bg-backgroundMain ">
          <tr>
            <td className="px-8 py-3 w-[500px]">Products</td>
            <td className="py-3">Amount</td>
            <td className="py-3">Catergoty</td>
            <td className="py-3">Status</td>
            <td className="py-3">Edit</td>
          </tr>
        </thead>
        <tbody className="bg-backgroundMain divide-y text-slate-400">
          <ProductTable />
          <ProductTable />
          <ProductTable />
          <ProductTable />
          <ProductTable />
          <ProductTable />
          <ProductTable />
        </tbody>
      </table>
      <div className="px-4 py-3 border-t  bg-backgroundMain text-gray-500 ">
        <div className="flex items-center justify-between text-xs  text-gray-600 ">
          <span className="flex font-semibold tracking-wide uppercase ">
            {showingPage(currentPage)}
          </span>
          <div className="flex items-center">
            <ChevronLeft
              classname="w-4 h-4  mr-2 rounded-md cursor-pointer"
              currentPage={1}
              onClick={onClickChevronLeft}
            />
            <Pagination
              totalPage={totalPage}
              currentPage={currentPage}
              onClickNavigator={onClickNavigator}
            />
            <ChevronRight
              classname="w-4 h-4 rounded-md cursor-pointer"
              currentPage={1}
              totalPage={totalPage}
              onClick={onClickChevronRight}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const data = [
  {
    id: 1,
    name: "Lenovo ThinkPad X1 Carbon Gen 11",
    price: 285000,
    category: "Laptop",
    status: "Instock",
    image: "/Images/1.png",
  },
];
