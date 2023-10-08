import clsx from "clsx";

export default function FiguresProduct({title, quantity}: {title: string, quantity: number}){
    return (
        <div className="min-w-0 rounded-lg ring-1 ring-black ring-opacity-5 overflow-hidden bg-backgroundMain ">
          <div className="p-4 flex items-center">
            <div className=" text-orange-500 bg-orange-500"></div>
            <div className={clsx('p-3 rounded-full mr-4', {
                ['text-green-500 bg-green-500']: title === 'Total Categories',
                ['text-blue-500 bg-blue-500']: title === 'New Products',
                ['text-teal-500 bg-teal-500']: title === 'Pending Products',
                ['text-orange-500 bg-orange-500']: title === 'Total Products',
            })}></div>
            <div>
              <p className="mb-2  text-sm font-medium text-gray-600 ">
                {title}
              </p>
              <p className="text-lg font-semibold text-white">{quantity}</p>
            </div>
          </div>
        </div>
    )
}