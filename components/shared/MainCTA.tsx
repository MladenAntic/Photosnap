import { MainCTAProps } from "@/types";
import Link from "next/link";
import { CgArrowLongRight } from "react-icons/cg";

const MainCTA = ({ text, btnTextColor }: MainCTAProps) => {
  return (
    <Link
      href="#"
      className={`group flex items-center gap-[18px] text-xs font-bold uppercase tracking-[2px] ${btnTextColor} 3xl:text-lg`}
    >
      {text}
      <CgArrowLongRight
        size={25}
        className="transition-all duration-200 group-hover:ml-2"
      />
    </Link>
  );
};

export default MainCTA;
