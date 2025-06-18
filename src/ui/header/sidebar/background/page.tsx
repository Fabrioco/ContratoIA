export default function SidebarBackground({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) {
  return (
    <>
      {isOpen && (
        <div
          className="bg-black/50 transition-opacity duration-300 fixed top-0 left-0 w-full h-full z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
