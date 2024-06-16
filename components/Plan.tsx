import { PlanProps } from "@/types";
import Link from "next/link";

const Plan = ({
  height,
  title,
  description,
  textColor,
  priceMonthly,
  priceYearly,
  bgColor,
  titleColor,
  priceColor,
  btnColor,
  btnTextColor,
  yearly,
}: PlanProps) => (
  <div
    className={`${bgColor} ${height} flex flex-col items-center justify-center p-8 text-center max-lg:h-fit max-lg:py-8`}
  >
    <h3 className={`${titleColor} my-5 text-2xl font-bold leading-[25px]`}>
      {title}
    </h3>
    <p className={`text-[15px] leading-[25px] ${textColor} opacity-60`}>
      {description}
    </p>

    <div className="my-10 flex flex-col items-center">
      <span className={`${priceColor} heading`}>
        {yearly ? priceYearly : priceMonthly}
      </span>
      <span className={`text-[15px] leading-[25px] ${textColor} opacity-60`}>
        {yearly ? "per year" : "per month"}
      </span>
    </div>

    <Link
      href="#"
      className={`h-[40px] w-[270px] ${btnColor} flex items-center justify-center text-center text-xs font-bold tracking-[2px] ${btnTextColor} uppercase transition-opacity duration-200 hover:opacity-60`}
    >
      Pick Plan
    </Link>
  </div>
);

export default Plan;
