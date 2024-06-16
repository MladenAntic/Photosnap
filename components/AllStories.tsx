import { stories } from "@/constants";
import React from "react";
import StoryCard from "./shared/StoryCard";

const AllStories = () => {
  return (
    <section className="grid grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1">
      {stories.map((story, index) => (
        <StoryCard
          publishedDate={story.publishedDate}
          key={story.publishedDate}
          background={story.background}
          title={story.title}
          author={story.author}
          index={index}
        />
      ))}
    </section>
  );
};

export default AllStories;
