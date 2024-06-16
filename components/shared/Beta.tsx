import { TextGenerateEffect } from "../ui/text-generate-effect";
import MainCTA from "./MainCTA";

const Beta = () => {
  return (
    <section className="relative flex h-[400px] items-center justify-center bg-beta bg-cover bg-center bg-no-repeat">
      <div className="z-[5] mx-auto flex w-4/5 max-w-7xl items-center justify-between max-md:flex-col max-md:gap-10 max-md:text-center">
        <h2 className="heading w-[400px] text-white 3xl:w-[600px]">
          <TextGenerateEffect words="We&apos;re in Beta. Get your invite today!" />
        </h2>
        <MainCTA btnTextColor="text-white" text="Get an invite" />
      </div>

      <div className="absolute inset-0 bg-black/50" />
    </section>
  );
};

export default Beta;
