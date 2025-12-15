export default function BrandPhilosophy() {
  return (
    <section className="relative w-full bg-[#1b8a7a] text-white overflow-hidden">
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none">
        <div 
          className="absolute top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[80%] h-[120%] 
          bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),transparent_70%)] blur-[60px]" 
        />
        <div 
          className="absolute top-[60%] left-[30%] -translate-x-1/2 -translate-y-1/2 w-[60%] h-[80%] 
          bg-teal-300/[0.05] blur-[80px] rounded-full" 
        />
        <div 
          className="absolute top-[50%] left-[70%] -translate-x-1/2 -translate-y-1/2 w-[50%] h-[60%] 
          bg-teal-900/[0.1] blur-[100px] rounded-full mix-blend-overlay" 
        />
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-10 lg:px-20 py-20 md:py-32 lg:py-40">
        <div className="max-w-[1000px] mx-auto text-center">
          <blockquote className="flex flex-col items-center">
            <p className="text-2xl md:text-3xl lg:text-[42px] leading-[1.5] md:leading-[1.4] lg:leading-[1.3] font-light text-white mb-10 md:mb-14">
              We have an unstoppable quest for profound gratification. A desire to capture the pure human emotion of the driving experience.
            </p>
            
            <footer className="flex flex-col items-center gap-5 md:gap-7">
              <span className="block w-12 md:w-[60px] h-[1px] bg-white/40" aria-hidden="true" />
              
              <cite className="not-italic text-xs md:text-[13px] tracking-[0.2em] font-medium text-white/90 uppercase antialiased">
                Aston Martin
              </cite>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
