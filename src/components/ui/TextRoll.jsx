export function TextRoll({ label }) {
  return (
    <div className="h-[20px] overflow-hidden relative flex flex-col justify-start select-none pointer-events-none">
      <span className="inline-block transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-translate-y-[20px]">
        {label}
      </span>
      <span className="inline-block transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-translate-y-[20px] absolute top-[20px] left-0">
        {label}
      </span>
    </div>
  );
}
