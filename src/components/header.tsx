import SideBar from "../ui/header/sidebar/sidebar";
import NavList from "@/ui/header/navListDesktop/page";

export default function Header() {
  return (
    <header className="flex justify-between items-center mb-4 bg-purple-700 text-white p-4">
      <h1 className="text-3xl font-bold">ContratoAI</h1>
      <SideBar />
      <NavList />
    </header>
  );
}
