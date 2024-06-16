import BeautifulStories from "@/components/BeautifulStories";
import ForEveryone from "@/components/ForEveryone";
import Hero from "@/components/Hero";
import SelectedFeatures from "@/components/SelectedFeatures";
import SelectedStories from "@/components/SelectedStories";

export default function Home() {
  return (
    <div>
      <Hero />
      <BeautifulStories />
      <ForEveryone />
      <SelectedStories />
      <SelectedFeatures />
    </div>
  );
}
