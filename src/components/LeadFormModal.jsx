import { useState, useEffect } from 'react'
import { X, Check, ArrowRight } from 'lucide-react'
import { serviceOptions } from '../data/content'

export function LeadFormModal({ isOpen, onClose, defaultService = "Performance Marketing" }) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    service: defaultService,
    projectType: 'Corporate',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  // Update pre-selected service when prop changes
  useEffect(() => {
    if (defaultService) {
      setFormData(prev => ({ ...prev, service: defaultService }))
    }
  }, [defaultService, isOpen])

  // Keyboard accessibility: Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  if (!isOpen) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      onClose()
    }, 2500)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-[#0d030d]/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-[620px] bg-[#fdfeff] border border-[#cbc2cc]/40 rounded-[28px] sm:rounded-[36px] shadow-2xl p-6 sm:p-10 z-10 text-[#350c32] animate-in fade-in zoom-in-95 duration-200 my-auto">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close form"
          className="absolute top-6 right-6 w-10 h-10 rounded-full bg-[#f7f4f8] hover:bg-[#cbc2cc]/30 text-[#350c32] flex items-center justify-center transition-colors cursor-pointer"
        >
          <X size={20} />
        </button>

        {submitted ? (
          <div className="py-12 text-center flex flex-col items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-[#350c32] text-white flex items-center justify-center mb-6 shadow-lg">
              <Check size={32} />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#350c32] mb-3">Conversation Started</h3>
            <p className="text-[#674965] text-base max-w-[380px]">
              Thank you! Our team will reach out to discuss your campaign within 24 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div>
              <span className="font-mono text-[11px] tracking-[.1em] uppercase text-[#674965] font-semibold block mb-2">
                START A CONVERSATION
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#350c32]">
                Let's build something people notice.
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[12px] font-mono uppercase text-[#674965] mb-1.5 font-medium">Full Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Rahul Reddy"
                  className="w-full bg-[#f7f4f8] border border-[#cbc2cc]/60 rounded-xl px-4 py-3 text-[14px] text-[#350c32] outline-none focus:border-[#350c32] focus:bg-white transition-all"
                />
              </div>

              <div>
                <label className="block text-[12px] font-mono uppercase text-[#674965] mb-1.5 font-medium">Company / Brand</label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={e => setFormData({ ...formData, company: e.target.value })}
                  placeholder="e.g. Cult.fit Franchise"
                  className="w-full bg-[#f7f4f8] border border-[#cbc2cc]/60 rounded-xl px-4 py-3 text-[14px] text-[#350c32] outline-none focus:border-[#350c32] focus:bg-white transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[12px] font-mono uppercase text-[#674965] mb-1.5 font-medium">Phone Number *</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={e => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+91 98765 43210"
                  className="w-full bg-[#f7f4f8] border border-[#cbc2cc]/60 rounded-xl px-4 py-3 text-[14px] text-[#350c32] outline-none focus:border-[#350c32] focus:bg-white transition-all"
                />
              </div>

              <div>
                <label className="block text-[12px] font-mono uppercase text-[#674965] mb-1.5 font-medium">Email Address *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@company.com"
                  className="w-full bg-[#f7f4f8] border border-[#cbc2cc]/60 rounded-xl px-4 py-3 text-[14px] text-[#350c32] outline-none focus:border-[#350c32] focus:bg-white transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-[12px] font-mono uppercase text-[#674965] mb-1.5 font-medium">Interested Service</label>
              <select
                value={formData.service}
                onChange={e => setFormData({ ...formData, service: e.target.value })}
                className="w-full bg-[#f7f4f8] border border-[#cbc2cc]/60 rounded-xl px-4 py-3 text-[14px] text-[#350c32] outline-none focus:border-[#350c32] focus:bg-white transition-all cursor-pointer"
              >
                {serviceOptions.map(srv => (
                  <option key={srv} value={srv}>{srv}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-[12px] font-mono uppercase text-[#674965] mb-1.5 font-medium">Project Type</label>
              <div className="flex gap-3">
                {['Corporate / Franchise', 'Cinema / Media', 'Other'].map(type => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setFormData({ ...formData, projectType: type })}
                    className={`flex-1 py-2.5 px-3 rounded-xl border text-[13px] font-medium transition-all cursor-pointer ${
                      formData.projectType === type
                        ? 'bg-[#350c32] text-white border-[#350c32] shadow-sm'
                        : 'bg-[#f7f4f8] text-[#674965] border-[#cbc2cc]/50 hover:border-[#350c32]'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-[12px] font-mono uppercase text-[#674965] mb-1.5 font-medium">Message / Goals</label>
              <textarea
                rows={3}
                value={formData.message}
                onChange={e => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell us about your locations, campaign dates, or target goals..."
                className="w-full bg-[#f7f4f8] border border-[#cbc2cc]/60 rounded-xl px-4 py-3 text-[14px] text-[#350c32] outline-none focus:border-[#350c32] focus:bg-white transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full mt-2 py-4 px-6 bg-[#350c32] hover:bg-[#280926] active:scale-[0.99] text-white font-semibold rounded-full flex items-center justify-center gap-3 transition-all duration-200 shadow-md cursor-pointer text-[15px]"
            >
              <span>START A CONVERSATION →</span>
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
