import { useLayoutEffect } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MapPin, Sparkles, BarChart2, Flame, Compass, LineChart, Languages, Ban } from 'lucide-react'
import { stats, values, timeline, whyUs } from '../data/content'

gsap.registerPlugin(ScrollTrigger)

const kickerClass = "font-mono text-[14px] sm:text-[16px] tracking-[.12em] uppercase font-bold mb-[24px] kicker"
const monoDisplayClass = "text-[clamp(43px,6vw,87px)] max-[760px]:text-[43px] font-medium tracking-[-0.02em] leading-[.94] m-0 mono-display reveal"
const solidBtnClass = "px-[20px] py-[15px] inline-flex gap-[22px] items-center text-[13px] transition-transform duration-200 bg-paper text-ink hover:-translate-y-[3px] rounded-full solid-btn cursor-pointer"
const ghostBtnClass = "py-[5px] inline-flex gap-[22px] items-center text-[13px] transition-transform duration-200 border-b border-current hover:-translate-y-[3px] ghost-btn cursor-pointer"

const valueIcons = [Compass, LineChart, Languages, Ban]
const whyIcons = [MapPin, Sparkles]

export function About() {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-enter', { y: 42, opacity: 0, duration: .8, stagger: .1, ease: 'power3.out', delay: .15 })
      gsap.utils.toArray('.reveal').forEach((el) => gsap.from(el, { y: 48, opacity: 0, duration: .75, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 88%' } }))
      gsap.utils.toArray('.timeline-item').forEach((el, i) => gsap.from(el, { x: -24, opacity: 0, duration: .6, delay: i * .05, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 90%' } }))
      gsap.utils.toArray('.stat-num').forEach(el => {
        const target = parseFloat(el.getAttribute('data-target'))
        gsap.fromTo(el, { innerHTML: 0 }, { innerHTML: target, duration: 2.5, ease: "power3.out", snap: { innerHTML: 1 }, scrollTrigger: { trigger: el, start: "top 90%" } })
      })
    })
    return () => ctx.revert()
  }, [])

  return <>
    <section className="min-h-[70svh] text-paper bg-ink relative overflow-hidden px-[4.7vw] max-[760px]:px-[23px] pt-[75px] flex flex-col after:content-[''] after:absolute after:-right-[12vw] after:-bottom-[24vw] after:w-[min(42vw,600px)] after:aspect-square after:rounded-full after:bg-[radial-gradient(circle_at_35%_35%,#a9699b,#77476e_28%,#42143d_60%,#250521)] after:opacity-80 after:blur-[1px] after:z-[1]">
      <div className="relative z-10 max-w-[1200px] my-auto text-left py-[10vh] max-[760px]:py-[9vh]">
        <p className={`${kickerClass} text-[#d6bfd3] !mb-[16px] hero-enter`}>ABOUT VIDHARA</p>
        <h1 className="font-medium font-sans text-[clamp(44px,7vw,100px)] max-[760px]:text-[clamp(48px,13vw,72px)] leading-[.94] tracking-[-0.02em] m-0 hero-enter">Local pulse.<br/>Corporate precision.</h1>
        <p className="max-w-[520px] leading-[1.6] text-[15px] text-[#eaddea] mt-[28px] hero-enter">
          Vidhara is a digital marketing and promotions agency based in Hyderabad, built to bridge structured corporate metrics with the raw energy of regional Indian culture.
        </p>
        <div className="flex items-center gap-[25px] mt-[25px] max-[760px]:flex-wrap hero-enter">
          <Link className={solidBtnClass} to="/services">See Our Services</Link>
          <a className={ghostBtnClass} href="/#contact-us">Get a Consultation</a>
        </div>
      </div>
    </section>

    <section className="bg-[#f7f4f8] text-ink py-[120px] px-[4.7vw] max-[760px]:py-[80px] max-[760px]:px-[24px] relative z-10">
      <div className="max-w-[1300px] mx-auto">
        <div className="flex max-[1024px]:flex-col gap-[6vw] max-[1024px]:gap-[50px] items-stretch reveal">
          <div className="w-[42%] max-[1024px]:w-full shrink-0 rounded-[32px] overflow-hidden min-h-[560px] max-[1024px]:min-h-[380px] bg-[#1b0619] border border-[#674965]/30 p-[40px] max-[760px]:p-[28px] flex flex-col justify-between relative shadow-[0_16px_48px_rgba(38,5,36,0.15)] group">
            <img
              src="/images/about/vidhara-team-hyderabad.webp"
              alt="Vidhara Digital marketing team collaborating in their Hyderabad office"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1b0619] via-[#1b0619]/25 to-transparent pointer-events-none"></div>
            <div className="relative z-10 my-auto"></div>
            <div className="relative z-10 pt-[20px] border-t border-[#674965]/30 flex justify-between items-center text-[12px] font-mono text-[#cbc2cc] tracking-widest uppercase">
              <span>Vidhara Digital</span>
              <span>HYD • IN</span>
            </div>
          </div>
          <div className="w-[58%] max-[1024px]:w-full flex flex-col justify-center">
            <span className="font-mono text-[14px] sm:text-[16px] tracking-[.12em] uppercase font-bold text-[#674965] mb-[24px] block">01 — OUR STORY</span>
            <h2 className={`${monoDisplayClass} mb-[32px]`}>Why we exist.</h2>
            <div className="flex flex-col gap-[20px]">
              <p className="text-[16px] leading-[1.7] text-[#674965] m-0">We started Vidhara because we kept seeing the same failure: national agencies parachuting generic campaigns into regional markets, and regional operators running ads with no measurement discipline at all. Neither side spoke to how people actually behave in Hyderabad, in a mall, in a theater queue, or scrolling a Telugu meme page at 11pm.</p>
              <p className="text-[16px] leading-[1.7] text-[#674965] m-0">So we built an agency that refuses to pick a lane. We run performance marketing with the rigor a franchise CFO expects — cost-per-lead, cost-per-walk-in, ROAS — and in the same week, we can turn around native, trending content built for the exact rhythm of Telugu social media. That dual fluency is the whole business.</p>
              <p className="text-[16px] leading-[1.7] text-[#674965] m-0">Today we work across two industries that look nothing alike on the surface — franchise & retail scaling, and cinema & entertainment promotions — but both come down to the same discipline: understanding hyper-local behavior well enough to move it.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-[#0d030d] border-y border-white/5 py-[50px] px-[4.7vw] max-[760px]:px-[24px] relative z-20">
      <div className="max-w-[1000px] mx-auto flex flex-wrap justify-between gap-[30px] max-[760px]:grid max-[760px]:grid-cols-2">
        {stats.map(({ value, suffix, label }) => (
          <div key={label} className="text-center reveal">
            <div className="text-[clamp(36px,5vw,64px)] font-medium font-sans text-[#fdfeff] leading-none mb-[12px]">
              <span className="stat-num" data-target={value}>0</span>
              <span>{suffix}</span>
            </div>
            <div className="text-[12px] font-mono text-[#cbc2cc] uppercase tracking-widest">{label}</div>
          </div>
        ))}
      </div>
    </section>

    <section className="px-[4.7vw] py-[130px] max-[760px]:py-[90px] max-[760px]:px-[24px] bg-white text-ink relative z-10">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-[70px] max-[760px]:mb-[45px]">
          <span className="font-mono text-[14px] sm:text-[16px] tracking-[.12em] uppercase font-bold text-[#674965] mb-[24px] block reveal">02 — WHAT WE STAND FOR</span>
          <h2 className={`${monoDisplayClass}`}>Our values, not our poster.</h2>
        </div>
        <div className="grid grid-cols-4 max-[1024px]:grid-cols-2 max-[600px]:grid-cols-1 gap-[24px]">
          {values.map((v, i) => {
            const Icon = valueIcons[i]
            return (
              <div key={v.title} className="reveal bg-[#cbc2cc]/10 border border-[#cbc2cc]/20 rounded-[24px] p-[32px] flex flex-col">
                <div className="w-[48px] h-[48px] rounded-full bg-white flex items-center justify-center shadow-sm mb-[24px] border border-[#cbc2cc]/30">
                  <Icon className="text-[#674965]" size={20} />
                </div>
                <h3 className="text-[19px] font-semibold mb-[12px] text-ink leading-tight">{v.title}</h3>
                <p className="text-[14px] leading-[1.6] text-[#674965]">{v.body}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>

    <section className="px-[4.7vw] py-[130px] max-[760px]:py-[90px] max-[760px]:px-[24px] bg-[#cbc2cc]/20 text-[#350c32] relative z-10 overflow-hidden">
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-[#cbc2cc]/10 rounded-full blur-[80px] opacity-70 -z-10 translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-[#cbc2cc]/10 rounded-full blur-[80px] opacity-60 -z-10 -translate-x-1/3 translate-y-1/3"></div>
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-[70px] max-[760px]:mb-[45px] flex flex-col items-center text-center">
          <span className="inline-block font-mono text-[11px] tracking-[.08em] uppercase text-[#674965] border border-[#cbc2cc]/40 rounded-full px-[16px] py-[8px] mb-[24px] reveal">03 — WHY US</span>
          <h2 className={`${monoDisplayClass} text-center reveal`}>The dual expertise nobody else has.</h2>
        </div>
        <div className="grid grid-cols-2 max-[760px]:grid-cols-1 gap-[24px]">
          {whyUs.map((w, i) => {
            const Icon = whyIcons[i]
            const dark = i === 1
            return (
              <div key={w.title} className={`group relative rounded-[32px] p-[48px] max-[760px]:p-[32px] transition-all duration-500 reveal overflow-hidden ${dark ? 'bg-[#280926] text-[#fdfeff] shadow-[0_16px_48px_rgba(38,5,36,0.15)]' : 'bg-[#fdfeff]/40 backdrop-blur-xl border border-[#cbc2cc]/40 hover:bg-[#fdfeff]/60 shadow-[0_8px_32px_rgba(116,70,111,0.04)]'}`}>
                {dark && <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[radial-gradient(circle_at_top_right,#674965,#280926_70%)] opacity-40 group-hover:opacity-70 transition-all duration-500 pointer-events-none"></div>}
                <div className={`w-[56px] h-[56px] rounded-full flex items-center justify-center mb-[32px] relative z-10 ${dark ? 'bg-[#1b0619] border border-[#674965]/50' : 'bg-white shadow-sm border border-[#cbc2cc]/40'}`}>
                  <Icon className={dark ? 'text-[#cbc2cc]' : 'text-[#674965]'} size={24} />
                </div>
                <h3 className={`text-[26px] max-[760px]:text-[22px] font-medium tracking-tight mb-[16px] leading-[1.2] relative z-10 ${dark ? 'text-white' : ''}`}>{w.title}</h3>
                <p className={`text-[15px] leading-[1.7] relative z-10 ${dark ? 'text-[#cbc2cc]' : 'text-[#674965]'}`}>{w.body}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>

    <section className="px-[4.7vw] py-[130px] max-[760px]:py-[90px] max-[760px]:px-[24px] bg-white text-ink relative z-10">
      <div className="max-w-[900px] mx-auto">
        <span className="font-mono text-[11px] tracking-[.08em] uppercase text-[#674965] mb-[24px] block reveal">04 — HOW WE GOT HERE</span>
        <h2 className={`${monoDisplayClass} mb-[70px] max-[760px]:mb-[50px]`}>Our journey so far.</h2>
        <div className="flex flex-col">
          {timeline.map((t, i) => (
            <div key={t.year} className="timeline-item flex gap-[32px] max-[600px]:gap-[18px] pb-[48px] last:pb-0">
              <div className="flex flex-col items-center shrink-0">
                <div className="w-[52px] h-[52px] max-[600px]:w-[42px] max-[600px]:h-[42px] rounded-full bg-[#280926] text-white flex items-center justify-center font-mono text-[12px] max-[600px]:text-[10px] shrink-0">{t.year}</div>
                {i < timeline.length - 1 && <div className="w-[2px] flex-1 bg-[#cbc2cc]/40 mt-[8px]"></div>}
              </div>
              <div className="pt-[10px]">
                <h3 className="text-[20px] font-semibold text-ink mb-[8px]">{t.title}</h3>
                <p className="text-[14px] leading-[1.6] text-[#674965] max-w-[520px]">{t.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-[#350c32] text-[#fdfeff] py-[110px] px-[4.7vw] max-[760px]:py-[80px] max-[760px]:px-[24px] relative z-10 overflow-hidden text-center">
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-[#674965] rounded-full blur-[100px] opacity-30 -z-10 translate-x-1/2 -translate-y-1/2"></div>
      <div className="max-w-[700px] mx-auto reveal">
        <h2 className={`${monoDisplayClass} !text-[clamp(36px,5vw,60px)] mb-[24px]`}>Want the full playbook?</h2>
        <p className="text-[15px] leading-[1.6] text-[#cbc2cc] mb-[36px]">See exactly what we do, service by service, for franchise & retail brands and for cinema releases.</p>
        <Link className={solidBtnClass} to="/services">Explore Our Services</Link>
      </div>
    </section>
  </>
}
