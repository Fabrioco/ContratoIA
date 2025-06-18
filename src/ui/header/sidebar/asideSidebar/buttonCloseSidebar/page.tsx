import { XCircleIcon } from "@phosphor-icons/react";

export default function ButtonCloseSidebar({
  setIsOpen,
}: {
  setIsOpen: (isOpen: boolean) => void;
}) {
  return (
    <button className="p-2 cursor-pointer w-fit" onClick={() => setIsOpen(false)}>
      <XCircleIcon size={32} weight="bold" color="white" />
    </button>
  );
}
