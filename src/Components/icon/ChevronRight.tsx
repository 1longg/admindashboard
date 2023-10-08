import { clsx } from "clsx";

export default function ChevronRight({
  classname,
  onClick,
  currentPage,
  totalPage,
}: {
  classname?: string;
  onClick: () => void;
  currentPage: number;
  totalPage: number;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={clsx(classname, {
        ["text-gray-200 hover:cursor-not-allowed"]:
          currentPage === totalPage,
      })}
      onClick={onClick}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.25 4.5l7.5 7.5-7.5 7.5"
      />
    </svg>
  );
}
