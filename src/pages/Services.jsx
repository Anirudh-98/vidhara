import { useState, useEffect, useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { servicesPillarsData, productionHouses } from '../data/content'
import { LeadFormModal } from '../components/LeadFormModal'
import { LogoMarquee } from '../components/LogoMarquee'

gsap.registerPlugin(ScrollTrigger)

export function Services() {
  const [activeFilter, setActiveFilter] = useState('ALL')
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedService, setSelectedService] = useState('Performance Marketing')
  const location = useLocation()

  // Scroll to anchor on load / navigation from index links or homepage
  useEffect(() => {
    const hash = location.hash.replace('#', '')
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 150)
    }
  }, [location.hash])

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-enter', { y: 42, opacity: 0, duration: .8, stagger: .1, ease: 'power3.out', delay: .15 })
      gsap.utils.toArray('.reveal').forEach((el) => {
        gsap.from(el, { y: 40, opacity: 0, duration: .7, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 88%' } })
      })
    })
    return () => ctx.revert()
  }, [])

  const handleOpenModal = (serviceName) => {
    setSelectedService(serviceName)
    setModalOpen(true)
  }

  const scrollToPillar = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <>
      {/* 1. EDITORIAL SERVICES HERO */}
      <section className="min-h-[50svh] text-[#350c32] bg-[#f7f4f8] relative overflow-hidden px-5 sm:px-8 lg:px-12 pt-[120px] pb-16 flex flex-col items-center justify-center border-b border-[#cbc2cc]/30">
        <div className="absolute top-0 right-0 w-[45vw] h-[45vw] bg-[radial-gradient(circle_at_center,#674965_0%,transparent_70%)] opacity-10 blur-[120px] pointer-events-none"></div>

        <div className="relative z-10 max-w-[1240px] mx-auto text-left w-full">
          <span className="font-mono text-[14px] sm:text-[16px] tracking-[.15em] uppercase text-[#674965] block mb-4 hero-enter font-bold">
            OUR EXPERTISE
          </span>
          <h1 className="font-bold font-sans text-[clamp(2.8rem,7vw,6.5rem)] leading-[0.95] tracking-[-0.03em] m-0 text-[#350c32] hero-enter max-w-[900px]">
            Six capabilities.<br />One growth engine.
          </h1>
          <p className="max-w-[660px] leading-[1.65] text-[17px] sm:text-[19px] text-[#674965] mt-6 hero-enter font-normal">
            From brand strategy to performance campaigns and digital experiences, we combine creative thinking with execution built around measurable growth.
          </p>
        </div>
      </section>

      {/* 2. SERVICE INDEX / NAVIGATION (HORIZONTAL SCROLLABLE) */}
      <nav className="bg-[#f7f4f8]/90 backdrop-blur-md border-b border-[#cbc2cc]/40 py-4 px-5 sm:px-8 lg:px-12 sticky top-[72px] sm:top-[88px] z-30 shadow-xs">
        <div className="max-w-[1240px] mx-auto flex items-center gap-6 overflow-x-auto no-scrollbar py-1">
          <span className="font-mono text-[11px] text-[#998599] uppercase tracking-widest shrink-0 font-bold hidden sm:inline-block">
            INDEX:
          </span>
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            {servicesPillarsData.map((pillar) => (
              <button
                key={pillar.id}
                type="button"
                onClick={() => scrollToPillar(pillar.id)}
                className="font-mono text-[12px] sm:text-[13px] font-semibold text-[#350c32] hover:text-[#1b0619] bg-white hover:bg-[#cbc2cc]/30 border border-[#cbc2cc]/40 px-4 py-2 rounded-full transition-all whitespace-nowrap cursor-pointer"
              >
                <span>{pillar.number} {pillar.title.split('&')[0]}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* 3. SIX VERTICAL SERVICE PILLARS (DEEP DIVE CHAPTERS) */}
      <div className="services-container">
        {servicesPillarsData.map((pillar, index) => {
          // Alternating background colors for chapter rhythm
          const bgColors = [
            'bg-[#f7f4f8]',
            'bg-[#f2edf3]'
          ]
          const currentBg = bgColors[index % bgColors.length]

          return (
            <ServicePillarChapter
              key={pillar.id}
              pillar={pillar}
              bgClass={currentBg}
              activeFilter={activeFilter}
              setActiveFilter={setActiveFilter}
              onOpenModal={handleOpenModal}
            />
          )
        })}
      </div>

      {/* 4. PRODUCTION HOUSES */}
      <section className="bg-[#f7f4f8] py-20 sm:py-24 px-5 sm:px-8 lg:px-12 border-b border-[#cbc2cc]/40">
        <div className="max-w-[1240px] mx-auto text-center">
          <span className="font-mono text-[12px] sm:text-[13px] tracking-[.15em] uppercase text-[#674965] block mb-3 font-bold">
            CINEMA PARTNERS
          </span>
          <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-bold text-[#350c32] tracking-tight mb-10">
            Production houses we work with.
          </h2>
          <LogoMarquee logos={productionHouses} />
        </div>
      </section>

      {/* 5. FINAL LEAD GENERATION CTA */}
      <section className="bg-[#1b0619] text-white py-28 sm:py-36 px-5 sm:px-8 lg:px-12 text-center relative overflow-hidden" id="contact-us">
        <div className="max-w-[800px] mx-auto relative z-10 flex flex-col items-center">
          <span className="font-mono text-[12px] tracking-[.15em] uppercase text-[#cbc2cc] block mb-4 font-bold">
            LET'S WORK TOGETHER
          </span>
          <h2 className="text-[clamp(2.2rem,5.5vw,4.2rem)] font-bold tracking-tight mb-6 leading-[1.05]">
            LET'S BUILD SOMETHING<br />PEOPLE NOTICE.
          </h2>
          <p className="text-[#cbc2cc] text-[17px] sm:text-[18px] max-w-[580px] mb-10 leading-relaxed">
            Tell us about your brand, your franchise, or your next release. We’ll get back within one business day.
          </p>
          <button
            type="button"
            onClick={() => handleOpenModal("Performance Marketing")}
            className="px-9 py-4 bg-white text-[#350c32] hover:bg-[#f7f4f8] active:scale-95 text-[15px] font-bold rounded-full transition-all duration-200 shadow-xl inline-flex items-center gap-3 cursor-pointer"
          >
            <span>START A CONVERSATION →</span>
          </button>
        </div>
      </section>

      {/* Lead Form Modal */}
      <LeadFormModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultService={selectedService}
      />
    </>
  )
}

/* REUSABLE CHAPTER COMPONENT FOR EACH SERVICE PILLAR (4-STEP ARCHITECTURE) */
function ServicePillarChapter({ pillar, bgClass, activeFilter, setActiveFilter, onOpenModal }) {
  // Filter project cards based on active segmented control filter
  const filteredProjects = pillar.projects.filter(proj => {
    if (activeFilter === 'ALL') return true
    if (activeFilter === 'CINEMA') return proj.category.includes('CINEMA')
    if (activeFilter === 'CORPORATE') return proj.category.includes('CORPORATE') || proj.category.includes('FRANCHISE')
    return true
  })

  return (
    <section
      id={pillar.id}
      className={`scroll-mt-[130px] py-24 sm:py-32 lg:py-40 px-5 sm:px-8 lg:px-12 border-b border-[#cbc2cc]/40 ${bgClass}`}
    >
      <div className="max-w-[1240px] mx-auto">
        
        {/* ================================================== */}
        {/* STEP 01 — HEADER + CORE PROMISE                    */}
        {/* ================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-16 sm:mb-24 reveal">
          {/* LEFT: Pillar Number & Large Editorial Title */}
          <div className="lg:col-span-7">
            <span className="font-mono text-[12px] sm:text-[13px] font-bold tracking-[.15em] uppercase text-[#674965] block mb-3">
              {pillar.category}
            </span>
            <h2 className="text-[clamp(2.5rem,5.5vw,4.5rem)] font-bold text-[#350c32] tracking-tight leading-[1.02]">
              {pillar.title}
            </h2>
          </div>

          {/* RIGHT: Overview / Core Promise */}
          <div className="lg:col-span-5 lg:pt-8">
            <p className="text-[18px] sm:text-[21px] leading-[1.5] text-[#350c32] font-semibold mb-4">
              "{pillar.tagline}"
            </p>
            <p className="text-[16px] sm:text-[17px] leading-[1.65] text-[#674965] font-normal">
              {pillar.overview}
            </p>
          </div>
        </div>

        {/* ================================================== */}
        {/* STEP 02 — SUB-SERVICES INCLUDED (EDITORIAL LIST)   */}
        {/* ================================================== */}
        <div className="mb-20 sm:mb-28 reveal">
          <div className="border-b-2 border-[#350c32] pb-3 mb-6 flex items-center justify-between">
            <h3 className="font-mono text-[13px] uppercase tracking-[.15em] text-[#350c32] font-bold">
              SUB-SERVICES INCLUDED
            </h3>
            <span className="font-mono text-[11px] text-[#998599] uppercase tracking-wider">
              {pillar.subServices.length} DELIVERABLES
            </span>
          </div>

          {/* Editorial Full-Width List with Thin Dividers */}
          <div className="divide-y divide-[#cbc2cc]/40 border-b border-[#cbc2cc]/40">
            {pillar.subServices.map((sub) => (
              <div
                key={sub.num}
                className="py-6 sm:py-8 grid grid-cols-1 md:grid-cols-12 gap-4 items-center group hover:bg-black/2 transition-colors px-2 rounded-lg reveal"
              >
                <div className="md:col-span-1 font-mono text-[14px] font-bold text-[#674965]">
                  {sub.num}
                </div>
                <div className="md:col-span-5 text-[18px] sm:text-[20px] font-bold text-[#350c32] group-hover:text-[#1b0619] transition-colors">
                  {sub.name}
                </div>
                <div className="md:col-span-5 text-[14px] sm:text-[15px] text-[#674965] leading-relaxed">
                  {sub.desc}
                </div>
                <div className="hidden md:flex md:col-span-1 justify-end text-[#998599] group-hover:text-[#350c32] transition-colors">
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================================================== */}
        {/* STEP 03 — LIVE PROJECT PROOF (PROOF IN PRACTICE)   */}
        {/* ================================================== */}
        <div className="mb-20 sm:mb-24 reveal">
          
          {/* Header & Filter Switcher */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 pb-4 border-b border-[#cbc2cc]/40">
            <div>
              <span className="font-mono text-[11px] sm:text-[12px] uppercase tracking-[.15em] text-[#674965] font-bold block mb-1">
                LIVE PROJECTS
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#350c32]">
                PROOF IN PRACTICE
              </h3>
            </div>

            {/* Optional Minimal Segmented Control Filter */}
            <div className="flex items-center bg-[#cbc2cc]/25 p-1 rounded-full border border-[#cbc2cc]/40 self-start sm:self-auto">
              {['ALL', 'CORPORATE', 'CINEMA'].map((filterOption) => (
                <button
                  key={filterOption}
                  type="button"
                  onClick={() => setActiveFilter(filterOption)}
                  className={`px-4 py-1.5 rounded-full font-mono text-[11px] font-bold tracking-wider uppercase transition-all cursor-pointer ${
                    activeFilter === filterOption
                      ? 'bg-[#350c32] text-white shadow-xs'
                      : 'text-[#674965] hover:text-[#350c32]'
                  }`}
                >
                  {filterOption}
                </button>
              ))}
            </div>
          </div>

          {/* 2 Large Project Proof Cards (50% / 50% Desktop Layout, Min-height 500-600px) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, pIdx) => (
                <article
                  key={pIdx}
                  className="group bg-[#ffffff] border border-[#cbc2cc]/60 hover:border-[#350c32]/60 rounded-[24px] sm:rounded-[28px] overflow-hidden flex flex-col justify-between md:min-h-[580px] shadow-sm hover:shadow-xl transition-all duration-500 reveal"
                >
                  {/* TOP: Project Visual (Occupies ~55-65% of card height) */}
                  <div className="w-full h-[280px] sm:h-[340px] overflow-hidden relative bg-[#1b0619]">
                    <img
                      src={project.image || "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80"}
                      alt={project.imageAlt || project.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-104 filter grayscale-[20%] group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1b0619]/60 via-transparent to-transparent pointer-events-none"></div>

                    <span className="absolute top-4 left-4 font-mono text-[11px] tracking-widest uppercase font-bold text-white bg-[#1b0619]/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20">
                      {project.category}
                    </span>
                  </div>

                  {/* BOTTOM: Category, Dominant Result Metric & Client */}
                  <div className="p-6 sm:p-8 flex flex-col justify-between flex-1 bg-white">
                    <div>
                      {/* Dominant Metric */}
                      {project.result && (
                        <div className="flex items-baseline gap-3 mb-2">
                          <div className="text-[clamp(2.8rem,5vw,4.2rem)] font-black text-[#350c32] leading-none tracking-tight">
                            {project.result}
                          </div>
                          <div className="text-[14px] font-mono uppercase tracking-wider text-[#674965] font-bold">
                            {project.resultLabel}
                          </div>
                        </div>
                      )}

                      <h4 className="text-xl sm:text-2xl font-bold text-[#350c32] mb-2 leading-snug">
                        {project.title}
                      </h4>

                      <p className="text-[14px] text-[#674965] leading-relaxed mb-4">
                        {project.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-[#cbc2cc]/40 flex items-center justify-between">
                      {project.client ? (
                        <span className="font-mono text-[12px] font-semibold text-[#998599] uppercase">
                          Client: <strong className="text-[#350c32]">{project.client}</strong>
                        </span>
                      ) : <span />}

                      <button
                        type="button"
                        onClick={() => onOpenModal(pillar.formService || pillar.title)}
                        className="inline-flex items-center gap-1.5 font-mono text-[12px] font-bold text-[#350c32] group-hover:translate-x-1 transition-transform cursor-pointer"
                      >
                        <span>Scale Your Brand With Us</span>
                        <ArrowUpRight size={16} />
                      </button>
                    </div>
                  </div>
                </article>
              ))
            ) : (
              <div className="col-span-2 py-12 px-6 bg-white rounded-2xl border border-[#cbc2cc]/40 text-center text-[#674965] font-mono text-[14px]">
                No verified project proofs found matching "{activeFilter}" for this vertical.
              </div>
            )}
          </div>
        </div>

        {/* ================================================== */}
        {/* STEP 04 — DEDICATED SERVICE CTA                    */}
        {/* ================================================== */}
        <div className="pt-6 border-t border-[#cbc2cc]/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 reveal">
          <div>
            <h4 className="text-xl sm:text-2xl font-bold text-[#350c32]">
              Ready to execute this capability for your brand?
            </h4>
            <p className="text-[14px] sm:text-[15px] text-[#674965]">
              Get a customized playbook and execution roadmap for {pillar.title}.
            </p>
          </div>

          <button
            type="button"
            onClick={() => onOpenModal(pillar.formService || pillar.title)}
            className="px-8 py-4 bg-[#350c32] hover:bg-[#280926] active:scale-95 text-white font-mono text-[13px] font-bold rounded-full transition-all shadow-md inline-flex items-center gap-3 cursor-pointer shrink-0"
          >
            <span>{pillar.ctaLabel || `EXPLORE ${pillar.title.toUpperCase()} →`}</span>
          </button>
        </div>

      </div>
    </section>
  )
}
