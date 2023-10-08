"use client";
import DocumentIcon from "@Icon/Document";
import UserIcon from "@Icon/User";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function SideBar() {
  const pathname = usePathname();

  return (
    <>
      <aside className="w-64 sticky top-0 z-10 flex-shrink-0 overflow-y-auto h-screen bg-backgroundMain">
        <div className="h-full  py-6 overflow-y-auto">
          <ul className="space-y-2 font-medium">
            <li className="relative px-3">
              <Link
                href="/products"
                className={clsx("flex mt-12 py-2", {
                  ["text-slate-400"]: pathname !== "/products",
                  ["text-white"]: pathname === "/products",
                })}
              >
                <DocumentIcon className="w-6 h-6" />
                <span className="ml-3">Products</span>
                {pathname === "/products" && (
                  <span className="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"></span>
                )}
              </Link>
            </li>
            <li className="relative px-3">
              <Link
                href="/accounts"
                className={clsx("flex mt-6 py-2", {
                  ["text-slate-400"]: pathname !== "/accounts",
                  ["text-white"]: pathname === "/accounts",
                })}
              >
                <UserIcon className="w-6 h-6" />
                <span className="ml-3">Account</span>
                {pathname === "/accounts" && (
                  <span className="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"></span>
                )}
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}
