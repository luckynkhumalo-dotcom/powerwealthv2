import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Loader2 } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';

console.log('API KEY:', import.meta.env.VITE_GEMINI_API_KEY);

const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });
console.log('API KEY:', import.meta.env.VITE_GEMINI_API_KEY);
const SYSTEM_INSTRUCTION = `You are an advisory bot for Powerwealth Advisory.
Tone: measured, professional, knowledgeable, realistic, human-sounding, no BS.
Context: Powerwealth Advisory provides specialist commercial overlay and project risk advisory for African IPPs, energy transactions, and project-financed assets.
Services include advising Capital Allocators (Lenders & Funds), Project Sponsors & Developers, Corporate Energy Buyers, and Legal & Transaction Advisors.
Team: Gionata Visconti, Dr. Zablon Okwoku Musumba, Lucky Khumalo, Nyasha Horonga, Dr. Yaeesh Yasseen.
Goal: Answer general questions about Powerwealth and its services.
Constraint: If a question is beyond the scope of the website, requires specific consulting advice, or asks for confidential info, politely state that it is beyond your scope and refer them to contact a real human at lucky.khumalo@powerwealth.co.za or via the contact form. Do not invent information. Keep answers concise and direct.`;

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'model', text: string}[]>([
    { role: 'model', text: 'Hello. I am Veza, the Powerwealth advisory assistant. How can I help you understand our services or approach?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [chatSession, setChatSession] = useState<any>(null);

  useEffect(() => {
    try {
      const chat = ai.chats.create({
        model: 'gemini-3-flash-preview',
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
        }
      });
      setChatSession(chat);
    } catch (e) {
      console.error("Failed to initialize chat", e);
    }
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || !chatSession || isLoading) return;

    const userText = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setIsLoading(true);

    try {
      const response = await chatSession.sendMessage({ message: userText });
      setMessages(prev => [...prev, { role: 'model', text: response.text }]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, { role: 'model', text: 'I apologize, but I am currently unable to process your request. Please contact lucky.khumalo@powerwealth.co.za directly.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="bg-white shadow-2xl border border-slate-200 w-80 sm:w-96 h-[500px] mb-4 overflow-hidden flex flex-col rounded-xl"
          >
            {/* Header */}
            <div className="bg-brand-navy p-4 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-brand-cyan" />
                <span className="text-white font-serif text-lg tracking-wide">Powerwealth Assistant</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 p-4 overflow-y-auto bg-slate-50 flex flex-col gap-4">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div 
                    className={`max-w-[85%] p-3 text-sm leading-relaxed ${
                      msg.role === 'user' 
                        ? 'bg-brand-navy text-white rounded-l-xl rounded-tr-xl' 
                        : 'bg-white border border-slate-200 text-slate-700 rounded-r-xl rounded-bl-xl shadow-sm'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white border border-slate-200 text-slate-700 rounded-r-xl rounded-bl-xl shadow-sm p-3 flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin text-brand-cyan" />
                    <span className="text-sm text-slate-500">Thinking...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-3 bg-white border-t border-slate-100">
              <form onSubmit={handleSend} className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask a question..."
                  className="flex-1 px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm font-mono focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all"
                  disabled={isLoading}
                />
                <button 
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="p-2 bg-brand-navy text-white rounded-lg hover:bg-brand-navy/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-brand-navy hover:bg-brand-navy/90 text-white rounded-full shadow-lg flex items-center justify-center transition-transform hover:scale-105"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-7 h-7" />}
      </button>
    </div>
  );
}
