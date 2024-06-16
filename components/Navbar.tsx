import { navItems } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import NavLink from "./navbar/NavLink";
import { GridBackground } from "./ui/GridBackground";
import ToggleMenu from "./navbar/ToggleMenu";

const Navbar = () => {
  return (
    <nav className="relative z-[99] flex items-center justify-center py-7">
      <GridBackground />
      <div className="mx-auto flex w-4/5 max-w-7xl items-center justify-between">
        <Image src="/logo.svg" width={170} height={16} alt="Photosnap Logo" />

        <ul className="flex items-center gap-[37px] max-lg:gap-[24px] max-md:hidden">
          {navItems.map((item) => (
            <NavLink key={item.title} {...item} />
          ))}
        </ul>

        <Link
          href="#"
          className="invite-btn h-[40px] w-[158px] text-xs font-medium tracking-[2px] max-md:hidden"
        >
          Get an invite
        </Link>

        <ToggleMenu />
      </div>
    </nav>
  );
};

export default Navbar;
