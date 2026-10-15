import { useState, useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MapPin, Mail, Phone, Clock, Send, CheckCircle2 } from 'lucide-react'
import { serviceOptions, budgetOptions } from '../data/content'
import { FaqSection } from '../components/FaqSection'

gsap.registerPlugin(ScrollTrigger)

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'Performance Marketing',
    budget: '₹1L - ₹3L',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-enter', { y: 42, opacity: 0, duration: .8, stagger: .1, ease: 'power3.out', delay: .15 })
      gsap.utils.toArray('.reveal').forEach((el) => {
        gsap.from(el, { y: 44, opacity: 0, duration: .75, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 88%' } })
      })
    })
    return () => ctx.revert()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 800)
  }

  return (
    <>
      {/* 1. HERO SECTION */}
      <section className="min-h-[45svh] text-[#350c32] bg-[#f7f4f8] relative overflow-hidden px-5 sm:px-8 lg:px-12 pt-[120px] pb-16 flex flex-col items-center justify-center border-b border-[#cbc2cc]/30">
        <div className="absolute top-0 right-0 w-[45vw] h-[45vw] bg-[radial-gradient(circle_at_center,#674965_0%,transparent_70%)] opacity-10 blur-[120px] pointer-events-none"></div>

        <div className="relative z-10 max-w-[1240px] mx-auto text-left w-full">
          <h1 className="font-bold font-sans text-[clamp(2.8rem,7vw,6.5rem)] leading-[0.95] tracking-[-0.03em] m-0 text-[#350c32] hero-enter max-w-[900px]">
            Start a conversation.<br />Build something people notice.
          </h1>
          <p className="max-w-[660px] leading-[1.65] text-[17px] sm:text-[19px] text-[#674965] mt-6 hero-enter font-normal">
            Tell us about your brand, your franchise, or your next release. We’ll review your goals and get back within one business day.
          </p>
        </div>
      </section>

      {/* 2. CONTACT DETAILS & FORM SECTION */}
      <section className="py-20 lg:py-28 px-5 sm:px-8 lg:px-12 bg-white text-[#350c32] relative z-10">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Contact Cards & Info */}
            <div className="lg:col-span-5 flex flex-col gap-8 reveal">
              <div>
                <span className="font-mono text-[14px] sm:text-[16px] tracking-[0.12em] uppercase font-bold text-[#674965] block mb-3">
                  REACH US DIRECTLY
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#350c32] mb-4">
                  We're right here in Hyderabad.
                </h2>
                <p className="text-[16px] leading-[1.65] text-[#674965]">
                  Whether you want to drive retail walk-ins or make a movie trend across regional social networks, our team is ready to execute.
                </p>
              </div>

              {/* Info Cards */}
              <div className="flex flex-col gap-4">
                <div className="p-6 bg-[#f7f4f8] border border-[#cbc2cc]/40 rounded-2xl flex items-start gap-4 transition-all hover:border-[#350c32]/40">
                  <div className="w-11 h-11 rounded-xl bg-[#350c32] text-white flex items-center justify-center shrink-0">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#350c32] text-[16px]">Headquarters</h3>
                    <p className="text-[14px] text-[#674965] mt-1 leading-relaxed">
                      Vidhara Digital Agency<br />Banjara Hills, Hyderabad, Telangana — 500034
                    </p>
                  </div>
                </div>

                <div className="p-6 bg-[#f7f4f8] border border-[#cbc2cc]/40 rounded-2xl flex items-start gap-4 transition-all hover:border-[#350c32]/40">
                  <div className="w-11 h-11 rounded-xl bg-[#350c32] text-white flex items-center justify-center shrink-0">
                    <Mail size={22} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#350c32] text-[16px]">Email Us</h3>
                    <a href="mailto:hello@vidhara.com" className="text-[14px] text-[#674965] hover:text-[#350c32] font-semibold mt-1 block">
                      hello@vidhara.com
                    </a>
                  </div>
                </div>

                <div className="p-6 bg-[#f7f4f8] border border-[#cbc2cc]/40 rounded-2xl flex items-start gap-4 transition-all hover:border-[#350c32]/40">
                  <div className="w-11 h-11 rounded-xl bg-[#350c32] text-white flex items-center justify-center shrink-0">
                    <Phone size={22} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#350c32] text-[16px]">Direct Call</h3>
                    <a href="tel:+919876543210" className="text-[14px] text-[#674965] hover:text-[#350c32] font-semibold mt-1 block">
                      +91 98765 43210
                    </a>
                  </div>
                </div>

                <div className="p-6 bg-[#1b0619] text-white rounded-2xl flex items-start gap-4 border border-white/10">
                  <div className="w-11 h-11 rounded-xl bg-[#674965]/40 text-[#cbc2cc] flex items-center justify-center shrink-0">
                    <Clock size={22} />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-[16px]">Response Guarantee</h3>
                    <p className="text-[14px] text-[#cbc2cc] mt-1 leading-relaxed">
                      We respond to all verified briefs within 24 hours during business days.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Consultation Form */}
            <div className="lg:col-span-7 bg-[#0d030d] text-white rounded-[28px] sm:rounded-[36px] p-8 sm:p-12 border border-white/10 shadow-2xl reveal">
              {submitted ? (
                <div className="text-center py-12 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-6">
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">Brief Received!</h3>
                  <p className="text-[#cbc2cc] max-w-[440px] text-[15px] leading-relaxed mb-8">
                    Thank you, <span className="text-white font-semibold">{formData.name}</span>. Our growth team is reviewing your project details and will be in touch shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false)
                      setFormData({ name: '', email: '', phone: '', company: '', service: 'Performance Marketing', budget: '₹1L - ₹3L', message: '' })
                    }}
                    className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full text-[14px] font-semibold transition-colors cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">Send us a brief</h3>
                    <p className="text-[#cbc2cc] text-[14px]">Fill out the details below and we'll engineer a custom strategy.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[12px] font-mono tracking-wider uppercase text-[#cbc2cc] mb-2 font-semibold">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Rahul Reddy"
                        className="w-full bg-[#1b0619] border border-white/15 focus:border-white rounded-xl px-4 py-3 text-[14px] text-white outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[12px] font-mono tracking-wider uppercase text-[#cbc2cc] mb-2 font-semibold">Brand / Company</label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Cult.fit / Independent Film"
                        className="w-full bg-[#1b0619] border border-white/15 focus:border-white rounded-xl px-4 py-3 text-[14px] text-white outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[12px] font-mono tracking-wider uppercase text-[#cbc2cc] mb-2 font-semibold">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="rahul@example.com"
                        className="w-full bg-[#1b0619] border border-white/15 focus:border-white rounded-xl px-4 py-3 text-[14px] text-white outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[12px] font-mono tracking-wider uppercase text-[#cbc2cc] mb-2 font-semibold">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full bg-[#1b0619] border border-white/15 focus:border-white rounded-xl px-4 py-3 text-[14px] text-white outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[12px] font-mono tracking-wider uppercase text-[#cbc2cc] mb-2 font-semibold">Primary Service Interest</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-[#1b0619] border border-white/15 focus:border-white rounded-xl px-4 py-3 text-[14px] text-white outline-none transition-colors cursor-pointer"
                    >
                      {serviceOptions.map((svc) => (
                        <option key={svc} value={svc} className="bg-[#1b0619] text-white">
                          {svc}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[12px] font-mono tracking-wider uppercase text-[#cbc2cc] mb-2 font-semibold">Estimated Monthly Budget</label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {budgetOptions.map((b) => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => setFormData({ ...formData, budget: b })}
                          className={`py-2.5 px-3 rounded-xl text-[13px] font-mono transition-all border cursor-pointer ${
                            formData.budget === b
                              ? 'bg-white text-[#350c32] font-bold border-white'
                              : 'bg-[#1b0619] text-[#cbc2cc] border-white/15 hover:border-white/30'
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-[12px] font-mono tracking-wider uppercase text-[#cbc2cc] mb-2 font-semibold">Project Brief / Goals</label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your target goals, locations, timeline, or upcoming film release..."
                      className="w-full bg-[#1b0619] border border-white/15 focus:border-white rounded-xl px-4 py-3 text-[14px] text-white outline-none transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 bg-white text-[#350c32] hover:bg-[#f7f4f8] active:scale-[0.99] rounded-xl text-[15px] font-bold transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer mt-2 disabled:opacity-70"
                  >
                    {loading ? (
                      <span>Sending Brief...</span>
                    ) : (
                      <>
                        <span>SEND BRIEF TO VIDHARA</span>
                        <Send size={16} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* 3. FAQ INTEGRATION */}
      <FaqSection />
    </>
  )
}
