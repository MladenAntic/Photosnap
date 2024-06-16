"use client";

import { TextGenerateEffect } from "../ui/text-generate-effect";
import MainCTA from "./MainCTA";
import { BackgroundBeams } from "../ui/background-beams";
import { motion } from "framer-motion";
import { BannerProps } from "@/types";
import { useInView } from "react-intersection-observer";

const Banner = ({
  title,
  description,
  btnText,
  btnTextColor,
  bgColor,
  textColor,
  textColorOpacity,
  bgImage,
  translateX,
  reverse,
  button,
}: BannerProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  return (
    <section
      className={`flex h-screen items-center ${reverse ? "max-md:flex-col" : "max-md:flex-col-reverse"}`}
    >
      {reverse ? (
        <>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, translateX }}
            animate={
              inView
                ? { opacity: 1, translateX: "0%" }
                : { opacity: 0, translateX }
            }
            transition={{ duration: 2 }}
            className={`size-full flex-1 ${bgImage} bg-cover bg-center bg-no-repeat max-xl:flex-[0.6] max-md:flex-1`}
          ></motion.div>

          <div
            className={`relative flex h-full flex-[0.6] items-center justify-center ${bgColor} max-xl:flex-1 max-md:w-full max-md:flex-1 max-sm:px-5 max-[400px]:py-5`}
          >
            <div className="relative z-[5] w-[387px] max-[400px]:w-full max-[400px]:px-10 3xl:w-[600px]">
              <h1
                className={`heading ${textColor}`}
              >
                <TextGenerateEffect words={title} />
              </h1>
              <p
                className={`paragraph my-10 ${textColorOpacity}`}
              >
                {description}
              </p>
              {button && <MainCTA text={btnText} btnTextColor={btnTextColor} />}
            </div>

            <BackgroundBeams />
          </div>
        </>
      ) : (
        <>
          <div
            className={`relative flex h-full flex-[0.6] items-center justify-center ${bgColor} max-xl:flex-1 max-md:w-full max-md:flex-1 max-sm:px-5 max-[400px]:py-5`}
          >
            <div className="relative z-[5] w-[387px] max-[400px]:w-full max-[400px]:px-10 3xl:w-[600px]">
              <h1
                className={`heading ${textColor}`}
              >
                <TextGenerateEffect words={title} />
              </h1>
              <p
                className={`paragraph my-10 ${textColorOpacity}`}
              >
                {description}
              </p>
              {button && <MainCTA text={btnText} btnTextColor={btnTextColor} />}
            </div>

            <BackgroundBeams />
          </div>

          <motion.div
            ref={ref}
            initial={{ opacity: 0, translateX }}
            animate={
              inView
                ? { opacity: 1, translateX: "0%" }
                : { opacity: 0, translateX }
            }
            transition={{ duration: 2 }}
            className={`size-full flex-1 ${bgImage} bg-cover bg-center bg-no-repeat max-xl:flex-[0.6] max-md:flex-1`}
          ></motion.div>
        </>
      )}
    </section>
  );
};

export default Banner;
