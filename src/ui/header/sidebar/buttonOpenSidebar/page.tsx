import { ListIcon } from "@phosphor-icons/react";

export default function ButtonOpenSidebar({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) {
  return (
    <button className="p-2 md:hidden cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
      <ListIcon size={32} weight="bold" color="white" />
    </button>
  );
}
