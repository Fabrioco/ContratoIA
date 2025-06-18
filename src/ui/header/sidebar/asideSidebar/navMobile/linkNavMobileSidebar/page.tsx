import Link from "next/link";

export default function LinkNavMobileSidebar(item: {
  name: string;
  href: string;
  current: boolean;
}) {
  return (
    <Link
      key={item.name}
      href={item.href}
      prefetch
      className={`${
        item.current
          ? "bg-white text-purple-700 shadow-lg"
          : "text-white hover:bg-gray-300/50 hover:text-white hover:shadow-md"
      } p-2 rounded-md`}
    >
      {item.name}
    </Link>
  );
}
