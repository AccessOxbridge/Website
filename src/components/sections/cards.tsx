import Image from 'next/image';
import Link from 'next/link';
import { approachCardsConfig } from '@/configs/approach-cards.config';

const cards = approachCardsConfig.cards;

export default function ApproachCards() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-10 max-w-[1280px]">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16 lg:mb-24">
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-[#CCCCCC] bg-[#F0F0F0] mb-6">
            <span className="text-[12px] font-semibold tracking-[0.5px] uppercase text-[#1a1a1a]">
              {approachCardsConfig.badge}
            </span>
          </div>

          <h2 className="text-[42px] leading-[1.3] -tracking-[0.25px] font-semibold text-[#1a1a1a] mb-6 max-w-2xl">
            {approachCardsConfig.title}
          </h2>

          <p className="text-[16px] md:text-[18px] text-gray-66 leading-[1.6] max-w-3xl mb-8" dangerouslySetInnerHTML={{ __html: approachCardsConfig.description }}>
          </p>

          <a
            href={approachCardsConfig.buttonHref}
            className="inline-flex items-center justify-center bg-[#1a1a1a] text-white font-semibold text-[16px] py-3.5 px-8 rounded-full hover:opacity-90 transition-opacity"
          >
            {approachCardsConfig.buttonText}
          </a>
        </div>

        {/* Sticky Cards Stack */}
        <div className="flex flex-col gap-8 pb-20">
          {cards.map((card, index) => (
            <div
              key={index}
              className="sticky top-24 md:top-32 bg-white rounded-2xl border border-[#E8E8E8] shadow-[0_4px_12px_rgba(0,0,0,0.08)] overflow-hidden"
              style={{
                zIndex: index + 1
              }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 p-8 lg:p-12 items-center min-h-[400px]">
                {/* Content Side */}
                <div className="max-w-xl">
                  <div className="text-[#0052CC] font-semibold text-sm mb-4">
                    {card.label}
                  </div>
                  <h3 className="text-[24px] md:text-[28px] lg:text-[32px] font-semibold text-[#1a1a1a] leading-[1.3] mb-4">
                    {card.title}
                  </h3>
                  <p className="text-gray-66 text-[16px] leading-[1.6]">
                    {card.description}
                  </p>
                </div>

                {/* Image Side */}
                <div className="relative h-[250px] lg:h-[320px] w-full rounded-xl overflow-hidden aspect-video lg:aspect-auto">
                    <Image
                        src={card.image}
                        alt={card.alt}
                        fill
                        className="object-cover"
                        priority={index === 0}
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}