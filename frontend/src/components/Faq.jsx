import React, { useState, useEffect } from 'react';
import { FiChevronDown } from 'react-icons/fi';

const Faq = () => {
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    fetch('/api/faqs')
      .then(r => r.json())
      .then(d => { 
        if (d && d.data && Array.isArray(d.data)) setFaqs(d.data);
        else if (Array.isArray(d)) setFaqs(d);
        else setFaqs([]);
      })
      .catch(() => setFaqs([]))
      .finally(() => setLoading(false));
  }, []);

  const toggleFaq = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  if (loading || faqs.length === 0) return null;

  return (
    <section id="faq" className="py-24 border-t border-outline-variant bg-surface">
      <div className="max-w-3xl mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-surface-container text-brand-600 text-sm font-semibold tracking-wider mb-4 border border-outline-variant">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary">Pertanyaan Umum</h2>
          <p className="mt-4 text-secondary">Beberapa pertanyaan yang sering diajukan terkait layanan dan pengalaman saya.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={faq.id} 
                className={`border border-outline-variant rounded-2xl overflow-hidden transition-all duration-300 reveal ${isOpen ? 'bg-surface-container shadow-sm border-brand-500/30' : 'bg-surface hover:bg-surface-container-lowest'}`}
                style={{ transitionDelay: `${idx * 0.05}s` }}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none"
                >
                  <h3 className={`font-semibold text-base md:text-lg transition-colors ${isOpen ? 'text-brand-600' : 'text-primary'}`}>
                    {faq.question}
                  </h3>
                  <div className={`shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-brand-600' : 'text-secondary'}`}>
                    <FiChevronDown size={20} />
                  </div>
                </button>
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-secondary leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
