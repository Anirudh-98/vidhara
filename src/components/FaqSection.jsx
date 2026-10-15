import { useState } from 'react'
import { faqs } from '../data/content'

function FaqItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-[#cbc2cc]/40 py-[28px]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left focus:outline-none group cursor-pointer"
      >
        <h3 className="text-[18px] font-medium text-[#350c32] pr-[20px] group-hover:text-[#674965] transition-colors">{question}</h3>
        <div className={`shrink-0 w-[36px] h-[36px] rounded-full border flex items-center justify-center transition-all duration-300 ${isOpen ? 'rotate-180 bg-[#350c32] text-white border-[#350c32] shadow-md' : 'text-[#350c32] border-[#350c32]/20 group-hover:border-[#674965]'}`}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[300px] mt-[20px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="text-[15px] leading-[1.6] text-[#674965] pr-[40px]">{answer}</p>
      </div>
    </div>
  );
}

export function FaqSection() {
  return (
    <section className="py-[120px] px-5 sm:px-8 lg:px-12 bg-white text-ink relative z-10 faq" id="faq">
      <div className="max-w-[1240px] mx-auto text-left">
        <p className="font-mono text-[14px] sm:text-[16px] tracking-[.12em] uppercase font-bold text-[#998599] mb-[20px] text-left">FAQ</p>
        <h2 className="text-[clamp(40px,5vw,72px)] font-bold leading-[.95] tracking-[-0.02em] text-left mb-[60px] text-[#350c32]">Got questions?</h2>
        <div className="border-t border-[#cbc2cc]/40 max-w-[960px]">
          {faqs.map((faq, i) => (
            <FaqItem key={i} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}
