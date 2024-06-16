import Banner from "./shared/Banner";

const BeautifulStories = () => {
  return (
    <Banner
      title="Beautiful stories every time"
      description="We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone."
      btnText="View the stories"
      btnTextColor="text-black"
      bgColor="bg-white"
      textColor="text-black"
      textColorOpacity="text-black/60"
      bgImage="bg-beautifulStories"
      translateX="-100%"
      reverse={true}
      button={true}
    />
  );
};

export default BeautifulStories;
