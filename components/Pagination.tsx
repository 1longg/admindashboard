import clsx from "clsx";

export default function Pagination({
  totalPage,
  currentPage,
  onClickNavigator,
}: {
  totalPage: number;
  currentPage: number;
  onClickNavigator: (page: number) => void;
}) {
  const renderPagination = () => {
    if (currentPage <= 5) {
      return (
        <div>
          {Array.from({ length: 5 }, (_, i) => i + 1).map((page) => (
            <span
              key={page}
              className={clsx("text-sm px-2 mr-2 cursor-pointer", {
                ["rounded-md bg-purple-500 text-white"]: page === currentPage,
              })}
              onClick={() => onClickNavigator(page)}
            >
              {page}
            </span>
          ))}
          <span className="text-sm px-2 mr-2 cursor-pointer ">...</span>
          {Array.from({ length: 2 }, (_, i) => i + totalPage - 1).map(
            (page) => (
              <span
                className="text-sm px-2 mr-2 cursor-pointer"
                key={page}
                onClick={() => onClickNavigator(page)}
              >
                {page}
              </span>
            )
          )}
        </div>
      );
    } else if (currentPage > 5 && currentPage < totalPage - 4) {
      return (
        <div>
          {Array.from({ length: 2 }, (_, i) => i + 1).map((page) => (
            <span
              onClick={() => onClickNavigator(page)}
              className="text-sm px-2 mr-2 cursor-pointer"
              key={page}
            >
              {page}
            </span>
          ))}
          <span className="text-sm px-2 mr-2 ">...</span>

          {Array.from({ length: 5 }, (_, i) => i + currentPage - 2).map(
            (page) => (
              <span
                key={page}
                onClick={() => onClickNavigator(page)}
                className={clsx("text-sm px-2 mr-2 cursor-pointer", {
                  ["rounded-md bg-purple-500 text-white"]: page === currentPage,
                })}
              >
                {page}
              </span>
            )
          )}
          <span className="text-sm px-2 mr-2 cursor-pointer ">...</span>
          {Array.from({ length: 2 }, (_, i) => i + totalPage - 1).map(
            (page) => (
              <span
                onClick={() => onClickNavigator(page)}
                className="text-sm px-2 mr-2"
                key={page}
              >
                {page}
              </span>
            )
          )}
        </div>
      );
    } else if (currentPage >= totalPage - 4) {
      return (
        <div>
          {Array.from({ length: 2 }, (_, i) => i + 1).map((page) => (
            <span
              onClick={() => onClickNavigator(page)}
              className="text-sm px-2 mr-2 cursor-pointer"
              key={page}
            >
              {page}
            </span>
          ))}
          <span className="text-sm px-2 mr-2 cursor-pointer ">...</span>
          {Array.from({ length: 5 }, (_, i) => i + totalPage - 4).map(
            (page) => (
              <span
                onClick={() => onClickNavigator(page)}
                className={clsx("text-sm px-2 mr-2 cursor-pointer", {
                  ["rounded-md bg-purple-500 text-white"]: page === currentPage,
                })}
                key={page}
              >
                {page}
              </span>
            )
          )}
        </div>
      )
    }
  };
  return <div className="flex justify-between ">{renderPagination()}</div>;
}
