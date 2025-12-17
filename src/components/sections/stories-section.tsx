import { storiesConfig } from "@/configs/stories.config";

export default function StoriesSection() {
  const stories = storiesConfig.stories;

  return (
    <section className="bg-[#1a1a1a] text-white py-[72px] w-full border-t border-[#2d2d2d] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-14">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <h2 className="text-[36px] md:text-[48px] font-normal leading-[1.2] tracking-tighter">
            {storiesConfig.title}
          </h2>
          <a
            href="#"
            className="mt-6 md:mt-0 inline-block bg-accent hover:bg-accent-foreground text-white text-[16px] font-semibold px-8 py-4 transition-colors duration-300 ease-in-out"
          >
            {storiesConfig.buttonText}
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-12">
          <div className="flex flex-col gap-y-12">
            {stories
              .filter((story) => !story.isTall)
              .map((story) => (
                <StoryCard key={story.id} story={story} />
              ))}
          </div>

          <div className="flex flex-col gap-y-12 h-full">
            {stories
              .filter((story) => story.isTall)
              .map((story) => (
                <StoryCard key={story.id} story={story} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface Story {
  id: number;
  category: string;
  title: string;
  date: string;
  image: string;
  alt: string;
  isTall: boolean;
}

function StoryCard({ story }: { story: Story }) {
  return (
    <div className="group flex flex-col cursor-pointer w-full">
      <div 
        className={`relative overflow-hidden w-full ${story.isTall ? 'aspect-3/4 md:h-full' : 'aspect-video'} bg-secondary-background-dark mb-6`}
      >
        <img
          src={story.image}
          alt={story.alt}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>
      
      <div className="flex flex-col items-start">
        <span className="text-accent-light text-[12px] font-bold uppercase tracking-[0.15em] mb-3">
          {story.category}
        </span>
        <h3 className="text-white text-[20px] md:text-[24px] font-normal leading-[1.4] mb-4 group-hover:underline decoration-1 underline-offset-4 decoration-accent-light">
          {story.title}
        </h3>
        <span className="text-[#a0a0a0] text-[14px]">
          {story.date}
        </span>
      </div>
    </div>
  );
}
