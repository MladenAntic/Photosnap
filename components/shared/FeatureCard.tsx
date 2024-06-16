import { FeatureCardProps } from "@/types";
import Image from "next/image";

const FeatureCard = ({ image, title, description }: FeatureCardProps) => {
  return (
    <div className="flex h-[236px] max-w-[350px] flex-col items-center justify-between border border-transparent text-center max-md:mx-auto max-md:w-4/5 max-md:justify-center">
      <div className="flex size-[72px] items-center justify-center">
        <Image src={image} width={72} height={72} alt={title} />
      </div>
      <h3 className="my-7 text-[18px] font-bold leading-[25px] text-black">
        {title}
      </h3>
      <p className="text-[15px] leading-[25px] text-black">{description}</p>
    </div>
  );
};

export default FeatureCard;
