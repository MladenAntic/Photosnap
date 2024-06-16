import { cn } from "@/lib/utils";
import { NavLinkProps } from "@/types";
import Link from "next/link";

const NavLink = ({ href, title, className }: NavLinkProps) => {
  return (
    <li className={cn("text-xs font-bold uppercase tracking-[2px] text-black transition-colors duration-200 hover:text-lightgrey", className)}>
      <Link href={href}>{title}</Link>
    </li>
  );
};

export default NavLink;
