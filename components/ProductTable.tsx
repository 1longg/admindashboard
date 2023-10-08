import EditIcon from "@Icon/Edit";
import Image from "next/image";

export default function ProductTable({}) {
   return (
              <tr>
            <td className="px-8 py-3 flex items-center">
              <Image
                src="/Images/1.png"
                width={32}
                height={32}
                alt="logo"
                className="rounded-full mr-2 bg-white"
              />
              <span className="line-clamp-2">
                Lenovo ThinkPad X1 Carbon Gen 11
              </span>
            </td>
            <td className="py-3">
              ₫<span>285.000</span>
            </td>
            <td className="py-3">Laptop</td>
            <td className="py-3 text-green-500">Instock</td>
            <td className="py-3">
              <EditIcon className="w-5 h-5 text-white cursor-pointer" />
            </td>
          </tr>
   ) 
}