"use client";

import { Sheet, SheetContent } from "@/components/ui/sheet";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import NavLink from "./NavLink";
import { navItems } from "@/constants";
import Link from "next/link";

const ToggleMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen ? (
        <button
          type="button"
          className="cursor-pointer md:hidden"
          onClick={() => setIsOpen(false)}
        >
          <IoMdClose size={24} />
        </button>
      ) : (
        <button
          type="button"
          className="cursor-pointer md:hidden"
          onClick={() => setIsOpen(true)}
        >
          <RxHamburgerMenu size={24} />
        </button>
      )}

      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent
          className="top-[80px] bg-white text-black md:hidden"
          side="top"
        >
          <ul className="flex flex-col items-center justify-center gap-8 p-5">
            {navItems.map((link) => (
              <NavLink
                key={link.href}
                {...link}
                className="text-2xl leading-[25px] text-black transition-colors duration-200"
              />
            ))}
          </ul>
          <hr className="mb-5 border-2" />
          <Link
            href="#"
            className="invite-btn mx-auto h-[48px] w-[310px] text-[15px] font-bold tracking-[2.5px]"
          >
            Get an invite
          </Link>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default ToggleMenu;
