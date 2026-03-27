import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CASE_STUDIES = [
  {
    id: 1,
    tag: "SOVEREIGN PROCUREMENT FAILURE",
    title: "Over R150 Million in Called Guarantees: From Development Gaps That Were Identifiable Before Capital Was Committed",
    body: "A leading consortium held 12 projects in a recent major sovereign procurement window. None reached financial close. The development gaps were structural, and nobody outside the deal was hired to find them.",
    link: "/case-studies/1"
  },
  {
    id: 3,
    tag: "COMMUNITY RISK · SOCIAL LICENCE",
    title: "Where Developers With Greater Resources Failed: And Why",
    body: "In Sekhukhune, Limpopo, a 30-year communal land lease was secured where previous developers had failed. The difference was not resources. It was approach. We mapped deep local dynamics to secure a durable social license.",
    link: "/case-studies/3"
  },
  {
    id: 4,
    tag: "DISTRESSED PROJECTS · CONSTRUCTION",
    title: "Over $50 Million EPC, Stuck: And Why the Existing Advisory Could Not Diagnose It",
    body: "A stalled utility-scale power plant construction in a developing African market. The advisory narrative blamed the contractor. The root cause sat across domains no single advisor was positioned to see.",
    link: "/case-studies/4"
  },
  {
    id: 5,
    tag: "LENDER GOVERNANCE · EAST AFRICA",
    title: "Twenty Years on the Lender's Side of the Table",
    body: "What lenders actually test, what covenants actually cost, and where the gap between contracted governance and operational reality opens under pressure: from someone who has lived it from inside the project company.",
    link: "/case-studies/5"
  }
];

export default function CaseStudies() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 bg-brand-light min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-4xl mb-16">
            <p className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-slate-500 mb-6">Case Studies</p>
            <h1 className="text-4xl md:text-[3.25rem] font-serif text-brand-navy mb-8 leading-[1.1] tracking-tight">
              What actually happens, and what independence would have changed.
            </h1>
            <p className="text-xl md:text-[1.35rem] text-slate-700 leading-[1.6] font-light">
              Real, documented outcomes in African power transactions. We examine the structural gaps that were identifiable before capital was committed.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 border-t border-slate-200 pt-16">
            {CASE_STUDIES.map((cs, idx) => (
              <motion.div 
                key={cs.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 border border-slate-200 flex flex-col h-full group hover:border-brand-cyan transition-colors"
              >
                <p className="text-[11px] font-mono font-bold uppercase tracking-[0.15em] text-brand-cyan mb-4">{cs.tag}</p>
                <h3 className="text-xl md:text-2xl font-serif text-brand-navy mb-4 leading-snug">
                  {cs.title}
                </h3>
                <p className="text-slate-700 text-base leading-[1.6] mb-8 flex-grow">
                  {cs.body}
                </p>
                <Link 
                  to={cs.link}
                  className="text-[11px] font-mono font-bold uppercase tracking-[0.15em] text-brand-navy group-hover:text-brand-cyan transition-colors mt-auto inline-flex items-center"
                >
                  Read full case study <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 pt-12 border-t border-slate-200 max-w-4xl">
            <p className="text-sm text-slate-500 leading-[1.6] italic">
              Powerwealth is a recently established firm. These case studies are drawn from publicly documented outcomes (Case Study 1), from the individual Partners' prior professional experience (Case Studies 3-5), and from patterns visible in the public record. Where outcomes are drawn from a Partner's direct execution track record, this is stated explicitly. As the firm completes engagements under the Powerwealth name, this section will be updated with anonymised observations from live mandates.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
