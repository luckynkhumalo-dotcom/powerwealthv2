import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function CaseStudy3() {
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
          
          <p className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-slate-500 mb-6">CASE STUDY 03: COMMUNITY & LAND RISK</p>
          <h2 className="text-4xl md:text-[3.25rem] font-serif text-brand-navy mb-12 leading-[1.1] tracking-tight">
            Where Developers With Greater Resources Failed: And Why
          </h2>
          
          <div className="text-xl md:text-[1.35rem] text-slate-700 leading-[1.6] font-light mb-16 space-y-6">
            <p>
              In Sekhukhune, Limpopo, a 30-year communal land lease was secured over 900 hectares for a 340MW solar PV and BESS project. The lease is backed by a signed Traditional Council Resolution and a Community Shareholding Equity Model that achieved unanimous local leadership support.
            </p>
            <p>
              Previous developers with significantly greater resources had attempted to secure community agreements on the same land. They failed. Not because their offers were insufficient. Because their approach was wrong.
            </p>
          </div>

          <div className="w-16 h-1 bg-brand-cyan mb-16"></div>

          <div className="prose prose-lg max-w-none text-slate-700 space-y-8 font-light leading-[1.6]">
            <h3 className="text-2xl md:text-[1.75rem] font-serif text-brand-navy mb-6 leading-snug">What the Previous Developers Got Wrong</h3>
            <p>
              The developers who failed offered financial arrangements: lease payments, community trust structures, employment commitments. Standard practice. Well-resourced. Professionally executed.
            </p>
            <p>
              The community declined.
            </p>
            <p>
              Not because the financial offer was inadequate. Because the community's relationship to the land was not transactional. The engagement approach assumed it was. That assumption, made by every advisor in the room and reinforced by every precedent the advisors had seen, was the structural error.
            </p>
            <p>
              A signed community agreement is a legal document. It does not tell you whether the community believes the agreement was fair, whether the signatories had genuine authority, or whether the community's relationship to the land is the kind that a financial arrangement can resolve.
            </p>

            <div className="w-16 h-1 bg-brand-cyan my-16"></div>

            <h3 className="text-2xl md:text-[1.75rem] font-serif text-brand-navy mb-6 leading-snug">What the Independent Approach Did Differently</h3>
            <p>According to Lucky Khumalo, Powerwealth Partner:</p>
            <p>
              Rather than arriving with a financial proposal and seeking community approval, the approach began with understanding the community's perspective: their history with the land, their prior experiences with developers, the internal political dynamics of the traditional authority, the specific concerns that financial offers alone could not address.
            </p>
            <p>
              The Community Conviction Assessment methodology, developed from this and other experiences, tests whether the community's position is genuinely supportive, conditionally supportive, or structurally opposed. It is built from direct primary-source intelligence: conversations within the community, assessment of local political dynamics, and understanding of the community's historical relationship with the land, not from document review.
            </p>
            <p className="font-medium text-brand-navy">
              The result: unanimous local leadership support. A 30-year lease. A Community Shareholding Equity Model. Projected lifetime socio-economic impact exceeding R800 million.
            </p>

            <div className="border-l-4 border-brand-cyan pl-6 py-2 my-8 text-lg font-serif italic text-brand-navy">
              <p>
                These outcomes—the 30-year lease, unanimous leadership support, and projected R800M+ socio-economic impact—are drawn directly from the professional execution track record of Powerwealth Partner Lucky Khumalo. They are presented here as a transparent reflection of his direct, first-hand experience in delivering complex community agreements, relying on professional integrity rather than external audit.
              </p>
            </div>

            <div className="w-16 h-1 bg-brand-cyan my-16"></div>

            <h3 className="text-2xl md:text-[1.75rem] font-serif text-brand-navy mb-6 leading-snug">Why This Cannot Be Delivered by the Developer's Own Consultant</h3>
            <p>
              The developer's community engagement consultant is hired by the developer. Their mandate and their continued relationship depend on obtaining community agreement. They are competent professionals doing important work.
            </p>
            <p>
              But their structural position makes them the wrong party to independently assess whether the agreement reflects durable support or whether it is a formal document that masks unresolved tensions.
            </p>
            <p>
              The DFI's E&S advisor reviews the documentation: stakeholder engagement records, grievance mechanisms, community agreements. They assess whether the form of compliance has been met. They do not, and are not scoped to, assess whether the substance behind the documentation will survive 20 years of operations.
            </p>

            <div className="w-16 h-1 bg-brand-cyan my-16"></div>

            <h3 className="text-2xl md:text-[1.75rem] font-serif text-brand-navy mb-6 leading-snug">Questions the Risk Register Rarely Asks</h3>
            
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <span className="text-brand-cyan font-serif text-xl leading-none mt-[-2px]">→</span>
                <span className="text-base text-slate-800 font-medium leading-[1.6]">Who actually signed, and do they represent the affected community, or just the faction the developer engaged?</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-brand-cyan font-serif text-xl leading-none mt-[-2px]">→</span>
                <span className="text-base text-slate-800 font-medium leading-[1.6]">Is there a documented grievance history that predates the project? Has it been resolved or merely acknowledged?</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-brand-cyan font-serif text-xl leading-none mt-[-2px]">→</span>
                <span className="text-base text-slate-800 font-medium leading-[1.6]">What do ward-level politics look like at this site? Is the traditional authority unified or contested?</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-brand-cyan font-serif text-xl leading-none mt-[-2px]">→</span>
                <span className="text-base text-slate-800 font-medium leading-[1.6]">Has the community's position ever changed on a previous development, and if so, why?</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-brand-cyan font-serif text-xl leading-none mt-[-2px]">→</span>
                <span className="text-base text-slate-800 font-medium leading-[1.6]">Is the community's relationship to this land transactional or identity-based?</span>
              </li>
            </ul>

            <div className="border-l-4 border-brand-cyan pl-6 py-2 my-8 text-lg font-serif italic text-brand-navy">
              <p>
                Community opposition that reaches lender due diligence at an advanced stage is almost never recoverable at a reasonable cost. The diagnostic is more valuable before site commitment than after.
              </p>
            </div>

            <div className="w-16 h-1 bg-brand-cyan my-16"></div>
            <h3 className="text-2xl md:text-[1.75rem] font-serif text-brand-navy mb-6 leading-snug">Disclosure</h3>
            <div className="border-l-4 border-brand-cyan pl-6 py-2 my-8 text-lg font-serif italic text-brand-navy">
              <p>
                The Sekhukhune outcome was delivered by Lucky Khumalo through Mwangaza Energy International, not under the Powerwealth name. The Community Conviction Assessment methodology is a proprietary Powerwealth tool, available through the Community & Land Risk Diagnostic.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="mt-20 text-center bg-white p-12 border border-slate-200">
          <p className="text-lg text-slate-700 leading-[1.6] mb-8 max-w-2xl mx-auto">
            The Community & Land Risk Diagnostic takes 7-15 business days and delivers a Go / Caution / No-Go assessment based on direct primary-source intelligence, not document review.
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
