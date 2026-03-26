import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function CaseStudy5() {
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
          
          <p className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-slate-500 mb-6">CASE STUDY 05: LENDER GOVERNANCE</p>
          <h2 className="text-4xl md:text-[3.25rem] font-serif text-brand-navy mb-12 leading-[1.1] tracking-tight">
            Twenty Years on the Lender's Side of the Table
          </h2>
          
          <div className="text-xl md:text-[1.35rem] text-slate-700 leading-[1.6] font-light mb-16 space-y-6">
            <p>
              Your financial advisor helps you prepare for lender engagement. They know the process. They have helped sponsors navigate it before.
            </p>
            <p>
              But they know it from your side, the sponsor's side. They know what to present. They do not know, from direct experience, what the lender's credit committee actually focuses on, what the covenant structure actually costs the project company operationally, or where the gap between contracted governance and enforced governance opens under pressure.
            </p>
            <p>
              That knowledge requires twenty years of sitting inside the project company, managing the lender relationship from the inside.
            </p>
          </div>

          <div className="w-16 h-1 bg-brand-cyan mb-16"></div>

          <div className="prose prose-lg max-w-none text-slate-700 space-y-8 font-light leading-[1.6]">
            <h3 className="text-2xl md:text-[1.75rem] font-serif text-brand-navy mb-6 leading-snug">The Experience</h3>
            <p>
              A Powerwealth Senior Partner:
            </p>
            <p>
              Former CFO of a major thermal power company in East Africa, a 70MW+ HFO-fired plant. Shareholders included leading Development Finance Institutions (DFIs) and international technology providers.
            </p>
            <p>
              Former CFO then CEO of a prominent thermal IPP in East Africa, a 90MW plant with a 20-year PPA with the national utility. Sponsors included major European developers.
            </p>
            <p>
              The Partner testified before a national Senate committee investigating electricity costs, confirming plant operations, fuel economics, and shareholder governance under public scrutiny.
            </p>

            <div className="border-l-4 border-brand-cyan pl-6 py-2 my-8 text-lg font-serif italic text-brand-navy">
              <p>
                Technology note: These are thermal (HFO) plants, not renewable energy. The financial governance expertise transfers directly: covenant compliance, DSCR/LLCR management, lender reporting, DFI shareholder oversight, lock-up mechanisms, and distribution controls are identical in thermal and renewable IPP project finance. Powerwealth does not misrepresent the Partner's background as renewable-energy-specific.
              </p>
            </div>

            <div className="w-16 h-1 bg-brand-cyan my-16"></div>

            <h3 className="text-2xl md:text-[1.75rem] font-serif text-brand-navy mb-6 leading-snug">What Twenty Years on the Inside Teaches</h3>
          </div>
        </motion.div>
      </div>

      <div className="bg-brand-navy py-16 my-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-l-2 border-brand-cyan pl-6 p-6 bg-white/5">
              <p className="text-slate-300 leading-[1.6]">What happens when the DSCR approaches the covenant threshold and the lender dispatches its technical advisor</p>
            </div>
            <div className="border-l-2 border-brand-cyan pl-6 p-6 bg-white/5">
              <p className="text-slate-300 leading-[1.6]">What the lock-up account actually costs, not in the model, but in management distraction, lost distribution, and strained sponsor relationships</p>
            </div>
            <div className="border-l-2 border-brand-cyan pl-6 p-6 bg-white/5">
              <p className="text-slate-300 leading-[1.6]">How DFI shareholders actually exercise governance rights under shareholder agreements that sponsors treated as boilerplate at signing</p>
            </div>
            <div className="border-l-2 border-brand-cyan pl-6 p-6 bg-white/5">
              <p className="text-slate-300 leading-[1.6]">What happens when the offtaker experiences payment delays and the lender's security package is tested in practice, not in the base case</p>
            </div>
            <div className="border-l-2 border-brand-cyan pl-6 p-6 bg-white/5 md:col-span-2">
              <p className="text-slate-300 leading-[1.6]">What it means to testify before a Senate committee about your plant's financial structure: the ultimate governance stress test</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg max-w-none text-slate-700 space-y-8 font-light leading-[1.6]">
          <h3 className="text-2xl md:text-[1.75rem] font-serif text-brand-navy mb-6 leading-snug">When the Offtaker Cannot Pay</h3>
          <p>
            The national utility, the offtaker on both PPAs, has experienced documented financial difficulties, reporting losses and being subject to government-directed tariff reviews.
          </p>
          <p>
            When an offtaker's payments slow, the contractual protections in the PPA are tested. The DSRA is drawn. The DSCR calculation triggers covenant monitoring. The lender's rights under the financing agreements (step-in, security enforcement, lock-up) move from theoretical to operational.
          </p>
          <p>
            A developer's financial advisor can model this scenario. The Partner has lived it: from the CEO's desk, reporting to DFI shareholders who hold significant equity and have governance rights that were drafted as standard clauses and are enforced as binding obligations.
          </p>
          <p>
            The relevance to South Africa: NTCSA is replacing Eskom as the transmission counterparty. SAWEM is restructuring the market from single-buyer to competitive trading. Projects financed under the old structure must operate under the new one. The question of what happens when the institutional framework changes around a project, while the debt remains, is not theoretical for the Partner. It is operational experience.
          </p>

          <div className="w-16 h-1 bg-brand-cyan my-16"></div>

          <h3 className="text-2xl md:text-[1.75rem] font-serif text-brand-navy mb-6 leading-snug">What This Means for Your Transaction</h3>
          
          <div className="space-y-12">
            <div>
              <p className="text-[11px] font-mono font-bold uppercase tracking-[0.15em] text-brand-cyan mb-2">CARD 01: For Developers Approaching Lenders</p>
              <p className="text-lg text-slate-700 leading-[1.6]">Before you enter the room, do you know which covenant will constrain you? Which reporting requirement will consume your management team's time? Which governance structure, the one your lawyer drafted as standard, will function very differently in practice than it reads on paper? The Lender DD Readiness Sprint is designed to tell you this before your credibility is on the line.</p>
            </div>
            
            <div>
              <p className="text-[11px] font-mono font-bold uppercase tracking-[0.15em] text-brand-cyan mb-2">CARD 02: For Lenders and DFIs</p>
              <p className="text-lg text-slate-700 leading-[1.6]">The Partner's perspective is the rare view from inside the project company: the reality of what your governance requirements actually mean for project operations. This perspective is almost never available to your own investment team, which sees governance from your side only.</p>
            </div>

            <div>
              <p className="text-[11px] font-mono font-bold uppercase tracking-[0.15em] text-brand-cyan mb-2">CARD 03: For Law Firms</p>
              <p className="text-lg text-slate-700 leading-[1.6]">Your covenant drafting is technically sound. The question is whether the sponsor understands what those covenants will cost operationally, and whether the project's cash flow can sustain both debt service and the operational burden of governance compliance simultaneously.</p>
            </div>
          </div>

          <div className="w-16 h-1 bg-brand-cyan my-16"></div>
          <h3 className="text-2xl md:text-[1.75rem] font-serif text-brand-navy mb-6 leading-snug">Disclosure</h3>
          <div className="border-l-4 border-brand-cyan pl-6 py-2 my-8 text-lg font-serif italic text-brand-navy">
            <p>
              The Partner's experience was delivered in their capacity as CFO and CEO of those entities, not under the Powerwealth name. The governance expertise and lender-relationship knowledge described are those of the individual Partner, now available through the Powerwealth platform alongside the complementary capabilities of the other Partners.
            </p>
          </div>
        </div>

        <div className="mt-20 text-center bg-white p-12 border border-slate-200">
          <p className="text-lg text-slate-700 leading-[1.6] mb-8 max-w-2xl mx-auto">
            If you are approaching lenders in the next 3-6 months and want to know, from someone who has sat on the other side of the table for twenty years, what they will test, what they will reject, and what will cost you more than you expect: request a scoping conversation.
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
