import { useState, useLayoutEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MapPin, Sparkles, BarChart2, Flame, ChevronDown, ArrowRight, ShieldCheck, Zap, Globe, Clapperboard, TrendingUp, Search } from 'lucide-react'
import { Shader, Swirl, ChromaFlow, FlutedGlass, FilmGrain } from 'shaders/react'
import { FaqSection } from '../components/FaqSection'
import { LeadFormModal } from '../components/LeadFormModal'
import { stats, testimonials, homepageServicesData, clientLogos, productionHouses } from '../data/content'
import { LogoMarquee } from '../components/LogoMarquee'

gsap.registerPlugin(ScrollTrigger)

export function Home() {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedServiceForModal, setSelectedServiceForModal] = useState("Performance Marketing")
  const [isHeroHovered, setIsHeroHovered] = useState(false)
  const navigate = useNavigate()

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-enter', { y: 42, opacity: 0, duration: .8, stagger: .1, ease: 'power3.out', delay: .15 })
      gsap.utils.toArray('.reveal').forEach((el) => {
        gsap.from(el, { y: 44, opacity: 0, duration: .75, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 88%' } })
      })

      gsap.utils.toArray('.stat-num').forEach(el => {
        const target = parseFloat(el.getAttribute('data-target'))
        gsap.fromTo(el,
          { innerHTML: 0 },
          {
            innerHTML: target,
            duration: 2.5,
            ease: "power3.out",
            snap: { innerHTML: 1 },
            scrollTrigger: { trigger: el, start: "top 90%" }
          }
        )
      })
    })
    return () => ctx.revert()
  }, [])

  const handleOpenConsultation = (serviceName = "Performance Marketing") => {
    setSelectedServiceForModal(serviceName)
    setModalOpen(true)
  }

  return (
    <>
      {/* 1. HERO SECTION */}
      <section 
        className="hero min-h-[100svh] w-full text-gray-900 bg-[#f7f4f8] relative overflow-hidden flex flex-col items-center justify-center py-20" 
        id="home"
        onMouseEnter={() => setIsHeroHovered(true)}
        onMouseLeave={() => setIsHeroHovered(false)}
      >
        {/* Ambient background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,#674965_0%,transparent_65%)] opacity-15 pointer-events-none"></div>

        {/* Animated fluid shader background */}
        <div className="absolute inset-0 w-full h-full z-10 pointer-events-none overflow-hidden">
          <Shader style={{ width: '100%', height: '100%' }}>
            <Swirl colorA={isHeroHovered ? "#ffffff" : "#ffffff"} colorB={isHeroHovered ? "#ffffff" : "#ebdbeb"} detail={2.0} />
            <ChromaFlow 
              baseColor="#674965" 
              downColor={isHeroHovered ? "#ffffff" : "#674965"} 
              leftColor="#350c32" 
              rightColor={isHeroHovered ? "#ffffff" : "#674965"} 
              upColor={isHeroHovered ? "#350c32" : "#280926"} 
              momentum={20} 
              radius={4.5} 
            />
            <FlutedGlass aberration={0.65} angle={35} frequency={10} highlight={0.2} highlightSoftness={0.1} lightAngle={-90} refraction={5} shape="rounded" softness={1} speed={0.2} />
            <FilmGrain strength={0.06} />
          </Shader>
        </div>

        <div className="relative z-20 w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 text-center flex flex-col justify-center items-center py-20">
          <h1 className="font-bold font-sans text-[clamp(3.2rem,11vw,8.5rem)] leading-[0.95] tracking-[-0.03em] uppercase m-0 text-[#350c32] text-center max-w-[95vw] mb-4 sm:mb-6 hero-enter">
            VIDHARA
          </h1>
          <p className="font-semibold font-sans text-[clamp(1.5rem,4vw,3.2rem)] leading-[1.15] tracking-[-0.02em] m-0 text-[#674965] text-center max-w-[85vw] hero-enter">
            Create. Connect. Grow.
          </p>
        </div>
      </section>

      {/* 2. IMPACT STATS BAR */}
      <section className="bg-[#1b0619] border-y border-white/5 py-[50px] px-[4.7vw] max-[760px]:px-[24px] relative z-20 stats-bar">
        <div className="max-w-[1000px] mx-auto flex flex-wrap justify-between gap-[30px] max-[760px]:grid max-[760px]:grid-cols-2">
          {stats.map(({ value, suffix, label }) => (
            <div key={label} className="text-center reveal">
              <div className="text-[clamp(36px,5vw,64px)] font-bold font-sans text-[#fdfeff] leading-none mb-[12px]">
                <span className="stat-num" data-target={value}>0</span>
                <span>{suffix}</span>
              </div>
              <div className="text-[12px] font-mono text-[#cbc2cc] uppercase tracking-widest">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. WHO WE ARE SECTION */}
      <section className="bg-[#f7f4f8] text-[#350c32] py-20 lg:py-28 px-5 sm:px-8 lg:px-12 relative z-10 about" id="about-us">
        <div className="max-w-[1300px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center reveal">
            
            {/* Left Column: Content */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <div className="mb-4">
                <span className="font-mono text-[14px] sm:text-[16px] tracking-[0.12em] uppercase font-bold text-[#674965]">
                  01 — WHO WE ARE
                </span>
              </div>

              <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-bold text-[#350c32] leading-[1.05] tracking-tight mb-6">
                Local pulse.<br />Corporate precision.
              </h2>

              <p className="text-[16px] sm:text-[17px] leading-[1.65] text-[#674965] max-w-[620px]">
                Vidhara is a digital marketing and promotions agency based in Hyderabad. We don’t just run programmatic ads; we bridge the gap between structured corporate metrics and the raw energy of regional entertainment. Whether it is driving weekend footfalls to retail locations or making a mid-budget movie trend across Telugu social media, we command local attention.
              </p>
            </div>

            {/* Right Column: Dark Rounded Card Showcase */}
            <div className="lg:col-span-5 w-full">
              <div className="w-full bg-[#0d030d] text-white rounded-[28px] sm:rounded-[36px] p-8 sm:p-12 min-h-[320px] sm:min-h-[360px] flex items-center justify-center relative shadow-2xl overflow-hidden group border border-white/10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#350c32_0%,transparent_70%)] opacity-50 group-hover:opacity-80 transition-opacity duration-500 pointer-events-none"></div>
                
                <div className="relative z-10 flex items-center justify-center gap-6 sm:gap-8 w-full">
                  <div className="flex items-center gap-2.5">
                    <img src="/navlogo.png" alt="Vidhara Logo" className="h-7 sm:h-9 w-auto" />
                    <span className="text-xl sm:text-2xl font-bold tracking-tight text-white wordmark">
                      VIDHARA
                    </span>
                  </div>

                  <div className="h-10 sm:h-12 w-px bg-white/20"></div>

                  <div className="flex flex-col text-left">
                    <span className="text-lg sm:text-xl font-bold tracking-tight text-white">
                      Promotions
                    </span>
                    <span className="text-[11px] font-mono tracking-widest text-gray-400 uppercase">
                      Digital Media
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. WHY US / WHY VIDHARA SECTION */}
      <ExpandingWhyUsSection />

      {/* 5. HOMEPAGE SERVICES PREVIEW SECTION — 6 RECTANGULAR CARDS */}
      <section className="px-5 sm:px-8 lg:px-12 py-24 sm:py-32 bg-[#f7f4f8] text-[#350c32] relative z-10 services" id="our-services">
        <div className="max-w-[1300px] mx-auto">
          
          {/* Section Header */}
          <div className="mb-12 sm:mb-16">
            <span className="font-mono text-[14px] sm:text-[16px] tracking-[0.12em] uppercase font-bold text-[#674965] block mb-3">
              OUR SERVICES
            </span>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-bold text-[#350c32] tracking-tight leading-[1.05] mb-2">
                  Focused expertise.
                </h2>
                <p className="text-[15px] sm:text-[17px] text-[#674965]">
                  Six capabilities. One integrated growth engine.
                </p>
              </div>
              <Link 
                to="/services" 
                className="inline-flex items-center gap-2 font-mono text-[13px] font-semibold text-[#350c32] border-b border-[#350c32]/40 pb-1 hover:border-[#350c32] transition-colors shrink-0"
              >
                <span>VIEW ALL VERTICALS</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* 6 Rectangular Service Cards (3-column x 2-row grid on desktop) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-8">
            {homepageServicesData.map((card) => (
              <ServiceHomepageCard key={card.id} card={card} />
            ))}
          </div>

        </div>
      </section>

      {/* 6. CLIENT / BRAND LOGOS */}
      <section className="py-20 px-5 sm:px-8 lg:px-12 bg-white text-[#350c32] relative z-10 clients border-y border-[#cbc2cc]/30">
        <div className="max-w-[1200px] mx-auto text-center">
          <span className="font-mono text-[14px] sm:text-[16px] tracking-[0.12em] uppercase font-bold text-[#998599] block mb-3">
            04 — CLIENTS
          </span>
          <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-bold text-[#350c32] mb-10 tracking-tight">
            Brands that trust the hustle.
          </h2>

          <h3 className="font-mono text-[12px] sm:text-[13px] tracking-[0.15em] uppercase font-bold text-[#674965] mb-5">
            Brands
          </h3>
          <LogoMarquee logos={clientLogos} />

          <h3 className="font-mono text-[12px] sm:text-[13px] tracking-[0.15em] uppercase font-bold text-[#674965] mt-12 mb-5">
            Production Houses
          </h3>
          <LogoMarquee logos={productionHouses} reverse />
        </div>
      </section>

      {/* 7. TESTIMONIALS */}
      <section className="px-5 sm:px-8 lg:px-12 py-24 sm:py-32 bg-[#350c32] text-[#fdfeff] relative z-10 testimonials overflow-hidden" id="testimonials">
        <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-[#674965] rounded-full blur-[100px] opacity-30 -z-10 translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-[1200px] mx-auto">
          <span className="font-mono text-[14px] sm:text-[16px] tracking-[.12em] uppercase text-[#cbc2cc] font-bold text-center block mb-3">
            05 — TESTIMONIALS
          </span>
          <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-bold text-center text-white mb-16 tracking-tight reveal">
            Word on the street.
          </h2>

          <div className="flex overflow-hidden w-full group [mask-image:_linear-gradient(to_right,transparent_0,_black_10%,_black_90%,transparent_100%)]">
            <div className="flex shrink-0 animate-marquee group-hover:[animation-play-state:paused]">
              {[...Array(4)].map((_, setIndex) => (
                <div key={setIndex} className="flex gap-6 sm:gap-8 pr-6 sm:pr-8 shrink-0">
                  {testimonials.map(({ quote, author, role, image }, i) => (
                    <div key={`${author}-${i}`} className="w-[340px] sm:w-[400px] shrink-0 bg-[#280926]/80 backdrop-blur-md border border-[#cbc2cc]/30 rounded-[28px] p-8 flex flex-col justify-between transition-colors hover:bg-[#1b0619] shadow-xl">
                      <div>
                        <svg className="w-8 h-8 text-[#cbc2cc]/60 mb-6" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" /></svg>
                        <p className="text-[15px] sm:text-[16px] leading-[1.65] text-[#cbc2cc] mb-8 font-normal">"{quote}"</p>
                      </div>
                      <div className="flex items-center gap-4 border-t border-[#674965]/40 pt-4">
                        <img src={image} alt={author} className="w-11 h-11 rounded-full object-cover border border-[#cbc2cc]/40" />
                        <div>
                          <div className="font-semibold text-white text-[15px]">{author}</div>
                          <div className="text-[12px] text-[#cbc2cc] mt-0.5 font-mono">{role}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQ SECTION */}
      <FaqSection />

      {/* 9. FINAL CTA SECTION */}
      <section className="bg-[#1b0619] text-[#fdfeff] py-24 sm:py-32 px-5 sm:px-8 lg:px-12 relative z-10 overflow-hidden" id="contact-us">
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-[#674965] rounded-full blur-[120px] opacity-25 -z-10 translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="reveal relative rounded-[28px] overflow-hidden border border-[#674965]/30 shadow-[0_16px_48px_rgba(0,0,0,0.35)] aspect-[4/3] md:aspect-[16/9] lg:aspect-[4/3] group">
            <img
              src="/images/home/lets-work-together-team.webp"
              alt="Vidhara Digital team discussing a marketing campaign with a client in their Hyderabad office"
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1b0619]/50 via-transparent to-transparent pointer-events-none"></div>
          </div>
          <div className="max-w-[760px] reveal flex flex-col items-start text-left">
            <span className="font-mono text-[14px] sm:text-[16px] tracking-[.12em] uppercase text-[#cbc2cc] block mb-4 font-bold">
              LET'S WORK TOGETHER
            </span>
            <h2 className="text-[clamp(2.2rem,5vw,4.2rem)] font-bold text-white leading-[1.05] tracking-tight mb-6">
              LET'S BUILD SOMETHING<br />PEOPLE NOTICE.
            </h2>
            <p className="text-[16px] sm:text-[17px] leading-[1.65] text-[#cbc2cc] max-w-[560px] mb-10">
              Tell us about your brand, your franchise, or your next release. We’ll get back within one business day.
            </p>
            <button
              type="button"
              onClick={() => handleOpenConsultation("Performance Marketing")}
              className="px-8 py-4 bg-white text-[#350c32] hover:bg-[#f7f4f8] active:scale-95 text-[14px] font-bold rounded-full transition-all duration-200 shadow-xl inline-flex items-center gap-3 cursor-pointer"
            >
              <span>START A CONVERSATION →</span>
            </button>
          </div>
        </div>
      </section>

      {/* Lead Consultation Form Modal */}
      <LeadFormModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultService={selectedServiceForModal}
      />
    </>
  )
}

/* SLEEK DARK EDITORIAL AGENCY CARD COMPONENT FOR HOMEPAGE */
function ServiceHomepageCard({ card }) {
  return (
    <article className="group relative bg-[#0d030d] border border-white/10 hover:border-white/25 rounded-[20px] sm:rounded-[24px] overflow-hidden flex flex-col justify-between shadow-lg transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl">
      
      {/* Top Visual Area */}
      <div className="w-full h-[180px] sm:h-[200px] overflow-hidden relative bg-[#1b0619]">
        <img 
          src={card.image} 
          alt={card.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {/* Soft gradient fading into the dark text card bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d030d] via-[#0d030d]/30 to-transparent pointer-events-none"></div>
      </div>

      {/* Bottom Content Area */}
      <div className="p-5 sm:p-6 flex flex-col justify-between flex-1 bg-[#0d030d] relative z-10 -mt-4 pt-0">
        <div>
          <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white mb-1.5 leading-snug">
            {card.title}
          </h3>
          <p className="text-[13px] text-gray-300 font-normal leading-relaxed mb-3 line-clamp-2 min-h-[2.6rem]">
            {card.tagline}
          </p>
        </div>

        <div>
          {/* Thin Horizontal Divider Line */}
          <div className="w-full h-px bg-white/10 mb-3"></div>

          {/* CTA Link */}
          <Link
            to={`/services#${card.id}`}
            className="inline-flex items-center gap-2 font-mono text-[12px] font-semibold text-gray-300 group-hover:text-white uppercase tracking-wider group-hover:translate-x-1.5 transition-all duration-300"
          >
            <span>{card.cta}</span>
          </Link>
        </div>
      </div>
    </article>
  )
}

/* EXPANDING WHY US SECTION */
function ExpandingWhyUsSection() {
  const containerRef = useRef(null)
  const [isMobile, setIsMobile] = useState(false)

  useLayoutEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 85%", "center 55%"]
  })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 25,
    mass: 0.3
  })

  const width = useTransform(smoothProgress, [0, 1], [isMobile ? "calc(100vw - 20px)" : "90vw", "100vw"])
  const borderRadius = useTransform(smoothProgress, [0, 1], [isMobile ? "16px" : "24px", "0px"])

  return (
    <section ref={containerRef} className="relative bg-[#f7f4f8] overflow-x-clip pt-8 pb-0" id="why-us">
      <div className="sticky top-[3vh] sm:top-[5vh] flex justify-center w-full z-10">
        <motion.div
          style={{ width, borderRadius }}
          className="bg-[#1b0619] text-white relative z-10 overflow-hidden shadow-[0_16px_40px_rgba(27,6,25,0.4)] border border-white/10"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] max-w-[1000px] h-[400px] bg-[radial-gradient(circle_at_center,#674965_0%,transparent_70%)] opacity-30 blur-[120px] pointer-events-none -z-10"></div>

          <div className="w-full max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-12 py-12 sm:py-16">
            <div className="mb-10 sm:mb-14 flex flex-col items-center text-center">
              <span className="inline-block font-mono text-[14px] sm:text-[16px] tracking-[.12em] uppercase text-[#cbc2cc] mb-6 font-bold">
                02 — WHY VIDHARA
              </span>
              <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-bold text-white tracking-tight leading-[1.08] text-center max-w-[850px]">
                The dual expertise nobody else has.
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
              <WhyUsCard1 />
              <WhyUsCard2 />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function WhyUsCard1() {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="group relative h-full bg-[#280926]/80 backdrop-blur-xl border border-[#674965]/40 hover:border-[#cbc2cc]/60 rounded-[32px] p-8 sm:p-12 transition-all duration-500 shadow-xl flex flex-col justify-between overflow-hidden">
      <div className="flex flex-col justify-between h-full">
        <div>
          <div className="w-14 h-14 rounded-2xl bg-[#1b0619] border border-[#674965]/50 flex items-center justify-center mb-8 relative z-10 shadow-sm">
            <MapPin className="text-[#cbc2cc]" size={26} />
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#fdfeff] mb-4 leading-[1.2] relative z-10">
            Hyperlocal Execution<br className="hidden sm:block" /> Over Generic Blueprints
          </h3>

          <div className="grid grid-cols-2 gap-4 py-5 my-2 border-y border-[#674965]/40 relative z-10">
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-[#fdfeff] tracking-tight">100%</div>
              <div className="text-[12px] text-[#cbc2cc] font-mono uppercase tracking-wider mt-1">Local Context</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-[#fdfeff] tracking-tight">25km</div>
              <div className="text-[12px] text-[#cbc2cc] font-mono uppercase tracking-wider mt-1">Radius Targeting</div>
            </div>
          </div>

          <p className="text-[15px] sm:text-[16px] leading-[1.65] text-[#cbc2cc] mt-4 relative z-10">
            National strategies often fail in regional markets because they lack cultural context.
          </p>

          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                className="overflow-hidden relative z-10"
              >
                <p className="text-[15px] sm:text-[16px] leading-[1.65] text-[#cbc2cc] pt-3">
                  At Vidhara, we live and breathe the local Telugu dynamic. We know exactly what triggers engagement, drives retail walk-ins, and creates organic word-of-mouth momentum in Hyderabad and across South India.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="pt-6 mt-2 relative z-10">
          <button
            type="button"
            onClick={() => setExpanded(!expanded)}
            className="inline-flex items-center gap-2 text-[#cbc2cc] hover:text-[#fdfeff] text-[14px] font-semibold transition-all cursor-pointer"
          >
            <span>{expanded ? 'Show less' : 'Learn more'}</span>
            <ChevronDown
              size={18}
              className={`transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
            />
          </button>
        </div>
      </div>
    </div>
  )
}

function WhyUsCard2() {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="group relative h-full bg-[#280926]/80 backdrop-blur-xl border border-[#674965]/40 hover:border-[#cbc2cc]/60 rounded-[32px] p-8 sm:p-12 transition-all duration-500 shadow-xl flex flex-col justify-between overflow-hidden">
      <div className="flex flex-col justify-between h-full">
        <div>
          <div className="w-14 h-14 rounded-2xl bg-[#1b0619] border border-[#674965]/50 flex items-center justify-center mb-8 relative z-10 shadow-sm">
            <Sparkles className="text-[#cbc2cc]" size={26} />
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#fdfeff] mb-4 leading-[1.2] relative z-10">
            Unmatched Dual<br className="hidden sm:block" /> Expertise
          </h3>

          <div className="grid grid-cols-2 gap-4 py-5 my-2 border-y border-[#674965]/40 relative z-10">
            <div>
              <div className="text-base font-extrabold text-[#fdfeff] flex items-center gap-1.5">
                <BarChart2 size={18} className="text-[#cbc2cc]" /> Performance
              </div>
              <div className="text-[12px] text-[#cbc2cc] font-mono uppercase tracking-wider mt-1">Metrics Driven</div>
            </div>
            <div>
              <div className="text-base font-extrabold text-[#fdfeff] flex items-center gap-1.5">
                <Flame size={18} className="text-[#cbc2cc]" /> Viral Hype
              </div>
              <div className="text-[12px] text-[#cbc2cc] font-mono uppercase tracking-wider mt-1">Cinema Scale</div>
            </div>
          </div>

          <p className="text-[15px] sm:text-[16px] leading-[1.65] text-[#cbc2cc] mt-4 relative z-10">
            We are one of the few agencies in the region equipped to handle two radically different worlds simultaneously:
          </p>

          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                className="overflow-hidden relative z-10"
              >
                <p className="text-[15px] sm:text-[16px] leading-[1.65] text-[#cbc2cc] pt-3">
                  the strict, lead-focused metrics required by global franchises (like Starbucks, Decathlon, and Cult) and the high-speed, viral hype demanded by cinema production houses (like Bigfish Media).
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="pt-6 mt-2 relative z-10">
          <button
            type="button"
            onClick={() => setExpanded(!expanded)}
            className="inline-flex items-center gap-2 text-[#cbc2cc] hover:text-[#fdfeff] text-[14px] font-semibold transition-all cursor-pointer"
          >
            <span>{expanded ? 'Show less' : 'Learn more'}</span>
            <ChevronDown
              size={18}
              className={`transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
            />
          </button>
        </div>
      </div>
    </div>
  )
}
