import Banner from "./shared/Banner";

const ForEveryone = () => {
  return (
    <Banner
      title="Designed for everyone"
      description="Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it. "
      btnText="View the stories"
      btnTextColor="text-black"
      bgColor="bg-white"
      textColor="text-black"
      textColorOpacity="text-black/60"
      bgImage="bg-forEveryone"
      translateX="50%"
      reverse={false}
      button={true}
    />
  );
};

export default ForEveryone;
