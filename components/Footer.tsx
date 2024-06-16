import { socialLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import MainCTA from "./shared/MainCTA";
import { FooterLinkProps } from "@/types";

const FooterLink = ({ text, link }: FooterLinkProps) => (
  <Link
    href={link}
    className="text-xs font-bold uppercase tracking-[2px] text-white transition-colors duration-200 hover:text-lightgrey/60"
  >
    {text}
  </Link>
);

const Footer = () => {
  return (
    <footer className="flex items-start justify-around bg-black py-20 max-md:flex-col max-md:gap-10">
      <div className="flex items-start gap-32 max-lg:gap-16 max-md:w-full max-md:flex-col max-md:items-center max-md:justify-center max-md:gap-10">
        <div className="flex h-[122px] flex-col justify-between max-md:items-center max-md:justify-center max-md:gap-5">
          <Image
            src="/footer-logo.svg"
            width={170}
            height={16}
            alt="Footer Logo"
          />

          <div className="flex items-center gap-2">
            {socialLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <link.Icon
                  className={`text-white ${link.className} transition-colors duration-200`}
                  size={25}
                />
              </Link>
            ))}
          </div>
        </div>

        <div className="flex h-[122px] flex-col justify-between max-md:items-center max-md:text-center">
          <FooterLink text="Home" link="/" />
          <FooterLink text="Stories" link="/stories" />
          <FooterLink text="Features" link="/features" />
          <FooterLink text="Pricing" link="/pricing" />
        </div>
      </div>

      <div className="flex h-[122px] flex-col justify-between max-md:w-full max-md:items-center max-md:justify-center max-md:gap-5">
        <MainCTA text="Get an invite" btnTextColor="text-white" />

        <span className="text-right text-[15px] text-white/50 ">
          Copyright 2024. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
