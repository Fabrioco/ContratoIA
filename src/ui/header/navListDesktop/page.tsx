import Link from "next/link";

export default function NavList() {
  const navigation = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Sobre",
      href: "/about",
    },
    {
      name: "Contato",
      href: "/contact",
    },
  ];
  return (
    <nav className="hidden md:flex gap-4">
      {navigation.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          prefetch
          className="text-white hover:bg-gray-300/50 hover:text-white hover:shadow-md p-2 rounded-md"
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
}
