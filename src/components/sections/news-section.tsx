import { newsConfig } from "@/configs/news.config";

export default function NewsSection() {
  const newsItems = newsConfig.newsItems;

  return (
    <section className="w-full bg-[#1a1a1a] py-20 text-white md:py-24">
      <div className="container mx-auto px-4 md:px-10 lg:px-10 max-w-[1440px]">
        <div className="mb-12 flex items-center justify-between md:mb-16">
          <h2 className="font-sans text-xs font-bold uppercase tracking-[0.15em] text-white">
            {newsConfig.title}
          </h2>
          <a
            href="#"
            className="group flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-[0.15em] text-white transition-opacity hover:opacity-80"
          >
            {newsConfig.buttonText}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {newsItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-start justify-between"
            >
              <div className="w-full">
                <span className="mb-4 block font-sans text-xs font-medium text-[#a0a0a0]">
                  {item.date}
                </span>
                <h3 className="mb-8 font-sans text-lg font-normal leading-[1.4] text-white md:text-xl md:leading-[1.4]">
                  {item.headline}
                </h3>
              </div>
              <a
                href={item.link}
                className="group mt-auto flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-[0.15em] text-white transition-opacity hover:opacity-80"
              >
                Explore
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-3.5 w-3.5"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5v14" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
