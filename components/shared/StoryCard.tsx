"use client";

import { StoryCardProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { CgArrowLongRight } from "react-icons/cg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const StoryCard = ({
  background,
  title,
  author,
  publishedDate,
  index,
}: StoryCardProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, translateX: "-100%" }}
      animate={
        inView
          ? { opacity: 1, translateX: "0%" }
          : { opacity: 0, translateX: "-100%" }
      }
      transition={{ duration: 0.25, delay: index }}
      className="relative flex h-[500px] items-end px-10 pb-10 transition-all duration-200 hover:-mt-10"
    >
      <div className="z-10 w-[280px]">
        <span className="text-[13px] text-white 3xl:text-base">
          {publishedDate}
        </span>
        <h4 className="text-[18px] font-bold leading-[25px] text-white 3xl:text-2xl">
          {title}
        </h4>
        <small className="text-[13px] text-white 3xl:text-base">{author}</small>
        <hr className="my-5 w-full opacity-50" />
        <Link
          href="#"
          className="flex items-center justify-between text-xs font-bold uppercase tracking-[2px] text-white 3xl:text-base"
        >
          Read Story
          <CgArrowLongRight size={25} />
        </Link>
      </div>

      <Image
        width={1000}
        height={500}
        src={background}
        alt={title}
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 size-full bg-black/25" />
    </motion.div>
  );
};

export default StoryCard;
