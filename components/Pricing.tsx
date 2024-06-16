"use client";

import { Switch } from "./ui/switch";
import { plans } from "@/constants";
import { useState } from "react";
import Plan from "./Plan";
import { WavyBackground } from "./ui/wavy-background";

const Pricing = () => {
  const [yearly, setYearly] = useState(false);

  return (
    <section className="relative">
      <div className="mx-auto flex w-4/5 max-w-7xl flex-col items-center py-24">
        <div className="z-[5] mb-14 flex items-center gap-[32px]">
          <span
            className={`text-lg font-bold leading-[25px] ${!yearly ? "text-black" : "text-black/50"}`}
          >
            Monthly
          </span>
          <Switch onCheckedChange={setYearly} />
          <span
            className={`text-lg font-bold leading-[25px] ${yearly ? "text-black" : "text-black/50"}`}
          >
            Yearly
          </span>
        </div>

        <div className="z-[5] flex h-[470px] items-center gap-8 max-lg:h-fit max-lg:flex-col">
          {plans.map((plan) => (
            <Plan
              height={plan.height}
              key={plan.title}
              title={plan.title}
              description={plan.description}
              textColor={plan.textColor}
              priceMonthly={plan.priceMonthly}
              priceYearly={plan.priceYearly}
              bgColor={plan.bgColor}
              titleColor={plan.titleColor}
              priceColor={plan.priceColor}
              btnColor={plan.btnColor}
              btnTextColor={plan.btnTextColor}
              yearly={yearly}
            />
          ))}
        </div>
      </div>

      <WavyBackground />
    </section>
  );
};

export default Pricing;
