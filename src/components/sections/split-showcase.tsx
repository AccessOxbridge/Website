export default function SplitShowcase() {
  return (
    <section className="w-full bg-[#1a1a1a]">
      <div className="flex flex-col md:flex-row w-full">
        <div className="group relative w-full md:w-1/2 h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden bg-black">
          <div className="absolute inset-0 w-full h-full">
            <img
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/03c182b6-0fac-4e49-8417-53786c1f4067-astonmartin-com/assets/images/timeless_6165_graded-saturation-27.jpg"
              alt="Aston Martin Timeless Certified Pre-Owned Vehicle Detail"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90" />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500" />
          </div>

          <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-10 lg:p-14 z-10 text-white">
            <div>
              <h5 className="text-[11px] md:text-xs font-bold tracking-[0.2em] uppercase opacity-90">
                Aston Martin Pre Owned
              </h5>
            </div>

            <div className="flex flex-col gap-8 md:gap-10">
              <div className="flex flex-col">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-[0.15em] text-white leading-tight">
                  TIMELESS
                </h3>
                <span className="text-lg md:text-xl font-light text-white/90 mt-1 tracking-wide">
                  Certified Pre-Owned
                </span>
              </div>

              <a 
                href="#" 
                className="group/link inline-flex items-center text-sm font-medium hover:text-[#1b8a7a] transition-colors w-fit"
              >
                Explore 
                <svg 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="ml-3 w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="group relative w-full md:w-1/2 h-[500px] md:h-[600px] lg:h-[700px] bg-[#8b2d2d] overflow-hidden">
          <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-10 lg:p-14 z-20 text-white pointer-events-none">
            <div className="pointer-events-auto">
              <h5 className="text-[11px] md:text-xs font-bold tracking-[0.2em] uppercase opacity-90">
                Aston Martin Magazine
              </h5>
            </div>

            <div className="pointer-events-auto">
              <a 
                href="#" 
                className="group/link inline-flex items-center text-sm font-medium hover:opacity-80 transition-opacity w-fit"
              >
                Explore 
                <svg 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="ml-3 w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
            <div className="relative w-[220px] md:w-[260px] lg:w-[320px] aspect-[0.76] shadow-2xl transition-transform duration-700 ease-out group-hover:-translate-y-4">
              <img
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/03c182b6-0fac-4e49-8417-53786c1f4067-astonmartin-com/assets/images/am-v61-magazine-28.jpg"
                alt="Aston Martin Magazine V61"
                className="w-full h-full object-cover shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
