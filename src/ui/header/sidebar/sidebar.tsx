"use client";

import { useState } from "react";
import ButtonOpenSidebar from "./buttonOpenSidebar/page";
import SidebarBackground from "./background/page";
import AsideSidebar from "./asideSidebar/page";

export default function SideBar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <ButtonOpenSidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <SidebarBackground isOpen={isOpen} setIsOpen={setIsOpen} />
      <AsideSidebar isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}
