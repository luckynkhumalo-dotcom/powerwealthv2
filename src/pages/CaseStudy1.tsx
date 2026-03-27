import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CaseStudy1() {
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
          
          <p className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-slate-500 mb-6">CASE STUDY 01: SOVEREIGN PROCUREMENT FAILURE</p>
          <h2 className="text-4xl md:text-[3.25rem] font-serif text-brand-navy mb-12 leading-[1.1] tracking-tight">
            Over R150 Million in Called Guarantees: From Development Gaps That Were Identifiable Before Capital Was Committed
          </h2>
          
          <div className="text-xl md:text-[1.35rem] text-slate-700 leading-[1.6] font-light mb-16 space-y-6">
            <p>
              In a recent major sovereign procurement window, a leading consortium, backed by one of the world's largest pure-play renewable energy developers, held preferred bidder status for a double-digit portfolio of wind and solar projects exceeding 1.2GW. It was the largest allocation in the bid window.
            </p>
            <p>
              None of the projects reached financial close. The courts ordered the calling of over R150 million in bid bond guarantees.
            </p>
            <p>
              The development gaps that caused the failure were structural. They were identifiable before capital was committed. And nobody outside the deal was hired to find them.
            </p>
          </div>

          <div className="w-16 h-1 bg-brand-cyan mb-16"></div>

          <div className="prose prose-lg max-w-none text-slate-700 space-y-8 font-light leading-[1.6]">
            <h3 className="text-2xl md:text-[1.75rem] font-serif text-brand-navy mb-6 leading-snug">The Advisory Architecture That Was in Place</h3>
            <p>
              This was not a team that lacked advisory. Mainstream had technical advisors who assessed the wind resource. Financial advisors who built the model. Legal counsel who structured the contracts. Community consultants who managed stakeholder engagement.
            </p>
            <p>
              Every advisor was competent within their scope. Every advisor was hired to advance the project toward financial close.
            </p>
            <p>
              Nobody was mandated to stand outside the deal's momentum and ask: does this hold together?
            </p>

            <div className="w-16 h-1 bg-brand-cyan my-16"></div>

            <h3 className="text-2xl md:text-[1.75rem] font-serif text-brand-navy mb-6 leading-snug">What the Public Record Shows</h3>
          </div>
        </motion.div>
      </div>

      <div className="bg-brand-navy py-16 my-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-l-2 border-brand-cyan pl-6 p-6 bg-white/5">
              <p className="text-brand-cyan font-medium mb-2">1. The procuring authority announced preferred bidders totalling over 2.5GW</p>
            </div>
            <div className="border-l-2 border-brand-cyan pl-6 p-6 bg-white/5">
              <p className="text-brand-cyan font-medium mb-2">2. The consortium held the largest single allocation in the bid window</p>
            </div>
            <div className="border-l-2 border-brand-cyan pl-6 p-6 bg-white/5">
              <p className="text-brand-cyan font-medium mb-2">3. None of their allocated projects reached financial close</p>
            </div>
            <div className="border-l-2 border-brand-cyan pl-6 p-6 bg-white/5">
              <p className="text-brand-cyan font-medium mb-2">4. The courts ordered over R150M in called bid bond guarantees</p>
            </div>
            <div className="border-l-2 border-brand-cyan pl-6 p-6 bg-white/5">
              <p className="text-brand-cyan font-medium mb-2">5. Tens of millions in additional guarantees were ruled expired after security lapsed</p>
            </div>
            <div className="border-l-2 border-brand-cyan pl-6 p-6 bg-white/5">
              <p className="text-brand-cyan font-medium mb-2">6. Total guarantee exposure exceeded R250M</p>
            </div>
            <div className="border-l-2 border-brand-cyan pl-6 p-6 bg-white/5">
              <p className="text-brand-cyan font-medium mb-2">7. The RFP bid guarantee requirement was substantial (e.g., R200,000/MW)</p>
            </div>
            <div className="border-l-2 border-brand-cyan pl-6 p-6 bg-white/5">
              <p className="text-brand-cyan font-medium mb-2">8. The majority of preferred bidders in this window were not shovel-ready, facing outstanding environmental authorisations, permitting, and grid confirmations</p>
            </div>
            <div className="border-l-2 border-brand-cyan pl-6 p-6 bg-white/5">
              <p className="text-brand-cyan font-medium mb-2">9. Less than half of the awarded projects in that window ultimately reached commercial close</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg max-w-none text-slate-700 space-y-8 font-light leading-[1.6]">
          <h3 className="text-2xl md:text-[1.75rem] font-serif text-brand-navy mb-6 leading-snug">The Contrast</h3>
          <p>
            A competing international developer, bidding a prudent, slightly higher tariff, closed their entire wind portfolio within 14 months of the preferred bidder announcement. They had initiated self-build substation construction even before financial close.
          </p>
          <p>
            The window's weighted average tariff was aggressively low, leaving little room for macroeconomic shifts.
          </p>
          <div className="border-l-4 border-brand-cyan pl-6 py-2 my-8 text-xl md:text-2xl font-serif italic text-brand-navy">
            <p>
              Publicly available tariff data strongly suggests the failed consortium's tariff was well below the successful competitor's. Under the procurement's heavy price weighting, winning the largest allocation implies pricing materially below the average. This is arithmetic inference consistent with financial reporting that "projects won on very low tariffs later fell through." The specific tariff is protected by confidentiality, but the structural vulnerability was mathematically visible.
            </p>
          </div>

          <div className="w-16 h-1 bg-brand-cyan my-16"></div>

          <h3 className="text-2xl md:text-[1.75rem] font-serif text-brand-navy mb-6 leading-snug">What Independence Would Have Surfaced</h3>
          
          <div className="space-y-12">
            <div>
              <p className="text-[11px] font-mono font-bold uppercase tracking-[0.15em] text-brand-cyan mb-2">CARD 01</p>
              <h4 className="text-xl md:text-2xl font-serif text-brand-navy mb-3 leading-snug">Tariff-to-Cost Margin</h4>
              <p>A tariff well below the window's average leaves almost no margin for cost movement. Between bid submission and financial close, global commodity prices shifted: steel, copper, polysilicon, shipping. Updated grid codes imposed new compliance costs not reflected in bid-stage EPC pricing.</p>
              <p className="mt-4">An independent review at preferred bidder stage would have tested: at current EPC pricing, not bid-stage pricing, does this tariff still cover costs? What is the margin? Is it sufficient to absorb further movement during the financial close runway?</p>
              <p className="mt-4">The developer's own financial advisor, whose mandate was to reach financial close, had no structural incentive to run this test. The answer might have been: this tariff is no longer viable. That would have stopped the deal, and the advisor's mandate.</p>
            </div>
            
            <div>
              <p className="text-[11px] font-mono font-bold uppercase tracking-[0.15em] text-brand-cyan mb-2">CARD 02</p>
              <h4 className="text-xl md:text-2xl font-serif text-brand-navy mb-3 leading-snug">Grid Path Credibility</h4>
              <p>Grid connection assumptions were built on developer timelines, not substation queue history. Specific Eskom substations have documented multi-year connection queues. The congestion data was publicly available. The financial models did not reflect it.</p>
              <p className="mt-4">The technical advisor reviewed the grid connection study, the document the developer prepared. Their scope was to assess technical adequacy, not to challenge whether the timeline was realistic given the substation's actual queue. That distinction between reviewing a document and challenging its assumptions is the distinction between scoped technical DD and independent commercial challenge.</p>
            </div>

            <div>
              <p className="text-[11px] font-mono font-bold uppercase tracking-[0.15em] text-brand-cyan mb-2">CARD 03</p>
              <h4 className="text-xl md:text-2xl font-serif text-brand-navy mb-3 leading-snug">Development Readiness</h4>
              <p>Outstanding environmental authorisations, permitting, and community agreements at designation meant the financial close timeline had to accommodate completing these workstreams in parallel with lender engagement.</p>
              <p className="mt-4">An independent review would have asked: can all outstanding workstreams complete within the financial close window simultaneously, not sequentially? What is the critical path? If the environmental authorisation is appealed, does the timeline survive?</p>
            </div>

            <div>
              <p className="text-[11px] font-mono font-bold uppercase tracking-[0.15em] text-brand-cyan mb-2">CARD 04</p>
              <h4 className="text-xl md:text-2xl font-serif text-brand-navy mb-3 leading-snug">Convergent Failure</h4>
              <p>No single risk killed these projects. The tariff margin alone might have been survivable. The grid delay alone might have been manageable. What made the position irrecoverable was the convergence: a tariff with no margin, hit by cost escalation, on a timeline extended by development gaps, for projects that could not absorb delay because the grid position was not secured.</p>
              <p className="mt-4">This convergent failure is visible only from outside the deal. Inside, each workstream is managed separately. Nobody manages the interaction between them. When one domain shifts, the cascade through every other domain is invisible to any single advisor.</p>
            </div>
          </div>

          <div className="w-16 h-1 bg-brand-cyan my-16"></div>

          <h3 className="text-2xl md:text-[1.75rem] font-serif text-brand-navy mb-6 leading-snug">The Cost of Absence</h3>
          <p>
            Over R150 million in called guarantees. Tens of millions in expired guarantees. Years of development capital written off.
          </p>
          <p>
            The cost of an independent commercial challenge of the portfolio would have represented less than 1% of the guarantee exposure that crystallised.
          </p>
        </div>
      </div>

      <div className="bg-brand-navy py-16 my-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl md:text-[1.75rem] font-serif text-white mb-8 leading-snug">Why This Matters Now</h3>
          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <span className="text-brand-cyan font-serif text-xl leading-none mt-[-2px]">―</span>
              <span className="text-base text-slate-300 leading-[1.6]">Subsequent procurement windows continue to award projects under the exact same stringent bid guarantee mechanisms.</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-brand-cyan font-serif text-xl leading-none mt-[-2px]">―</span>
              <span className="text-base text-slate-300 leading-[1.6]">Grid capacity has not expanded to match the pipeline. The transmission bottleneck that contributed to these failures remains the binding physical constraint.</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-brand-cyan font-serif text-xl leading-none mt-[-2px]">―</span>
              <span className="text-base text-slate-300 leading-[1.6]">EPC costs have moved since bid-stage assumptions. Updated grid codes have changed compliance costs.</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-brand-cyan font-serif text-xl leading-none mt-[-2px]">―</span>
              <span className="text-base text-slate-300 leading-[1.6]">New institutional interfaces (such as the unbundling of state utilities and new market trading rules) create transition risks that did not exist when these projects were initially developed.</span>
            </li>
          </ul>
          <p className="text-slate-300 text-lg leading-[1.6] mt-8 font-light">
            The question is whether someone outside the deal's momentum has independently tested the assumptions before lender engagement, or whether the first independent challenge will come from the lender's own DD, at a point where the developer's credibility is already on the line.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-16 h-1 bg-brand-cyan my-16"></div>
        <h3 className="text-2xl md:text-[1.75rem] font-serif text-brand-navy mb-6 leading-snug">Disclosure</h3>
        <div className="border-l-4 border-brand-cyan pl-6 py-2 my-8 text-lg font-serif italic text-brand-navy">
          <p className="mb-4">
            Powerwealth did not advise on this transaction. This case study is a retrospective analysis of a documented, public-record outcome in the African power sector. Every fact is sourced to court judgments, company press releases, government media statements, or established industry media, anonymized here to focus on the structural lessons rather than the specific participants.
          </p>
          <p>
            Powerwealth is recently established and has not completed engagements under its own name. We disclose this because a firm that asks you to trust its judgment on your transaction should first demonstrate it can tell you the truth about itself.
          </p>
        </div>

        <div className="mt-20 text-center bg-white p-12 border border-slate-200">
          <p className="text-lg text-slate-700 leading-[1.6] mb-8 max-w-2xl mx-auto">
            If you have a project approaching lender engagement and want to test the assumptions before the lender does, describe the situation to us. We will respond in writing within 5 business days with an assessment of the three assumptions most likely to be challenged. No cost. No obligation.
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
