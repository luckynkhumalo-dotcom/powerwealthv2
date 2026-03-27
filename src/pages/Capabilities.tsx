import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const LENSES = [
  {
    id: "01",
    title: "Is the grid connection a fantasy?",
    description: "We test whether the transmission assumptions, connection pathway, and sequencing logic are credible under current Eskom GCCA realities and NTCSA transition dynamics. We evaluate the physical grid capacity, the likelihood of curtailment, and the true cost of deep connection works. If these elements fail, the project is structurally stranded before any other risk materializes, rendering all subsequent development efforts futile.",
    buyers: "Developers, capital allocators, corporate buyers, investors."
  },
  {
    id: "02",
    title: "Will the financial model survive reality?",
    description: "We stress-test whether the financial model's tariff structure, EPC cost assumptions, revenue projections, offtaker credit exposure, and wheeling framework dependencies withstand current market conditions. If the project is pricing risk using assumptions that no longer hold, the investment case becomes a fiction that will unravel during due diligence or, worse, during operation.",
    buyers: "Sponsors, capital allocators, strategic acquirers."
  },
  {
    id: "03",
    title: "Will local dynamics stall execution?",
    description: "We assess whether land control, community shareholding models, stakeholder legitimacy, and ESG governance frameworks are robust enough to survive construction without triggering a community action, land dispute, consent collapse, or institutional credibility failure. We identify the hidden fractures in local relationships. Without these foundational elements securely in place, the project becomes a social and governance risk timebomb.",
    buyers: "Developers, investors, DFIs, corporate buyers."
  },
  {
    id: "04",
    title: "Will the credit committee reject this?",
    description: "A preemptive strike on the exact issues lenders and DFIs will weaponize during due diligence. We find the precise vulnerabilities before the bank does, analyzing debt service coverage ratios, sponsor support requirements, and step-in rights. We ensure your risk allocation aligns with current lending appetites and stress-test the assumptions under downside scenarios. Because the alternative is finding these flaws in a credit committee meeting where your credibility is the collateral.",
    buyers: "Sponsors, preferred bidders."
  },
  {
    id: "05",
    title: "Should this project be killed now?",
    description: "The synthesis. After testing grid viability, financial assumptions, social durability, and bankability, we deliver a definitive senior-led verdict on whether this project is genuinely ready to absorb capital. If the cumulative weight of risk means the rational decision is to stop, we advise halting before capital is locked into a structure that will fail. In practice, the kill verdict can be triggered by any single lens. When the evidence is clear, we stop.",
    buyers: "Capital allocators, strategic acquirers, sponsors at decision gates."
  }
];

export default function Capabilities() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 bg-brand-navy text-white min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?q=80&w=2070&auto=format&fit=crop" 
          alt="Wind Turbines" 
          className="w-full h-full object-cover grayscale opacity-10 mix-blend-overlay"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-20 max-w-4xl">
            <p className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-brand-cyan mb-6">Capabilities</p>
            <h1 className="text-4xl md:text-[3.25rem] font-serif mb-8 leading-[1.1] tracking-tight">
              What Powerwealth does
            </h1>
            <p className="text-xl md:text-[1.35rem] text-slate-300 leading-[1.6] font-light">
              We answer a single, brutal question at the point it still matters: Does this project actually hold together? We apply five lenses to get there. Every one of them has ended a deal.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 border-t border-white/20 pt-16">
            {LENSES.map((lens, idx) => (
              <motion.div 
                key={lens.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col h-full"
              >
                <span className="text-2xl font-serif text-brand-cyan mb-4">{lens.id}.</span>
                <h3 className="text-xl md:text-2xl font-serif mb-4 leading-snug">
                  {lens.title}
                </h3>
                <p className="text-slate-300 text-base leading-[1.6] mb-8 flex-grow">
                  {lens.description}
                </p>
                <div className="pt-6 border-t border-white/10 mt-auto min-h-[100px]">
                  <p className="text-[11px] font-mono font-bold uppercase tracking-[0.15em] text-brand-cyan mb-2">Best Buyers</p>
                  <p className="text-[13px] font-mono text-slate-300 leading-[1.6]">{lens.buyers}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-24 border-t border-white/20 pt-16 max-w-4xl"
          >
            <h3 className="text-2xl md:text-3xl font-serif mb-6 leading-snug">
              Distressed Project Mandates
            </h3>
            <p className="text-slate-300 text-lg leading-[1.6] mb-8">
              Right now, this is where most mandates begin. For projects that are delayed, stuck, or failing to close, we apply the same analytical framework to diagnose whether the project's grid position, economics, social structures, and bankability can be restructured to meet current market reality, or if the sunk costs should be written off.
            </p>
            <div className="pt-6 border-t border-white/10">
              <p className="text-[11px] font-mono font-bold uppercase tracking-[0.15em] text-brand-cyan mb-2">Best Buyers</p>
              <p className="text-[13px] font-mono text-slate-300 leading-[1.6]">Rescue investors, shareholders, sponsors.</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
