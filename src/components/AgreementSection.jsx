import React from 'react'

export function AgreementSection({ agreementData }) {
  return (
    <section className="py-16 px-5 sm:px-8 lg:px-12 bg-[#f7f4f8] text-[#350c32] border-t border-[#cbc2cc]/40">
      <div className="max-w-[1000px] mx-auto bg-white rounded-3xl p-8 sm:p-12 border border-[#cbc2cc]/40 shadow-sm text-center">
        <span className="font-mono text-[11px] tracking-[.1em] uppercase text-[#674965] font-semibold mb-3 block">
          AGREEMENT & MOU ARCHITECTURE
        </span>
        <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#350c32] mb-4">
          Client Terms & MOU Framework
        </h3>
        <p className="text-[#674965] text-sm sm:text-base max-w-[640px] mx-auto leading-relaxed mb-6">
          {agreementData?.summary || "This modular section is prepared for immediate client agreement drop-in upon finalization of legal and service terms."}
        </p>
        <div className="inline-flex items-center gap-2 font-mono text-[12px] text-[#998599] bg-[#f7f4f8] px-4 py-2 rounded-full border border-[#cbc2cc]/40">
          <span>Status: Modular Component Ready for Client Terms</span>
        </div>
      </div>
    </section>
  )
}
