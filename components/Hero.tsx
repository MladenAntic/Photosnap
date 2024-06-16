import Banner from "./shared/Banner";

const Hero = () => {
  return (
    <Banner
      title="Create and share your photo stories."
      description="Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others."
      btnText="Get an invite"
      bgColor="bg-black"
      textColor="text-white"
      btnTextColor="text-white"
      textColorOpacity="text-white/60"
      bgImage="bg-hero"
      translateX="50%"
      reverse={false}
      button={true}
    />
  );
};

export default Hero;
