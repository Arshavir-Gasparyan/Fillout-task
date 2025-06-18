import React from "react";

interface StepCardProps {
  title: string;
  description: string;
  step: number;
  totalSteps: number;
  onNext: () => void;
  onPrevious: () => void;
  className?: string;
}

export default function StepCard({
  title,
  description,
  step,
  totalSteps,
  onNext,
  onPrevious,
  className = "",
}: StepCardProps) {
  return (
    <div
      className={`w-full max-w-xl rounded-2xl border border-white/10 bg-neutral-900 p-12 text-white transition-all duration-300 ${className}`}
    >
      <div className="mb-4">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p className="mt-2 text-sm text-gray-400">{description}</p>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <button
          onClick={onPrevious}
          disabled={step === 1}
          className="cursor-pointer rounded-lg border border-[#F59D0E] px-4 py-2 text-sm text-[#F59D0E] transition hover:bg-white/10 disabled:opacity-30"
        >
          Previous
        </button>

        <span className="text-sm text-[#F59D0E]">
          Page {step} of {totalSteps}
        </span>

        <button
          onClick={onNext}
          disabled={step === totalSteps}
          className="cursor-pointer rounded-lg border border-[#F59D0E] px-4 py-2 text-sm text-[#F59D0E] transition hover:bg-white/10 disabled:opacity-30"
        >
          Next
        </button>
      </div>
    </div>
  );
}
