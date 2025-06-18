import NavMobile from "./navMobile/page";
import ButtonCloseSidebar from "./buttonCloseSidebar/page";

export default function AsideSidebar({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) {
  return (
    <>
      <aside
        className={`bg-gradient-to-b from-purple-600 to-purple-900 text-white p-4 fixed top-0 right-0 h-screen z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } flex flex-col gap-4 rounded-md`}
      >
        <ButtonCloseSidebar setIsOpen={setIsOpen} />
        <h1 className="text-3xl font-bold">ContratoAI</h1>
        <NavMobile />
      </aside>
    </>
  );
}
