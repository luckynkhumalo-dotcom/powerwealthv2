import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function CaseStudy4() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 bg-brand-light min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-8">
            <Link to="/case-studies" className="text-brand-cyan text-sm font-medium hover:underline inline-flex items-center">
              ← Back to Case Studies
            </Link>
          </p>
          
          <p className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-slate-500 mb-6">CASE STUDY 04: DISTRESSED PROJECTS</p>
          <h2 className="text-4xl md:text-[3.25rem] font-serif text-brand-navy mb-12 leading-[1.1] tracking-tight">
            Over $50 Million EPC, Stuck: And Why the Existing Advisory Could Not Diagnose It
          </h2>
          
          <div className="text-xl md:text-[1.35rem] text-slate-700 leading-[1.6] font-light mb-16 space-y-6">
            <p>
              A utility-scale power plant construction in a developing African market. Approximately $50 million+ in EPC value. The project had stopped progressing.
            </p>
            <p>
              The advisory narrative blamed contractor performance. The existing consultants had been managing the situation for months. Each advisor had a version of what was wrong. Each version protected that advisor's prior recommendations.
            </p>
            <p>
              The project needed someone who did not have a prior position to defend.
            </p>
          </div>

          <div className="w-16 h-1 bg-brand-cyan mb-16"></div>

          <div className="prose prose-lg max-w-none text-slate-700 space-y-8 font-light leading-[1.6]">
            <h3 className="text-2xl md:text-[1.75rem] font-serif text-brand-navy mb-6 leading-snug">The Hall of Mirrors</h3>
            <p>
              Every advisor inside a stalled project has a prior position. The developer's advisor provided the original advice: they cannot now say it was wrong. The contractor's team defends the contractor's execution. The lender's technical advisor provided the original DD that the lender relied on: they cannot now say it missed something.
            </p>
            <p>
              The result is a project surrounded by narratives that describe symptoms like schedule slippage, contractor disputes, and cost overruns, but do not diagnose the root cause. Because diagnosing the root cause might implicate a prior decision that someone at the table is responsible for.
            </p>

            <div className="w-16 h-1 bg-brand-cyan my-16"></div>

            <h3 className="text-2xl md:text-[1.75rem] font-serif text-brand-navy mb-6 leading-snug">What Independence Diagnosed</h3>
            <p>
              A Powerwealth Senior Partner, formerly responsible for operations across a multi-gigawatt portfolio spanning numerous plants across several African countries for a leading pan-African independent power producer, was engaged through a separate advisory practice.
            </p>
            <p>
              Arriving from outside the project's advisory structure, the Partner identified that the root cause was not contractor performance alone. The resolution required:
            </p>
          </div>
        </motion.div>
      </div>

      <div className="bg-brand-navy py-16 my-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-l-2 border-brand-cyan pl-6 p-6 bg-white/5">
              <p className="text-slate-300 leading-[1.6]">Renegotiating EPC terms that were not achievable under local conditions</p>
            </div>
            <div className="border-l-2 border-brand-cyan pl-6 p-6 bg-white/5">
              <p className="text-slate-300 leading-[1.6]">Restructuring the completion plan to reflect operational reality</p>
            </div>
            <div className="border-l-2 border-brand-cyan pl-6 p-6 bg-white/5 md:col-span-2">
              <p className="text-slate-300 leading-[1.6]">Establishing an O&M framework that would make construction completion meaningful, rather than completing a plant with no operational architecture in place</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg max-w-none text-slate-700 space-y-8 font-light leading-[1.6]">
          <p>
            These were cross-domain interventions (commercial, contractual, and operational) that no single existing advisor was positioned to diagnose because each was embedded in one domain of the project's architecture.
          </p>

          <div className="w-16 h-1 bg-brand-cyan my-16"></div>

          <h3 className="text-2xl md:text-[1.75rem] font-serif text-brand-navy mb-6 leading-snug">The Broader Track Record</h3>
          <p>
            Through this separate advisory practice, the Partner has delivered independent assessment and intervention across African power infrastructure:
          </p>
        </div>
      </div>

      <div className="bg-brand-navy py-16 my-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-l-2 border-brand-cyan pl-6 p-6 bg-white/5">
              <p className="text-slate-300 leading-[1.6]">Red-flag acquisition review on a major thermal fleet in West Africa with contracted PPAs, identifying liabilities that shaped the acquisition strategy and non-binding offer</p>
            </div>
            <div className="border-l-2 border-brand-cyan pl-6 p-6 bg-white/5">
              <p className="text-slate-300 leading-[1.6]">Stress-tested bankability of a large-scale Solar PV + BESS project in Southern Africa for prospective shareholders and lenders</p>
            </div>
            <div className="border-l-2 border-brand-cyan pl-6 p-6 bg-white/5">
              <p className="text-slate-300 leading-[1.6]">Structured a significant gas-to-power project in Central Africa from early-stage concept to bankable position</p>
            </div>
            <div className="border-l-2 border-brand-cyan pl-6 p-6 bg-white/5">
              <p className="text-slate-300 leading-[1.6]">Advised on financial close strategy for a mid-sized gas-to-power project in West Africa</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg max-w-none text-slate-700 space-y-8 font-light leading-[1.6]">
          <p>
            Across these mandates, the pattern repeats: the information was present inside the project. What was absent was someone outside the project's momentum with the mandate and the cross-domain experience to synthesise it into a verdict.
          </p>

          <div className="w-16 h-1 bg-brand-cyan my-16"></div>

          <h3 className="text-2xl md:text-[1.75rem] font-serif text-brand-navy mb-6 leading-snug">Who Needs This</h3>
          
          <div className="space-y-12">
            <div>
              <p className="text-[11px] font-mono font-bold uppercase tracking-[0.15em] text-brand-cyan mb-2">CARD 01: Rescue Investors</p>
              <p className="text-lg text-slate-700 leading-[1.6]">You are considering putting capital into a distressed project. The current owner presents a narrative about what went wrong. That narrative may be accurate. It may also be constructed to protect prior decisions. Before you commit rescue capital, you need an independent diagnosis of what is actually broken, and whether the cost to fix it is justified by the recoverable value.</p>
            </div>
            
            <div>
              <p className="text-[11px] font-mono font-bold uppercase tracking-[0.15em] text-brand-cyan mb-2">CARD 02: Lenders with Exposure</p>
              <p className="text-lg text-slate-700 leading-[1.6]">A project in your portfolio has breached covenants or missed milestones. The sponsor presents a remediation plan. The plan may be credible, or it may be the latest in a sequence that has not worked. An independent diagnostic determines whether the project is stuck (fixable) or structurally broken (requiring exit or write-down).</p>
            </div>

            <div>
              <p className="text-[11px] font-mono font-bold uppercase tracking-[0.15em] text-brand-cyan mb-2">CARD 03: Sponsors</p>
              <p className="text-lg text-slate-700 leading-[1.6]">Your project is not progressing and you cannot determine why. Your existing advisors have been managing the situation but progress is not materialising. The question that often takes the longest to ask: is this project stalled because of what it says it is stalled by? Or is there a root cause that the project narrative has been constructed around?</p>
            </div>
          </div>

          <div className="w-16 h-1 bg-brand-cyan my-16"></div>
          <h3 className="text-2xl md:text-[1.75rem] font-serif text-brand-navy mb-6 leading-snug">Disclosure</h3>
          <div className="border-l-4 border-brand-cyan pl-6 py-2 my-8 text-lg font-serif italic text-brand-navy">
            <p>
              The specific project details and figures are drawn directly from the professional execution track record of the Powerwealth Partner. They are presented here as a transparent reflection of direct, first-hand experience in diagnosing distressed assets, relying on professional integrity rather than external audit, and have been anonymised to protect stakeholder confidentiality.
            </p>
            <p className="mt-4">
              This work was delivered by the Partner through a separate advisory practice, not under the Powerwealth name. Powerwealth engagements are separate and delivered under the Powerwealth name. The experience and methodology described are those of the individual Partner, now available through the Powerwealth platform.
            </p>
          </div>
        </div>

        <div className="mt-20 text-center bg-white p-12 border border-slate-200">
          <p className="text-lg text-slate-700 leading-[1.6] mb-8 max-w-2xl mx-auto">
            The Distressed Project Diagnostic takes 7-14 business days and delivers a root-cause diagnosis with a directional recommendation: Continue / Pause / Restructure.
          </p>
          <div className="inline-flex flex-col items-center justify-center bg-brand-navy text-white px-10 py-5 text-[11px] font-mono font-bold uppercase tracking-[0.2em] transition-colors">
            <span className="mb-2">Contact Lucky Khumalo</span>
            <span className="text-brand-cyan lowercase tracking-normal font-sans font-normal text-sm">+27 82 795 0704 | lucky.khumalo@powerwealth.co.za</span>
          </div>
        </div>
      </div>
    </div>
  );
}
