import React, { useState } from 'react';
import { toast } from './Toast';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) { toast(data.message || 'Message sent!', 'success'); setForm({ name: '', email: '', message: '' }); }
      else { toast(data.error || 'Failed to send.', 'error'); }
    } catch { toast('Connection error.', 'error'); }
    finally { setLoading(false); }
  };

  return (
    <section id="contact" className="py-section-gap border-t border-outline-variant">
      <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="max-w-2xl mx-auto text-center reveal">
          <p className="label-sm text-brand-600 mb-4">Contact</p>
          <h2 className="heading-lg text-primary mb-6">Get in touch</h2>
          <p className="body-md text-secondary mb-10 max-w-md mx-auto">
            Have a project, question, or just want to say hi? Drop me a message.
          </p>

          <form onSubmit={handleSubmit} className="text-left space-y-5 max-w-lg mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="Name"
                className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant rounded-xl text-sm text-primary placeholder:text-secondary/40 focus:outline-none focus:border-brand-500 transition-colors" />
              <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="Email"
                className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant rounded-xl text-sm text-primary placeholder:text-secondary/40 focus:outline-none focus:border-brand-500 transition-colors" />
            </div>
            <textarea name="message" value={form.message} onChange={handleChange} required rows={4} placeholder="Message"
              className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant rounded-xl text-sm text-primary placeholder:text-secondary/40 focus:outline-none focus:border-brand-500 transition-colors resize-none" />

            <button type="submit" disabled={loading}
              className="w-full py-3.5 bg-primary text-on-primary rounded-xl text-sm font-medium hover:opacity-90 transition-all disabled:opacity-50">
              {loading ? 'Sending...' : 'Send message'}
            </button>
          </form>

          <div className="flex justify-center gap-8 mt-12 text-sm text-secondary">
            <a href="mailto:mfaizschl@gmail.com" className="hover:text-primary transition-colors">Email</a>
            <a href="https://www.linkedin.com/in/muhammad-faiz-ramadhan-215a3625b/" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">LinkedIn</a>
            <a href="https://github.com/Muhfaizr21" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">GitHub</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
