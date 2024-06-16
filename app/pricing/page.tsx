import Comparison from "@/components/Comparison";
import Pricing from "@/components/Pricing";
import Banner from "@/components/shared/Banner";
import Beta from "@/components/shared/Beta";

const page = () => {
  return (
    <div>
      <Banner
        title="Pricing"
        description="Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos."
        btnText=""
        bgColor="bg-black"
        textColor="text-white"
        btnTextColor=""
        textColorOpacity="text-white/60"
        bgImage="bg-pricing"
        translateX="50%"
        reverse={false}
        button={true}
      />
      <Pricing />
      <Comparison />
      <Beta />
    </div>
  );
};

export default page;
