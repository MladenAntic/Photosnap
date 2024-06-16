import { stories } from "@/constants";
import StoryCard from "./shared/StoryCard";

const SelectedStories = () => {
  return (
    <section className="grid grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1">
      {stories.slice(0, 4).map((story, index) => (
        <StoryCard
          key={story.title}
          background={story.background}
          title={story.title}
          author={story.author}
          index={index}
        />
      ))}
    </section>
  );
};

export default SelectedStories;
