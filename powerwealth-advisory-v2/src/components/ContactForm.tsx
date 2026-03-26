import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Clock, CheckCircle2 } from 'lucide-react';
import { COUNTRIES } from '../data/countries';

type InquiryType = 
  | 'grid-connection'
  | 'financial-model'
  | 'local-dynamics'
  | 'credit-committee'
  | 'fatal-flaw'
  | 'distressed'
  | 'general';
type UrgencyType = 'live' | '30-days' | 'exploratory';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    role: '',
    email: '',
    countryIso: 'ZA',
    phone: '',
    inquiryType: '' as InquiryType | '',
    urgency: '' as UrgencyType | '',
    context: ''
  });

  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [countrySearch, setCountrySearch] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsCountryDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectedCountry = COUNTRIES.find(c => c.iso === formData.countryIso) || COUNTRIES[0];
  const filteredCountries = COUNTRIES.filter(c => 
    c.name.toLowerCase().includes(countrySearch.toLowerCase()) || 
    c.code.includes(countrySearch)
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate secure backend submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-brand-navy p-10 md:p-14 border border-brand-navy shadow-2xl text-white h-full flex flex-col justify-center items-center text-center"
      >
        <div className="w-16 h-16 bg-brand-cyan/20 rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 className="w-8 h-8 text-brand-cyan" />
        </div>
        <h3 className="text-3xl font-serif mb-4">Inquiry Received</h3>
        <p className="text-slate-300 text-lg max-w-md leading-relaxed mb-8">
          Your request has been securely routed to our senior partnership team. We will review the provided context and contact you within 24 hours to schedule a scoping discussion.
        </p>
        <button 
          onClick={() => setIsSubmitted(false)}
          className="text-sm font-bold uppercase tracking-widest text-brand-cyan hover:text-white transition-colors"
        >
          Submit Another Request
        </button>
      </motion.div>
    );
  }

  return (
    <div className="bg-white border border-slate-200 shadow-xl overflow-hidden">
      <div className="bg-brand-navy p-8 md:p-10 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-cyan opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <h3 className="text-2xl md:text-[1.75rem] font-serif mb-4 relative z-10 leading-snug">Confidential Scoping Request</h3>
        <p className="text-slate-300 text-base md:text-lg max-w-xl leading-[1.6] relative z-10 font-light">
          Designed for capital allocators and project sponsors requiring immediate, senior-level commercial judgment. All submissions are strictly confidential.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="p-8 md:p-10">
        <div className="space-y-8 mb-8">
          {/* Personal & Corporate Details */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">Full Name</label>
              <input 
                type="text" 
                id="name"
                required
                className="w-full bg-slate-50 border border-slate-200 px-4 py-3 text-slate-800 focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all"
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div>
              <label htmlFor="organization" className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">Organization</label>
              <input 
                type="text" 
                id="organization"
                required
                className="w-full bg-slate-50 border border-slate-200 px-4 py-3 text-slate-800 focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all"
                value={formData.organization}
                onChange={e => setFormData({...formData, organization: e.target.value})}
              />
            </div>
            <div>
              <label htmlFor="role" className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">Title / Role</label>
              <input 
                type="text" 
                id="role"
                required
                className="w-full bg-slate-50 border border-slate-200 px-4 py-3 text-slate-800 focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all"
                value={formData.role}
                onChange={e => setFormData({...formData, role: e.target.value})}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">Direct Email</label>
              <input 
                type="email" 
                id="email"
                required
                className="w-full bg-slate-50 border border-slate-200 px-4 py-3 text-slate-800 focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all"
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="phone" className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">Direct Phone</label>
              <div className="flex">
                <div className="relative w-[120px] shrink-0" ref={dropdownRef}>
                  <button 
                    type="button"
                    onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                    className="w-full flex items-center justify-between bg-slate-50 border border-slate-200 border-r-0 px-3 py-3 text-slate-800 focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all cursor-pointer text-sm"
                  >
                    <span className="truncate">{selectedCountry.flag} {selectedCountry.code}</span>
                    <svg className="fill-current h-3 w-3 text-slate-500 ml-2 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </button>
                  
                  {isCountryDropdownOpen && (
                    <div className="absolute z-50 top-full left-0 mt-1 w-[280px] bg-white border border-slate-200 shadow-xl">
                      <div className="p-2 border-b border-slate-100 bg-slate-50">
                        <input
                          type="text"
                          className="w-full bg-white border border-slate-200 px-3 py-2 text-xs text-slate-800 focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all"
                          placeholder="Search country or code..."
                          value={countrySearch}
                          onChange={(e) => setCountrySearch(e.target.value)}
                          onClick={(e) => e.stopPropagation()}
                          autoFocus
                        />
                      </div>
                      <div className="max-h-60 overflow-y-auto">
                        {filteredCountries.map(c => (
                          <button
                            key={c.iso}
                            type="button"
                            className={`w-full text-left px-3 py-2 text-sm hover:bg-slate-50 flex items-center gap-3 transition-colors ${formData.countryIso === c.iso ? 'bg-slate-50 text-brand-cyan font-medium' : 'text-slate-600'}`}
                            onClick={() => {
                              setFormData({...formData, countryIso: c.iso});
                              setIsCountryDropdownOpen(false);
                              setCountrySearch('');
                            }}
                          >
                            <span className="text-base">{c.flag}</span>
                            <span className="truncate flex-1">{c.name}</span>
                            <span className="text-[11px] font-mono text-slate-400">{c.code}</span>
                          </button>
                        ))}
                        {filteredCountries.length === 0 && (
                          <div className="px-3 py-4 text-center text-xs text-slate-500">No countries found</div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
                <input 
                  type="tel" 
                  id="phone"
                  required
                  className="w-full bg-slate-50 border border-slate-200 px-4 py-3 text-slate-800 focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all"
                  value={formData.phone}
                  onChange={e => setFormData({...formData, phone: e.target.value})}
                />
              </div>
            </div>
          </div>

          {/* Request Parameters */}
          <div className="space-y-6 pt-6 border-t border-slate-100">
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">Nature of Inquiry</label>
              <div className="relative">
                <select 
                  required
                  className="w-full appearance-none bg-slate-50 border border-slate-200 px-4 py-3 text-slate-800 focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all cursor-pointer"
                  value={formData.inquiryType}
                  onChange={e => setFormData({...formData, inquiryType: e.target.value as InquiryType})}
                >
                  <option value="" disabled>Select primary focus...</option>
                  <option value="grid-connection">Grid Connection Viability</option>
                  <option value="financial-model">Financial Model Stress-Test</option>
                  <option value="local-dynamics">Community & Land Risk Assessment</option>
                  <option value="credit-committee">Credit Committee Readiness</option>
                  <option value="fatal-flaw">Fatal Flaw Assessment (Pre-Commitment)</option>
                  <option value="distressed">Distressed Project Mandates</option>
                  <option value="general">Other / General Inquiry</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">Transaction Timeline</label>
              <div className="grid grid-cols-3 gap-2">
                {(['live', '30-days', 'exploratory'] as const).map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setFormData({...formData, urgency: type})}
                    className={`py-2 px-2 text-xs font-medium border transition-all ${
                      formData.urgency === type 
                        ? 'bg-brand-navy border-brand-navy text-white' 
                        : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    {type === 'live' ? 'Live / Immediate' : type === '30-days' ? 'Next 30 Days' : 'Exploratory'}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label htmlFor="context" className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">
                High-Level Context <span className="text-slate-400 normal-case font-normal">(Optional)</span>
              </label>
              <textarea 
                id="context"
                rows={3}
                placeholder="Briefly describe the asset, transaction, or specific challenge..."
                className="w-full bg-slate-50 border border-slate-200 px-4 py-3 text-slate-800 focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all resize-none"
                value={formData.context}
                onChange={e => setFormData({...formData, context: e.target.value})}
              ></textarea>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6 text-xs text-slate-500">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-brand-cyan" />
              <span>Strictly Confidential</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-brand-cyan" />
              <span>24h Partner Response</span>
            </div>
          </div>
          
          <button 
            type="submit"
            disabled={isSubmitting || !formData.urgency}
            className="w-full md:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-brand-navy text-white text-[11px] font-mono font-bold uppercase tracking-[0.15em] hover:bg-brand-cyan transition-colors disabled:opacity-70 disabled:cursor-not-allowed group"
          >
            {isSubmitting ? 'Securely Routing...' : 'Connect With a Senior Partner'}
            {!isSubmitting && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
          </button>
        </div>
      </form>
    </div>
  );
}
