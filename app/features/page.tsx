import AllFeatures from "@/components/AllFeatures";
import Banner from "@/components/shared/Banner";
import Beta from "@/components/shared/Beta";

const page = () => {
  return (
    <div>
      <Banner
        title="Features"
        description="We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories."
        btnText=""
        bgColor="bg-black"
        textColor="text-white"
        btnTextColor=""
        textColorOpacity="text-white/60"
        bgImage="bg-features"
        translateX="50%"
        reverse={false}
      />
      <AllFeatures />
      <Beta />
    </div>
  );
};

export default page;
