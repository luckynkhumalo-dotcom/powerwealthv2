/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, Linkedin, Mail } from 'lucide-react';
import Chatbot from './components/Chatbot';
import Home from './pages/Home';
import CaseStudies from './pages/CaseStudies';
import CaseStudy1 from './pages/CaseStudy1';
import CaseStudy3 from './pages/CaseStudy3';
import CaseStudy4 from './pages/CaseStudy4';
import CaseStudy5 from './pages/CaseStudy5';
import Capabilities from './pages/Capabilities';

const NAV_LINKS = [
  {name:"What Kills Deals",href:"/#what-kills-deals"},
  {name:"How We Work",href:"/#how-we-work"},
  {name:"Who We Serve",href:"/#who-we-serve"},
  {name:"Team",href:"/#team"}
];

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle hash scrolling when location changes
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-white font-sans text-brand-dark selection:bg-brand-navy selection:text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-navy shadow-lg py-4' : 'bg-brand-navy py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Link to="/" onClick={() => window.scrollTo(0, 0)} className="flex items-center">
                <img src="/Powerwealth-Black - Clean1.png" alt="Powerwealth Advisory" className="h-8 md:h-10 w-auto object-contain brightness-0 invert" />
              </Link>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center space-x-8">
              {NAV_LINKS.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-[11px] font-mono font-bold tracking-[0.15em] uppercase text-white hover:text-brand-cyan transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <Link to="/case-studies" className="text-[11px] font-mono font-bold tracking-[0.15em] uppercase text-brand-cyan hover:text-white transition-colors">
                Case Studies →
              </Link>
              <a href="/#contact" className="bg-white text-brand-navy px-6 py-2.5 text-[11px] font-mono font-bold uppercase tracking-[0.15em] hover:bg-brand-cyan hover:text-white transition-colors">
                Contact
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white"
              >
                {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-brand-navy pt-24 px-4 border-t border-white/10">
          <div className="flex flex-col space-y-0">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-mono font-bold text-white uppercase tracking-[0.15em] py-6 border-b border-white/10"
              >
                {link.name}
              </a>
            ))}
            <Link to="/case-studies" onClick={() => setMobileMenuOpen(false)} className="text-sm font-mono font-bold text-brand-cyan uppercase tracking-[0.15em] py-6 border-b border-white/10">
              Case Studies →
            </Link>
            <a href="/#contact" onClick={() => setMobileMenuOpen(false)} className="mt-8 bg-white text-brand-navy px-6 py-4 text-center text-[11px] font-mono font-bold uppercase tracking-[0.15em]">
              Contact Us
            </a>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/capabilities" element={<Capabilities />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/case-studies/1" element={<CaseStudy1 />} />
          <Route path="/case-studies/3" element={<CaseStudy3 />} />
          <Route path="/case-studies/4" element={<CaseStudy4 />} />
          <Route path="/case-studies/5" element={<CaseStudy5 />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="bg-brand-navy text-white py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                <img src="/Powerwealth-Black - Clean.png" alt="Powerwealth Advisory" className="h-10 w-auto object-contain mb-6 brightness-0 invert" />
              </Link>
              <p className="text-slate-400 max-w-md text-sm leading-relaxed">
                Independent judgment on African power risk.
              </p>
            </div>
            <div className="flex md:justify-end gap-4">
              <a href="https://www.linkedin.com/company/powerwealth-advisory/" target="_blank" rel="noopener noreferrer" className="p-3 border border-white/20 hover:bg-white hover:text-brand-navy transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:lucky.khumalo@powerwealth.co.za" className="p-3 border border-white/20 hover:bg-white hover:text-brand-navy transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[10px] font-mono text-slate-500 uppercase tracking-[0.15em]">
              &copy; {new Date().getFullYear()} Powerwealth Advisory. All rights reserved.
            </p>
            <div className="flex gap-6 text-[10px] font-mono text-slate-500 uppercase tracking-[0.15em]">
              <a href="https://www.powerwealth.co.za" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">www.powerwealth.co.za</a>
              <a href="/Privacy-Policy.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="/Terms-of-Use.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Chatbot Widget */}
      <Chatbot />
    </div>
  );
}

