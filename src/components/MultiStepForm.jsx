import { useState } from 'react'
import { serviceOptions, budgetOptions } from '../data/content'

export function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedBudget, setSelectedBudget] = useState("");
  const [details, setDetails] = useState({ name: "", email: "", phone: "", company: "", project: "" });

  const toggleService = (srv) => {
    setSelectedServices(prev =>
      prev.includes(srv) ? prev.filter(s => s !== srv) : [...prev, srv]
    );
  };

  const nextStep = () => setStep(s => Math.min(s + 1, 3));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  const steps = [
    { num: 1, label: "SERVICES" },
    { num: 2, label: "BUDGET" },
    { num: 3, label: "DETAILS" }
  ];

  return (
    <div className="pt-[15px] w-full max-w-[600px] form-container">

      {/* Progress Header */}
      <div className="flex items-center justify-between mb-[30px] max-[760px]:mb-[20px] relative">
        <div className="absolute left-[20px] right-[20px] top-1/2 -translate-y-1/2 h-[1px] bg-ink/10 -z-10"></div>
        {steps.map(s => (
          <div key={s.num} className="flex items-center gap-[8px] bg-[#cbc2cc]/30 px-[12px] py-[4px] cursor-pointer rounded-md" onClick={() => step > s.num && setStep(s.num)}>
            <div className={`w-[24px] h-[24px] rounded-full flex items-center justify-center text-[11px] font-bold transition-colors ${step >= s.num ? 'bg-ink text-white shadow-sm' : 'bg-ink/5 text-ink/40'}`}>
              {s.num}
            </div>
            <span className={`text-[12px] font-semibold tracking-wide max-[500px]:hidden ${step >= s.num ? 'text-ink' : 'text-ink/40'}`}>{s.label}</span>
          </div>
        ))}
      </div>

      {/* Form Card */}
      <div className="bg-[#fdfeff] rounded-[24px] p-[40px] max-[760px]:p-[24px] text-ink relative shadow-xl min-h-[420px] flex flex-col border border-[#cbc2cc]/30">

        {step === 1 && (
          <div className="flex-1 flex flex-col">
            <span className="text-[11px] font-mono font-bold text-[#674965] uppercase tracking-widest mb-[12px] block">STEP 1 OF 3</span>
            <h3 className="text-[28px] font-semibold mb-[8px] leading-tight text-[#280926]">What do you need?</h3>
            <p className="text-[14px] text-[#674965] mb-[32px]">Pick everything that applies — mix and match freely.</p>

            <div className="flex flex-wrap gap-[12px] mb-auto">
              {serviceOptions.map(srv => (
                <button
                  key={srv}
                  onClick={() => toggleService(srv)}
                  className={`px-[20px] py-[12px] rounded-full border text-[13px] font-medium transition-all cursor-pointer ${selectedServices.includes(srv) ? 'border-[#674965] bg-[#674965] text-[#fdfeff] shadow-md' : 'border-[#cbc2cc] text-[#674965] hover:border-[#674965]'}`}
                >
                  {srv}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="flex-1 flex flex-col">
            <span className="text-[11px] font-mono font-bold text-[#674965] uppercase tracking-widest mb-[12px] block">STEP 2 OF 3</span>
            <h3 className="text-[28px] font-semibold mb-[8px] leading-tight text-[#280926]">What's your budget?</h3>
            <p className="text-[14px] text-[#674965] mb-[32px]">Select a range that fits your project goals.</p>

            <div className="flex flex-wrap gap-[12px] mb-auto">
              {budgetOptions.map(bdg => (
                <button
                  key={bdg}
                  onClick={() => setSelectedBudget(bdg)}
                  className={`px-[24px] py-[16px] rounded-[12px] border text-[14px] font-medium transition-all w-[calc(50%-6px)] max-[760px]:w-full text-left flex items-center cursor-pointer ${selectedBudget === bdg ? 'border-[#674965] bg-[#cbc2cc]/10 shadow-sm' : 'border-[#cbc2cc] text-[#674965] hover:border-[#674965]'}`}
                >
                  <div className={`w-[18px] h-[18px] rounded-full border-2 shrink-0 mr-[12px] transition-all ${selectedBudget === bdg ? 'border-[#674965] bg-[#674965]' : 'border-[#cbc2cc]'}`} style={{boxShadow: selectedBudget === bdg ? 'inset 0 0 0 3px white' : 'none'}}></div>
                  {bdg}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="flex-1 flex flex-col">
            <span className="text-[11px] font-mono font-bold text-[#674965] uppercase tracking-widest mb-[12px] block">STEP 3 OF 3</span>
            <h3 className="text-[28px] font-semibold mb-[8px] leading-tight text-[#280926]">Let's get the details.</h3>
            <p className="text-[14px] text-[#674965] mb-[32px]">How can we reach you?</p>

            <div className="grid grid-cols-2 gap-[16px] max-[760px]:grid-cols-1 mb-auto">
              <input value={details.name} onChange={e => setDetails(d => ({...d, name: e.target.value}))} className="bg-[#fdfeff] border border-[#cbc2cc] text-[#350c32] px-[18px] py-[14px] rounded-[12px] outline-none focus:border-[#674965] transition-colors text-[14px]" placeholder="Full Name" />
              <input value={details.email} onChange={e => setDetails(d => ({...d, email: e.target.value}))} className="bg-[#fdfeff] border border-[#cbc2cc] text-[#350c32] px-[18px] py-[14px] rounded-[12px] outline-none focus:border-[#674965] transition-colors text-[14px]" placeholder="Email Address" />
              <input value={details.phone} onChange={e => setDetails(d => ({...d, phone: e.target.value}))} className="bg-[#fdfeff] border border-[#cbc2cc] text-[#350c32] px-[18px] py-[14px] rounded-[12px] outline-none focus:border-[#674965] transition-colors text-[14px]" placeholder="Phone Number" />
              <input value={details.company} onChange={e => setDetails(d => ({...d, company: e.target.value}))} className="bg-[#fdfeff] border border-[#cbc2cc] text-[#350c32] px-[18px] py-[14px] rounded-[12px] outline-none focus:border-[#674965] transition-colors text-[14px]" placeholder="Company (Optional)" />
              <textarea value={details.project} onChange={e => setDetails(d => ({...d, project: e.target.value}))} className="bg-[#fdfeff] border border-[#cbc2cc] text-[#350c32] px-[18px] py-[14px] rounded-[12px] outline-none focus:border-[#674965] transition-colors text-[14px] col-span-2 max-[760px]:col-span-1 min-h-[100px] resize-y" placeholder="Tell us more about your project..." />
            </div>
          </div>
        )}

        {/* Footer Actions */}
        <div className="mt-[40px] pt-[24px] border-t border-[#cbc2cc]/40 flex justify-between items-center">
          {step > 1 ? (
            <button onClick={prevStep} className="text-[14px] font-bold text-[#674965] hover:text-[#280926] transition-colors cursor-pointer">← Back</button>
          ) : (<div></div>)}

          <button
            onClick={step === 3 ? () => alert('Message Sent!') : nextStep}
            className="bg-[#cbc2cc]/40 hover:bg-[#cbc2cc]/60 text-[#280926] px-[28px] py-[14px] rounded-full text-[14px] font-bold flex items-center gap-[8px] transition-colors ml-auto shadow-sm cursor-pointer"
          >
            {step === 3 ? 'Send Message' : 'Next'}
            {step < 3 && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>}
          </button>
        </div>
      </div>
    </div>
  );
}
