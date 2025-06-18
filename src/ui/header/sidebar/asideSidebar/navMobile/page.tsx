"use client";
import { usePathname } from "next/navigation";
import LinkNavMobileSidebar from "./linkNavMobileSidebar/page";

export default function NavMobile() {
  const url = usePathname();
  const navigation = [
    {
      name: "Home",
      href: "/",
      current: url === "/",
    },
    {
      name: "Sobre",
      href: "/about",
      current: url === "/about",
    },
    {
      name: "Contato",
      href: "/contact",
      current: url === "/contact",
    },
  ];
  return (
    <nav className="flex flex-col gap-4 mt-4">
      {navigation.map((item) => (
        <LinkNavMobileSidebar key={item.name} {...item} />
      ))}
    </nav>
  );
}
