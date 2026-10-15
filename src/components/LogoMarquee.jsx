// Infinite scrolling row of logo tiles; `reverse` scrolls the other way
export function LogoMarquee({ logos, reverse = false, duration = '30s' }) {
  return (
    <div className="flex overflow-hidden w-full group [mask-image:_linear-gradient(to_right,transparent_0,_black_10%,_black_90%,transparent_100%)]">
      <div
        className="flex shrink-0 animate-marquee group-hover:[animation-play-state:paused]"
        style={{ animationDuration: duration, animationDirection: reverse ? 'reverse' : 'normal' }}
      >
        {[...Array(4)].map((_, setIndex) => (
          <div key={setIndex} className="flex items-center gap-5 sm:gap-8 pr-5 sm:pr-8 shrink-0" aria-hidden={setIndex > 0}>
            {logos.map((brand, i) => (
              <div
                key={`${setIndex}-${i}`}
                className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border border-[#cbc2cc]/50 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all shrink-0 flex items-center justify-center"
                style={{ backgroundColor: brand.bg }}
              >
                <img
                  src={brand.src}
                  alt={setIndex === 0 ? `${brand.name} logo` : ''}
                  loading="lazy"
                  className={brand.fit === 'cover' ? 'w-full h-full object-cover' : 'w-full h-full object-contain p-2.5 sm:p-3'}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
