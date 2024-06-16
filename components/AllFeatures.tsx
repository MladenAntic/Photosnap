import React from "react";
import FeatureCard from "./shared/FeatureCard";
import { features } from "@/constants";

const AllFeatures = () => {
  return (
    <section className="grid grid-cols-3 place-content-center place-items-center gap-20 px-14 py-28 max-lg:grid-cols-2 max-md:grid-cols-1 max-md:px-0">
      {features.map((feature) => (
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

export default AllFeatures;
