import { features } from "@/constants";
import FeatureCard from "./shared/FeatureCard";

const SelectedFeatures = () => {
  return (
    <section className="flex items-center justify-evenly px-14 py-28 max-xl:gap-5 max-lg:flex-wrap max-lg:gap-10 max-md:flex-col max-md:px-0">
      {features.slice(0, 3).map((feature) => (
        <FeatureCard
          key={feature.title}
          image={feature.image}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </section>
  );
};

export default SelectedFeatures;
