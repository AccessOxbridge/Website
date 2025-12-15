export default function StoriesSection() {
  const stories = [
    {
      id: 1,
      category: "Experience",
      title: "Unleashing the Edge. Sharpened. At Goodwood Festival of Speed 2025.",
      date: "17 July 2025",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/03c182b6-0fac-4e49-8417-53786c1f4067-astonmartin-com/assets/images/goodwood-hero-desktop-3-30.jpg",
      alt: "Aston Martin racing car at Goodwood Festival of Speed",
      isTall: false
    },
    {
      id: 2,
      category: "Product",
      title: "Aston Martin and Apple CarPlay Ultra®",
      date: "15 May 2025",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/03c182b6-0fac-4e49-8417-53786c1f4067-astonmartin-com/assets/images/bero-new-hero-29.jpg",
      alt: "Aston Martin interior showing Apple CarPlay",
      isTall: false
    },
    {
      id: 3,
      category: "Business",
      title: "Aston Martin x BERO",
      date: "12 November 2025",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/03c182b6-0fac-4e49-8417-53786c1f4067-astonmartin-com/assets/images/bero-new-hero-26.jpg",
      alt: "Aston Martin partnership with BERO feature",
      isTall: true
    }
  ];

  return (
    <section className="bg-[#1a1a1a] text-white py-[72px] w-full border-t border-[#2d2d2d] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-14">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <h2 className="text-[36px] md:text-[48px] font-normal leading-[1.2] tracking-tight">
            Stories
          </h2>
          <a
            href="#"
            className="mt-6 md:mt-0 inline-block bg-[#1b8a7a] hover:bg-[#156b5e] text-white text-[16px] font-semibold px-8 py-4 transition-colors duration-300 ease-in-out"
          >
            Read all stories
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
        className={`relative overflow-hidden w-full ${story.isTall ? 'aspect-[3/4] md:h-full' : 'aspect-[16/9]'} bg-[#0f0f0f] mb-6`}
      >
        <img
          src={story.image}
          alt={story.alt}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>
      
      <div className="flex flex-col items-start">
        <span className="text-[#1b8a7a] text-[12px] font-bold uppercase tracking-[0.15em] mb-3">
          {story.category}
        </span>
        <h3 className="text-white text-[20px] md:text-[24px] font-normal leading-[1.4] mb-4 group-hover:underline decoration-1 underline-offset-4 decoration-[#1b8a7a]">
          {story.title}
        </h3>
        <span className="text-[#a0a0a0] text-[14px]">
          {story.date}
        </span>
      </div>
    </div>
  );
}
