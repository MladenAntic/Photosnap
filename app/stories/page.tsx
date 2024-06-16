import AllStories from "@/components/AllStories";
import MainCTA from "@/components/shared/MainCTA";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const page = () => {
  return (
    <div>
      <section className="relative flex h-screen items-center bg-appalachia bg-cover bg-center bg-no-repeat pl-36 max-md:pl-0">
        <div className="relative z-[5] w-[387px] max-md:mx-auto max-md:w-4/5 3xl:w-[600px]">
          <span className="text-xs font-bold uppercase tracking-[2px] text-white">
            Last month&apos;s featured story
          </span>
          <h1 className="heading my-5 text-white">
            <TextGenerateEffect words="Hazy Full Moon Of Appalachia" />
          </h1>
          <small className="text-[13px] text-white opacity-75">
            March 2nd 2024{" "}
            <span className="font-bold text-white opacity-100">
              by John Appleseed
            </span>
          </small>
          <p className="paragraph my-5 text-white opacity-60">
            The dissected plateau area, while not actually made up of geological
            mountains, is popularly called &ldquo;mountains&rdquo;, especially
            in eastern Kentucky and West Virginia, and while the ridges are not
            high, the terrain is extremely rugged.
          </p>
          <MainCTA text="Read the story" btnTextColor="text-white" />
        </div>

        <div className="absolute inset-0 bg-black/40" />
      </section>
      <AllStories />
    </div>
  );
};

export default page;
